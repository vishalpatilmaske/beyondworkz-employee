import { useState } from "react";
import logo from "../../assets/icons/arrow.svg";
import menuIcon from "../../assets/icons/arrow.svg";
import closeIcon from "../../assets/icons/arrow.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#F3F4F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* ================= LEFT LOGO ================= */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-6 w-6" />
            <span className="text-lg font-semibold text-blue-600">
              Beyond Workz
            </span>
          </div>

          {/* ================= CENTER LINKS (Desktop) ================= */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-black transition">
              Find Jobs
            </a>
            <a href="#" className="hover:text-black transition">
              Career Resources
            </a>
            <a href="#" className="hover:text-black transition">
              For Employers
            </a>
          </div>

          {/* ================= RIGHT SECTION (Desktop) ================= */}
          <div className="hidden md:flex items-center gap-4">
            {/* Register */}
            <button className="bg-orange-500 text-white px-5 py-2 rounded-xl font-medium">
              Register
            </button>

            {/* Login */}
            <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-xl font-medium bg-white">
              Login
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Recruiters Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-600">
              For Recruiters
              <img src={arrowIcon} alt="arrow" className="h-4 w-4" />
            </button>
          </div>

          {/* ================= MOBILE MENU TOGGLE ================= */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <img
                src={isOpen ? closeIcon : menuIcon}
                alt="menu"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <a
              href="#"
              className="block text-gray-700"
              onClick={handleCloseMenu}
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="block text-gray-700"
              onClick={handleCloseMenu}
            >
              Career Resources
            </a>
            <a
              href="#"
              className="block text-gray-700"
              onClick={handleCloseMenu}
            >
              For Employers
            </a>

            <div className="pt-3 flex flex-col gap-3">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                onClick={handleCloseMenu}
              >
                Register
              </button>
              <button
                className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg bg-white"
                onClick={handleCloseMenu}
              >
                Login
              </button>
              <button
                className="flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-600"
                onClick={handleCloseMenu}
              >
                For Recruiters
                <img src={arrowIcon} alt="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
