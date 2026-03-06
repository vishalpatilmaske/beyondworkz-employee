import bookmarkIcon from "../../assets/icons/save.svg";
import locationIcon from "../../assets/icons/location.svg";
import expIcon from "../../assets/icons/briefcase.svg";

const JobCard = ({ job }) => {
  return (
    <article className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        {/* LEFT SIDE */}
        <div className="flex gap-4 flex-1 min-w-0">
          {/* Company Logo */}
          <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
            {job.logo ? (
              <img
                src={job.logo}
                alt={job.company}
                className="h-8 w-8 object-contain"
              />
            ) : (
              <span className="font-semibold text-blue-600">
                {job.company[0]}
              </span>
            )}
          </div>

          {/* Job Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900">
              {job.title}
            </h3>

            <p className="text-sm text-slate-500">{job.company}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-1">
              <div className="flex items-center gap-1">
                <img src={locationIcon} className="w-4 opacity-70" />
                {job.location}
              </div>

              <div className="flex items-center gap-1">
                <img src={expIcon} className="w-4 opacity-70" />
                {job.experience}
              </div>

              {/* Salary */}
              <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {job.salary}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-600">
              {job.tags?.map((tag) => (
                <span key={tag} className="bg-slate-100 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 mt-3 line-clamp-2">
              {job.description}
            </p>
          </div>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex flex-col items-center justify-between ml-6">
          <button className="p-2  hover:bg-slate-50">
            <img src={bookmarkIcon} className="w-5 opacity-70" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
