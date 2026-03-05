const EmployerCard = () => {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-20 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Featured Employer
        </h3>

        <div className="mt-4 space-y-4">
          {/* Employer Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-100">
            <div className="h-12 w-12 bg-slate-200 rounded" />
          </div>

          {/* Employer Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              TechCorp Solutions
            </h4>
            <p className="mt-1 text-xs text-slate-600">San Francisco, CA</p>
          </div>

          {/* Stats */}
          <div className="space-y-3 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Active Jobs</span>
              <span className="text-sm font-semibold text-slate-900">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Employees</span>
              <span className="text-sm font-semibold text-slate-900">
                5,200+
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            View Company
          </button>
        </div>
      </div>
    </aside>
  );
};

export default EmployerCard;
