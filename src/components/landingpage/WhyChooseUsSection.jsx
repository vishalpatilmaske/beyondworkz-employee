import networkIcon from "../../assets/icons/landing-page/network.svg";
import verifiedIcon from "../../assets/icons/landing-page/verified.svg";
import growthIcon from "../../assets/icons/landing-page/grow.svg";
import fastIcon from "../../assets/icons/landing-page/light.svg";

const reasons = [
  {
    title: "Massive Job Network",
    description:
      "Access thousands of listings ranging from local workshops to global corporate offices seamlessly.",
    icon: networkIcon,
  },
  {
    title: "Verified Employers",
    description:
      "Every company on our platform is strictly vetted to ensure legitimate and safe opportunities.",
    icon: verifiedIcon,
  },
  {
    title: "Career Growth Tools",
    description:
      "Utilize our resume builders, salary estimators, and free skill assessment courses.",
    icon: growthIcon,
  },
  {
    title: "Fast Applications",
    description:
      "Apply to your dream job in just a few clicks with a single universal profile.",
    icon: fastIcon,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section
      className="w-full py-20"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(37, 99, 235, 0.05) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
            Why Choose Us
          </h2>

          <p className="mt-4 text-[#94A3B8] text-sm md:text-base">
            We make the job search process simple, transparent, and effective
            for <br />
            everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 transition duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-10 flex items-center justify-center">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-30 h-30"
                />
              </div>

              {/* Title */}
              <p className="mt-4 text-lg font-semibold text-[#0F172A]">
                {reason.title}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
