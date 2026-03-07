import ProfileImage from "../../assets/images/common/userimage.svg";

const ProfileHeader = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
      <img src={ProfileImage} className="w-20 h-20 rounded-full object-cover" />

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-slate-900">Alex Rivera</h2>

        <p className="text-slate-500 text-sm">
          Senior Frontend Developer | React & UI Specialist
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-2">
          <span>📍 San Francisco, CA</span>

          <span>💰 Expected: $140K - $160K</span>

          <span>⏱ Notice: 2 Weeks</span>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Edit Profile
          </button>

          <button className="border border-slate-300 px-4 py-2 rounded-lg text-sm">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
