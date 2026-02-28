import { useState } from "react";
import arrowIcon from "../../assets/icons/arrow.svg";

const NAV_LINKS = [
  { label: "Find Jobs", href: "#" },
  { label: "Career Resources", href: "#" },
  { label: "For Employers", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-semibold text-white">
            BW
          </div>
          <span className="text-lg font-semibold text-slate-900">
            Beyond Workz
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600">
              Register
            </button>
            <button className="rounded-full border border-orange-500 bg-white px-6 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-50">
              Login
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              For Recruiters
              <img src={arrowIcon} alt="" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white pb-6 pt-4 md:hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block"
                    onClick={handleCloseMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              <button
                className="w-full rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
                onClick={handleCloseMenu}
              >
                Register
              </button>
              <button
                className="w-full rounded-full border border-orange-500 bg-white px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
                onClick={handleCloseMenu}
              >
                Login
              </button>
              <button
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                onClick={handleCloseMenu}
              >
                For Recruiters
                <img src={arrowIcon} alt="" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
