const JobCard = ({ job }) => {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 gap-4">
          {/* Company Logo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white flex-shrink-0">
            {job.logo ? (
              <img
                src={job.logo}
                alt={job.company}
                className="h-8 w-8 object-contain"
              />
            ) : (
              <div className="h-8 w-8 bg-slate-200 rounded" />
            )}
          </div>

          {/* Job Info */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-slate-900">
              {job.title}
            </h3>
            <p className="text-sm text-slate-600">{job.company}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="text-xs text-slate-500">{job.location}</span>
              {job.type && (
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  {job.type}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Salary */}
        {job.salary && (
          <div className="text-right flex-shrink-0">
            <p className="text-sm font-semibold text-slate-900">{job.salary}</p>
          </div>
        )}
      </div>

      {/* Description */}
      {job.description && (
        <p className="text-sm text-slate-600 line-clamp-2">{job.description}</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-400">{job.posted}</p>
        <button className="rounded-full bg-blue-600 px-6 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </article>
  );
};

export default JobCard;
