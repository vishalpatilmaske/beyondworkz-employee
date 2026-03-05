import { useNavigate } from "react-router-dom";
import capgemini from "../../assets/logos/capgemini.svg";
import genpact from "../../assets/logos/genpact.svg";
import icici from "../../assets/logos/icici.svg";
import kotak from "../../assets/logos/kotak.svg";
import techMahindra from "../../assets/logos/techmahindra.svg";
import heroImage from "../../assets/images/hero-image.png";
import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

const trendingTags = [
  "Remote",
  "UX Designer",
  "Forklift Operator",
  "Marketing",
];
const logos = [capgemini, genpact, icici, kotak, techMahindra];

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/jobs");
  };
  return (
    <section
      className="w-full pt-16 pb-32"
      style={{
        background:
          "linear-gradient(180deg, rgba(37, 99, 235, 0.05) 0%, #F8FAFC 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-slate-900 sm:text-6xl leading-tight">
          Go <span style={{ color: "#2563EB" }}>Beyond</span> Just a Job.
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Connect with top employers across industries. Whether you're in the
          office or out in the field, your next big opportunity awaits.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 w-full max-w-4xl flex flex-col lg:flex-row items-center gap-3 lg:gap-0 bg-white rounded-full lg:rounded-full border border-slate-200 shadow-lg p-3 lg:p-0"
          role="search"
          style={{
            borderRadius: "999px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Keyword */}
          <div className="flex flex-1 w-full lg:w-auto items-center gap-3 px-4 lg:px-6">
            <img
              src={searchIcon}
              alt=""
              className="h-5 w-5 opacity-60 flex-shrink-0"
            />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full bg-transparent text-base focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Divider */}
          <div
            className="hidden lg:block h-8 w-px mx-4 flex-shrink-0"
            style={{ backgroundColor: "#E2E8F0" }}
          />

          {/* Location */}
          <div className="flex flex-1 w-full lg:w-auto items-center gap-3 px-4 lg:px-6">
            <img
              src={locationIcon}
              alt=""
              className="h-5 w-5 opacity-60 flex-shrink-0"
            />
            <input
              type="text"
              placeholder="City, state, or remote"
              className="w-full bg-transparent text-base focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full lg:w-auto rounded-full px-6 lg:px-8 py-2.5 lg:py-3 text-base font-semibold text-white transition hover:opacity-90 flex-shrink-0 lg:mr-3"
            style={{ background: "#2563EB" }}
          >
            Search
          </button>
        </form>

        {/* Trending */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-slate-500">Trending:</span>
          {trendingTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 font-medium shadow-sm"
              style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trusted Logos */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Trusted by top enterprises
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company logo"
                className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

        {/* Bottom Illustration */}
        <div className="mt-16 flex justify-center">
          <img
            src={heroImage}
            alt="Professional working at desk"
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
