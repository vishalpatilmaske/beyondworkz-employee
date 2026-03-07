import ApplicationTabs from "../../components/applications/ApplicationTabs";
import ApplicationCard from "../../components/applications/ApplicationCard";

const Applications = () => {
  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          My Applications
        </h1>

        <p className="text-slate-500 text-sm mt-1">
          Track the progress of your job applications.
        </p>
      </div>

      {/* STATUS FILTER */}
      <ApplicationTabs />

      {/* APPLICATION LIST */}
      <div className="space-y-6">
        <ApplicationCard />
        <ApplicationCard variant="review" />
      </div>
    </div>
  );
};

export default Applications;
