import capgemini from "../../assets/logos/capgemini.svg";
import genpact from "../../assets/logos/genpact.svg";
import icici from "../../assets/logos/icici.svg";
import kotak from "../../assets/logos/kotak.svg";
import techMahindra from "../../assets/logos/techmahindra.svg";
import heroImage from "../../assets/images/hero-image.png";

const Hero = () => {
  const logos = [capgemini, genpact, icici, kotak, techMahindra];

  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(to bottom, #2563EB0D, #F8FAFC)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-10">
        {/* ================= HEADING ================= */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Find Your <span className="text-[#2563EB]">Beyond Workz</span> Today
          </h1>

          <p className="mt-4 text-[#838383] text-base md:text-lg max-w-8xl mx-auto">
            Connect with top employers across industries. Whether you're in the
            office or out in the field, your next big opportunity awaits.
          </p>
        </div>

        {/* ================= SEARCH BAR ================= */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white w-full max-w-3xl rounded-full shadow-sm flex flex-col md:flex-row items-center px-4 py-2 gap-3">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="flex-1 w-full outline-none px-4 py-2 text-sm md:text-base"
            />

            <div className="hidden md:block h-5 w-px bg-gray-200"></div>

            <input
              type="text"
              placeholder="City, state, or remote"
              className="flex-1 w-full outline-none px-4 py-2 text-sm md:text-base"
            />

            <button className="w-full md:w-auto bg-[#2563EB] text-white px-6 py-2.5 rounded-full font-medium">
              Search
            </button>
          </div>
        </div>

        {/* ================= TRENDING ================= */}
        <div className="mt-5 flex flex-wrap justify-center items-center gap-2 text-sm">
          <span className="text-gray-500">Trending:</span>

          {["Remote", "UX Designer", "Forklift Operator", "Marketing"].map(
            (item, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full shadow-sm bg-[#F8FAFC] text-balck"
              >
                {item}
              </span>
            ),
          )}
        </div>

        {/* ================= TRUSTED SECTION ================= */}
        <div className="mt-10 text-center">
          <p className="text-xs tracking-wide text-gray-500 font-semibold uppercase">
            Trusted by Top Enterprises
          </p>

          <div className="mt-2 flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="company logo"
                className="h-5 md:h-20 w-20 object-contain"
              />
            ))}
          </div>
        </div>

        {/* ================= HERO IMAGE ================= */}
        <div className="mt-10 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
