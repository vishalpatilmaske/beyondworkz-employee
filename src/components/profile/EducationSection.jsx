const EducationSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex justify-between mb-6">
        <h3 className="font-semibold">Education</h3>

        <button className="text-slate-400 text-lg">＋</button>
      </div>

      <div className="flex gap-4">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
          🎓
        </div>

        <div>
          <h4 className="font-semibold">University of California, Berkeley</h4>

          <p className="text-sm text-slate-500">
            Bachelor of Science in Computer Science
          </p>

          <p className="text-xs text-slate-400">Aug 2014 – May 2018</p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
