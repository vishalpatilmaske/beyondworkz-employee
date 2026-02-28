const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-Time",
    salary: "₹ 62,000 – 85,000 / year",
    posted: "Posted 2 days ago",
  },
  {
    title: "Heavy Equipment Operator",
    company: "Buildit Construction",
    location: "Austin, TX",
    type: "Contract",
    salary: "₹ 6,200 / hr",
    posted: "Posted 5 hours ago",
  },
  {
    title: "Marketing Manager",
    company: "Creatives Agency",
    location: "New York, NY",
    type: "Full-Time",
    salary: "₹ 62,000 – 85,000 / year",
    posted: "Posted 1 day ago",
  },
];

const FeaturedJobsSection = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 lg:px-8 lg:pb-16">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Featured Jobs
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Discover hand‑picked opportunities from top companies actively hiring
            right now.
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-sm shadow-slate-200"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {job.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 sm:text-sm">
                    {job.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>{job.location}</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">
                    {job.type}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2.5 py-1 font-semibold text-orange-500">
                    {job.salary}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-slate-400">{job.posted}</p>
                <button className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:px-5 sm:text-sm">
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="h-2.5 w-8 rounded-full bg-blue-600"
            aria-label="Current slide"
          />
          <button
            type="button"
            className="h-2.5 w-2.5 rounded-full bg-slate-300"
            aria-label="Next slide"
          />
          <button
            type="button"
            className="h-2.5 w-2.5 rounded-full bg-slate-300"
            aria-label="Next slide"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;

