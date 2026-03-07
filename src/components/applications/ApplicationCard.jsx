import ProgressTracker from "./ProgressTracker";
import Netflix from "../../assets/images/common/netflix.jpg";
import UserProfile from "../../assets/images/common/userimage.svg";

const ApplicationCard = ({ variant }) => {
  const interviewing = variant !== "review";

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <img src={Netflix} className="w-12 h-12 rounded-lg" />

          <div>
            <h3 className="font-semibold text-slate-900">
              {interviewing ? "Senior Product Designer" : "UX Researcher"}
            </h3>

            <div className="text-sm text-slate-500 flex flex-wrap gap-3 mt-1">
              <span>TechFlow Inc.</span>

              <span>•</span>

              <span>San Francisco, CA</span>

              <span>•</span>

              <span>$140k - $170k</span>
            </div>
          </div>
        </div>

        <span
          className={`text-xs font-medium px-3 py-1 rounded-full
          ${
            interviewing
              ? "border border-orange-500 text-orange-500"
              : "border border-orange-500 text-orange-500"
          }`}
        >
          {interviewing ? "Interviewing" : "Under Review"}
        </span>
      </div>

      {/* PROGRESS */}
      <ProgressTracker currentStep={interviewing ? 3 : 1} />

      {/* MESSAGE BLOCK */}
      {interviewing && (
        <div className="mt-6 bg-purple-50 border border-purple-100 rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={UserProfile} className="w-10 h-10 rounded-full" />

            <div>
              <p className="text-sm font-medium text-slate-900">
                Sarah Jenkins
              </p>

              <p className="text-xs text-slate-500">
                "Looking forward to our technical interview tomorrow at 10 AM!"
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="border px-3 py-1 rounded-md text-sm">
              Message
            </button>

            <button className="border px-3 py-1 rounded-md text-sm">
              Call
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-6 text-sm text-slate-500">
        <span>Applied 14 days ago</span>

        <div className="flex gap-6">
          <button className="hover:text-slate-700">Report</button>

          <button className="hover:text-slate-700">Withdraw</button>

          <button className="text-blue-600 font-medium">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
