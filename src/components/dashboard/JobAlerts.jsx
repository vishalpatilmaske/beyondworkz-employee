const JobAlerts = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Job Alerts</h3>
        <span className="text-blue-600 text-sm">Manage</span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">Frontend Developer</p>
            <p className="text-xs text-slate-500">Bengaluru</p>
          </div>
          <span>Daily</span>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-medium">React Native Developer</p>
            <p className="text-xs text-slate-500">Remote</p>
          </div>
          <span>Weekly</span>
        </div>
      </div>
    </div>
  );
};

export default JobAlerts;
