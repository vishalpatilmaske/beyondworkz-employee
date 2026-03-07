import RecommendedJobCard from "./RecommendedJobCard";

const RecommendedJobs = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Recommended Jobs
        </h3>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View all
        </button>
      </div>

      {/* Jobs */}
      <div className="space-y-4">
        <RecommendedJobCard />
        <RecommendedJobCard />
      </div>
    </div>
  );
};

export default RecommendedJobs;
