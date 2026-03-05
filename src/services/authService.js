// Mock authentication service
// In production, replace with actual API calls

export const authService = {
  // Test credentials
  TEST_EMAIL: "demo@beyondworkz.com",
  TEST_OTP: "123456",

  // Send OTP to email
  sendOTP: async (email) => {
    // Simulate API call with realistic delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Email validation
        if (!email || !email.includes("@")) {
          reject({
            success: false,
            message: "Please enter a valid email address.",
          });
          return;
        }

        // Store email temporarily for verification
        sessionStorage.setItem("pendingEmail", email);

        // For demo/test: use hardcoded OTP for demo email
        let otp;
        if (email === authService.TEST_EMAIL) {
          otp = authService.TEST_OTP; // Test OTP for demo email
        } else {
          otp = Math.floor(100000 + Math.random() * 900000).toString();
        }

        console.log(`✉️ OTP sent to ${email}: ${otp}`); // In production, this would be sent via email
        sessionStorage.setItem("mockOTP", otp); // Only for development
        sessionStorage.setItem("otpTimestamp", Date.now().toString());

        resolve({
          success: true,
          message: "OTP sent to your email",
          expiresIn: 600, // 10 minutes
        });
      }, 1500);
    });
  },

  // Verify OTP
  verifyOTP: async function (email, otp) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockOTP = sessionStorage.getItem("mockOTP");
        const pendingEmail = sessionStorage.getItem("pendingEmail");
        const otpTimestamp = parseInt(
          sessionStorage.getItem("otpTimestamp") || "0",
        );

        // Check if OTP has expired (10 minutes)
        if (Date.now() - otpTimestamp > 10 * 60 * 1000) {
          reject({
            success: false,
            message: "OTP has expired. Please request a new one.",
          });
          return;
        }

        // Check email and OTP match
        if (email === pendingEmail && otp === mockOTP) {
          sessionStorage.removeItem("mockOTP");
          sessionStorage.removeItem("otpTimestamp");
          resolve({
            success: true,
            message: "OTP verified successfully",
            isNewUser: !this.userExists(email),
          });
        } else {
          reject({
            success: false,
            message: "Invalid OTP. Please try again.",
          });
        }
      }, 1000);
    });
  },

  // Register new user
  registerUser: async (userData) => {
    return new Promise((resolve, reject) => {
      if (!userData.email || !userData.firstName) {
        reject({
          success: false,
          message: "Missing required fields",
        });
        return;
      }

      setTimeout(() => {
        const user = {
          id: Date.now().toString(),
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName || "",
          createdAt: new Date().toISOString(),
          isRegistered: true,
        };

        // Store user in localStorage (mock)
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        // Set current user
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("authToken", `token_${user.id}_${Date.now()}`);
        sessionStorage.removeItem("pendingEmail");

        resolve({
          success: true,
          user,
          message: "User registered successfully",
        });
      }, 1000);
    });
  },

  // Login existing user or auto-register first-time user
  loginUser: async function (email) {
    return new Promise((resolve, reject) => {
      if (!email) {
        reject({
          success: false,
          message: "Email is required",
        });
        return;
      }

      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        let user = users.find((u) => u.email === email);

        // If user doesn't exist, auto-register them
        if (!user) {
          user = {
            id: Date.now().toString(),
            email: email,
            firstName: email.split("@")[0], // Use email prefix as first name
            lastName: "",
            createdAt: new Date().toISOString(),
            isRegistered: false,
          };
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));
        }

        // Set authentication
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("authToken", `token_${user.id}_${Date.now()}`);
        sessionStorage.removeItem("pendingEmail");
        sessionStorage.removeItem("mockOTP");

        resolve({
          success: true,
          user,
          message: "Login successful",
        });
      }, 1000);
    });
  },

  // Check if user exists
  userExists: (email) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.some((u) => u.email === email);
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  },

  // Get current auth token
  getAuthToken: () => {
    return localStorage.getItem("authToken") || null;
  },

  // Logout
  logout: () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("pendingEmail");
    sessionStorage.removeItem("mockOTP");
    sessionStorage.removeItem("otpTimestamp");
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!(
      localStorage.getItem("currentUser") && localStorage.getItem("authToken")
    );
  },

  // Get all users (admin only)
  getAllUsers: () => {
    return JSON.parse(localStorage.getItem("users") || "[]");
  },
};
