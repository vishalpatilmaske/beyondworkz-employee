const reasons = [
  {
    title: "Massive Job Network",
    description:
      "Access thousands of listings ranging from local workshops to global corporate offices seamlessly.",
  },
  {
    title: "Verified Employers",
    description:
      "Every company on our platform is strictly vetted to ensure legitimate and safe opportunities.",
  },
  {
    title: "Career Growth Tools",
    description:
      "Utilize our resume builders, salary estimators, and free skill assessment courses.",
  },
  {
    title: "Fast Applications",
    description:
      "Apply to your dream job in just a few clicks with a single universal profile.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We make the job search process simple, transparent, and effective
            for everyone.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex flex-col gap-3 rounded-2xl bg-slate-50 px-5 py-6 shadow-sm shadow-slate-100"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                <span className="text-lg font-semibold">★</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {reason.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

