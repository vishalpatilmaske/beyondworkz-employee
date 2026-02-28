import logoMark from "../../assets/icons/arrow.svg";

const seekerLinks = ["Browse Jobs", "Browse Companies", "Salary Calculator", "Resume Builder"];
const employerLinks = ["Post a Job", "Browse Candidates", "Pricing Plans", "Employer Dashboard"];
const companyLinks = ["About Us", "Careers", "Privacy Policy", "Terms of Service"];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-semibold text-white">
                BW
              </div>
              <span className="text-base font-semibold text-white">
                Beyond Workz
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Connecting great talent with great opportunities across
              industries—from office roles to on‑site operations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Job seekers
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {seekerLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Employers
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {employerLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Beyond Workz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-400 ring-1 ring-slate-700 hover:bg-slate-800 hover:text-white"
              aria-label="Visit our social profile"
            >
              <img src={logoMark} alt="" className="h-3 w-3" />
            </button>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-400 ring-1 ring-slate-700 hover:bg-slate-800 hover:text-white"
              aria-label="Visit our social profile"
            >
              <img src={logoMark} alt="" className="h-3 w-3" />
            </button>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-400 ring-1 ring-slate-700 hover:bg-slate-800 hover:text-white"
              aria-label="Visit our social profile"
            >
              <img src={logoMark} alt="" className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
