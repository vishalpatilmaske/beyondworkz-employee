const EmployerBannerSection = () => {
  return (
    <section className="w-full bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-blue-600 px-6 py-6 text-white shadow-lg shadow-blue-500/40 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Ready to hire your next champion?
            </h2>
            <p className="max-w-xl text-sm text-blue-100 sm:text-base">
              Join over 10,000 companies building their teams with Beyond Workz.
              Reach millions of qualified candidates today.
            </p>
          </div>

          <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmployerBannerSection;

