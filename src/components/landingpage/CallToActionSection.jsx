import GoogleIcon from "../../assets/icons/google-icon.svg";
import MailIcon from "../../assets/icons/mail.svg";
import CtaBg from "../../assets/images/background-poster.png";

const CallToActionSection = () => {
  return (
    <section className="w-full">
      {/* FULL WIDTH BANNER */}
      <div
        className="w-full px-12 py-14 text-white shadow-lg
        flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between
        bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${CtaBg})`,
        }}
      >
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Empower your career with <br />
            Beyond Workz today
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-3">
          {/* Buttons */}
          <div className="flex gap-4">
            {/* Google */}
            <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-100 transition">
              <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

            {/* Email */}
            <button
              className="flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-white shadow"
              style={{ background: "#F97316" }}
            >
              <img src={MailIcon} alt="Mail" className="w-5 h-5" />
              Continue with Email
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-blue-100">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">T&amp;C.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
