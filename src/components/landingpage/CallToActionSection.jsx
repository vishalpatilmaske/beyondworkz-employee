const CallToActionSection = () => {
  return (
    <section className="w-full bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-blue-600/0 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
              Ready to hire or get hired?
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Start your Beyond Workz journey today.
            </h2>
            <p className="max-w-xl text-sm text-blue-100 sm:text-base">
              Create your profile, post a job, or explore roles in minutes. Stay
              connected to opportunities that move your career forward.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4 lg:w-auto">
            <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
              I&apos;m looking for a job
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              I want to hire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

