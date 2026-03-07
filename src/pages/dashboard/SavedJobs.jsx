import SavedJobsHeader from "../../components/savedJobs/SavedJobsHeader";
import SavedJobCard from "../../components/savedJobs/SavedJobCard";

const SavedJobs = () => {
  return (
    <div className="space-y-6">
      <SavedJobsHeader />

      <div className="space-y-6">
        <SavedJobCard />
        <SavedJobCard />
        <SavedJobCard />
      </div>
    </div>
  );
};

export default SavedJobs;
