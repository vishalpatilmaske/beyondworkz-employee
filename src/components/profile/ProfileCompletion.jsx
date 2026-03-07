const ProfileCompletion = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
      <div className="text-4xl font-bold text-blue-600">75%</div>

      <h4 className="font-semibold mt-2">Profile Completion</h4>

      <p className="text-xs text-slate-500 mt-1">
        Complete your profile to increase your chances.
      </p>

      <ul className="text-sm text-left mt-4 space-y-2">
        <li>✔ Basic Information</li>
        <li>✔ Work Experience</li>
        <li>✔ Resume Upload</li>
        <li>○ Portfolio Links</li>
        <li>○ Certifications</li>
      </ul>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
        Complete Profile
      </button>
    </div>
  );
};

export default ProfileCompletion;
