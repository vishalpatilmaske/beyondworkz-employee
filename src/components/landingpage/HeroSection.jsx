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
    <section className="w-full bg-gradient-to-b from-[#2563EB0D] to-[#F8FAFC] pt-20 pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          Go <span className="text-blue-600">Beyond</span> Just a Job.
        </h1>

        <p className="mt-4 text-slate-600">
          Connect with top employers across industries. Whether you're in the office
          or out in the field, your next big opportunity awaits.
        </p>

        {/* Search Bar */}
        <form
          className="mx-auto mt-8 flex max-w-3xl items-center rounded-full bg-white p-2 shadow-md"
          role="search"
        >
          {/* Keyword */}
          <div className="flex flex-1 items-center gap-2 px-4">
            <img src={searchIcon} alt="" className="h-4 w-4 opacity-60" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-slate-200" />

          {/* Location */}
          <div className="flex flex-1 items-center gap-2 px-4">
            <img src={locationIcon} alt="" className="h-4 w-4 opacity-60" />
            <input
              type="text"
              placeholder="City, state, or remote"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="ml-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-slate-500">Trending:</span>
          {trendingTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trusted Logos */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trusted by top enterprises
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-80">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company logo"
                className="h-6 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Bottom Illustration */}
        <div className="mt-12 flex justify-center">
          <img
            src={heroImage}
            alt="Professional working"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;