const CallToActionSection = () => {
  return (
    <section className="w-full bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-6 rounded-3xl bg-blue-600 px-6 py-8 text-white shadow-lg shadow-blue-500/40 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Empower your career with Beyond Workz today
            </h2>
            <p className="max-w-xl text-sm text-blue-100 sm:text-base">
              Continue with your preferred method to access personalized job
              matches, saved searches, and more.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <button className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-blue-50 sm:flex-none">
              Continue with Google
            </button>
            <button className="inline-flex flex-1 items-center justify-center rounded-full border border-blue-200 bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:flex-none">
              Continue with Email
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-blue-100">
          By continuing, you agree to our{" "}
          <button className="font-semibold underline underline-offset-2">
            T&amp;C.
          </button>
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;

