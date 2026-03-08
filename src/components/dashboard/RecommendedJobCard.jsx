import bookmarkIcon from "../../assets/icons/dashboard/bookmark.svg";
import locationIcon from "../../assets/icons/dashboard/location.svg";
import salaryIcon from "../../assets/icons/dashboard/salary.svg";
import expIcon from "../../assets/icons/dashboard/briefcase.svg";
import companyLogo from "../../assets/images/dashboard/logo1.jpg";

const RecommendedJobCard = () => {
  return (
    <div className="border border-slate-200 rounded-xl p-5 hover:shadow-sm transition">
      {/* Top */}
      <div className="flex items-start justify-between">
        {/* LEFT */}
        <div className="flex gap-4">
          {/* Logo */}
          <div className="w-12 h-12  bg-slate-100 flex items-center justify-center">
            <img src={companyLogo} alt="logo" className="rounded" />
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Senior Frontend Engineer
            </h4>

            <p className="text-sm text-slate-500">TechNova India</p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
              <div className="flex items-center gap-1">
                <img src={locationIcon} className="w-4 h-4" />
                Bengaluru (Hybrid)
              </div>

              <div className="flex items-center gap-1">
                <img src={salaryIcon} className="w-4 h-4" />₹ 18L - 24L / yr
              </div>

              <div className="flex items-center gap-1">
                <img src={expIcon} className="w-4 h-4" />
                4-6 Yrs
              </div>
            </div>

            {/* Skills */}
            <div className="flex gap-6 text-sm text-slate-700 mt-3">
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
            </div>
          </div>
        </div>

        {/* Bookmark */}
        <button className="p-1 hover:bg-slate-100 rounded">
          <img src={bookmarkIcon} className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 mt-4 pt-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">Posted 2 days ago</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          Easy Apply
        </button>
      </div>
    </div>
  );
};

export default RecommendedJobCard;
