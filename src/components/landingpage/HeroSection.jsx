import capgemini from "../../assets/logos/capgemini.svg";
import genpact from "../../assets/logos/genpact.svg";
import icici from "../../assets/logos/icici.svg";
import kotak from "../../assets/logos/kotak.svg";
import techMahindra from "../../assets/logos/techmahindra.svg";
import heroImage from "../../assets/images/hero-image.png";
import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

const trendingTags = ["Remote", "UX Designer", "Forklift Operator", "Marketing"];

const logos = [capgemini, genpact, icici, kotak, techMahindra];

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-600/5 to-slate-50">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Job search made simple
              </p>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Find your{" "}
                <span className="text-blue-600">Beyond Workz</span> today.
              </h1>
              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                Connect with top employers across industries—from office roles
                to on‑site operations. Your next opportunity is just a search
                away.
              </p>
            </header>

            <form
              className="w-full rounded-2xl bg-white p-3 shadow-sm shadow-slate-200"
              role="search"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="flex flex-1 items-center gap-3 rounded-full px-3 py-2.5 md:px-4">
                  <img
                    src={searchIcon}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="w-full border-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="hidden h-8 w-px bg-slate-200 md:block" />

                <div className="flex flex-1 items-center gap-3 rounded-full px-3 py-2.5 md:px-4">
                  <img
                    src={locationIcon}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    className="w-full border-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:mt-0 md:w-auto"
                >
                  Search jobs
                </button>
              </div>
            </form>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="text-slate-500">Trending searches:</span>
                {trendingTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Trusted by top enterprises
                </p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt="Company logo"
                      className="h-6 w-auto object-contain sm:h-8"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Professionals exploring job opportunities"
              className="w-full max-w-sm rounded-3xl bg-white/40 p-3 shadow-sm shadow-slate-200 sm:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
