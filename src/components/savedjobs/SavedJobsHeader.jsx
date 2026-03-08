import downarrow from "../../assets/icons/common-icon/down-arrow.svg";
import filter from "../../assets/icons/common-icon/filter.svg";

const SavedJobsHeader = () => {
  return (
    <div className="space-y-5">
      {/* Title */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold text-slate-900">Saved Jobs</h1>

        <span className="px-3 py-1 text-xs border border-blue-500 text-blue-600 rounded-full">
          4 Saved
        </span>
      </div>

      <p className="text-sm text-slate-500">
        Review and apply to jobs you've bookmarked.
      </p>

      {/* Search + Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search saved jobs..."
            className="w-full pl-10 pr-4 py-2 border border-[#00000014] rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {/* Filter Button */}
          <button className="px-4 py-2 border border-[#00000014] rounded-lg text-sm flex items-center gap-2 hover:bg-slate-50 transition">
            <img src={filter} alt="filter icon" className="w-3 h-3" />
            Filters
          </button>

          {/* Sort Button */}
          <button className="px-4 py-2 border border-[#00000014] rounded-lg text-sm flex items-center gap-2 hover:bg-slate-50 transition">
            <span>Sort by :</span>
            <span className="font-medium">Recently Added</span>

            <img src={downarrow} alt="down arrow icon" className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="border-b border-slate-200"></div>
    </div>
  );
};

export default SavedJobsHeader;
