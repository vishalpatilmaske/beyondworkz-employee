const ResumeSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex justify-between mb-6">
        <h3 className="font-semibold">Resume</h3>
        <button>⬆️</button>
      </div>

      <div className="border rounded-lg p-4 flex justify-between items-center">
        <div>
          <p className="font-medium text-sm">Alex_Rivera_Resume_2024.pdf</p>

          <p className="text-xs text-slate-400">Updated 2 days ago • 1.2 MB</p>
        </div>

        <button className="text-slate-400">⋮</button>
      </div>
    </div>
  );
};

export default ResumeSection;
