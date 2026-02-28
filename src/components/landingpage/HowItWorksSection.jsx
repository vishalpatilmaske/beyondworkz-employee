const steps = [
  {
    title: "Create your profile",
    description:
      "Tell us about your skills, experience, and the kind of work you’re looking for.",
    badge: "Step 1",
  },
  {
    title: "Match with roles",
    description:
      "We surface opportunities across office, field, and frontline roles that fit you.",
    badge: "Step 2",
  },
  {
    title: "Apply & get hired",
    description:
      "Connect directly with employers and move quickly from application to offer.",
    badge: "Step 3",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              How Beyond Workz works
            </p>
            <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
              From profile to offer, in a few simple steps.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              We simplify hiring for both talent and employers with a guided
              flow that keeps everything in one place.
            </p>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-3 lg:gap-6">
            {steps.map((step) => (
              <article
                key={step.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm shadow-slate-100 sm:p-5"
              >
                <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {step.badge}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

