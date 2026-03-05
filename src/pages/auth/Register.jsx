import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("details"); // details, otp
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendDetailsAndOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name.");
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      // Check if user already exists
      if (authService.userExists(email)) {
        setError("This email is already registered. Please login instead.");
        setLoading(false);
        return;
      }

      await authService.sendOTP(email);
      setStep("otp");
    } catch (err) {
      setError(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTPAndRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      setLoading(false);
      return;
    }

    try {
      await authService.verifyOTP(email, otpString);
      await authService.registerUser({
        email,
        firstName,
        lastName,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOTPChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`register-otp-input-${index + 1}`)?.focus();
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`register-otp-input-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48"></div>
          <div className="absolute w-72 h-72 bg-white rounded-full bottom-0 right-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-semibold text-blue-600">
              BW
            </div>
            <span className="text-2xl font-bold text-white">Beyond Workz</span>
          </div>
        </div>

        {/* Center - Illustration placeholder */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* You can replace this with an actual image */}
          <div className="text-center">
            <div className="text-6xl mb-6 opacity-80">👨‍💼</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Find Work Beyond Limits
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-sm">
              Discover blue-collar and white-collar opportunities tailored to
              your skill, experience, and ambition.
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
              ⭐ Trusted by 50,000+ job seekers
            </div>
          </div>
        </div>

        <div className="relative z-10"></div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Create Account
            </p>
            <h1 className="text-3xl font-bold text-slate-900">Beyond Workz</h1>
          </div>

          {/* Details Step - Email, First Name, Last Name */}
          {step === "details" && (
            <form onSubmit={handleSendDetailsAndOTP} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={
                  loading ||
                  !firstName.trim() ||
                  !lastName.trim() ||
                  !email.trim()
                }
                className="w-full mt-6 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending OTP...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send OTP
                  </>
                )}
              </button>

              <p className="text-center text-sm text-slate-600 mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          )}

          {/* OTP Step */}
          {step === "otp" && (
            <form onSubmit={handleVerifyOTPAndRegister} className="space-y-6">
              <div>
                <p className="text-sm text-slate-600 mb-4">
                  We've sent a 6-digit code to <strong>{email}</strong>
                </p>
                <label className="block text-sm font-medium text-slate-700 mb-4">
                  Enter OTP
                </label>

                {/* 6 OTP Input Boxes */}
                <div className="flex gap-2 justify-center mb-6">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`register-otp-input-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      onKeyDown={(e) => handleOTPKeyDown(index, e)}
                      className="w-12 h-12 text-center text-2xl font-semibold border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600"
                      placeholder="0"
                    />
                  ))}
                </div>

                <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 mb-6">
                  <p className="text-xs text-blue-700">
                    💡 Test OTP: <span className="font-semibold">123456</span>
                  </p>
                </div>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={loading || otp.join("").length !== 6}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Verifying OTP...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      Register
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("details");
                    setError("");
                  }}
                  className="w-full mt-3 py-3 px-6 text-slate-600 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Change Details
                </button>
              </div>
            </form>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500 mb-4">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 underline"
              >
                Privacy Policy
              </a>
            </p>
            <p className="text-xs text-slate-500">
              🔒 Your data is encrypted and secured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
