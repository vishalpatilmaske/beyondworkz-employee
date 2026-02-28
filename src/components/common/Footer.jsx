import logo from "../../assets/icons/arrow.svg";
import linkedin from "../../assets/icons/arrow.svg";
import twitter from "../../assets/icons/arrow.svg";
import facebook from "../../assets/icons/arrow.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ===== Brand Section ===== */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-6 w-6" />
              <span className="text-white text-lg font-semibold">
                My Dream Job
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Connecting great talent with great opportunities. Built for the
              modern workforce, from corporate desks to construction sites.
            </p>
          </div>

          {/* ===== For Job Seekers ===== */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Salary Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resume Builder
                </a>
              </li>
            </ul>
          </div>

          {/* ===== For Employers ===== */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Employer Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Company ===== */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2026 My Dream Job. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <img
              src={linkedin}
              alt="linkedin"
              className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer"
            />
            <img
              src={facebook}
              alt="facebook"
              className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
