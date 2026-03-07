const ProfileVisibility = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h4 className="font-semibold mb-2">Profile Visibility</h4>

      <p className="text-xs text-slate-500 mb-4">
        Allow recruiters to find you
      </p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm">Visible</span>

        <input type="checkbox" defaultChecked />
      </div>

      <button className="text-red-500 text-sm">Deactivate Account</button>
    </div>
  );
};

export default ProfileVisibility;
