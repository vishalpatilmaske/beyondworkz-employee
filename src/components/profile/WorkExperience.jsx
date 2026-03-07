const WorkExperience = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex justify-between mb-6">
        <h3 className="font-semibold">Work Experience</h3>
        <button className="text-slate-400 text-lg">＋</button>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>

          <div>
            <h4 className="font-semibold">Senior Frontend Engineer</h4>

            <p className="text-sm text-slate-500">TechNova Solutions</p>

            <p className="text-xs text-slate-400">
              Jan 2021 – Present · San Francisco
            </p>

            <p className="text-sm text-slate-500 mt-2">
              Lead the frontend development of the core analytics dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
