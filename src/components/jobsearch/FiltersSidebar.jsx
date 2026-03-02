const FiltersSidebar = ({ filters }) => {
  return (
    <aside className="space-y-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm">
      <h2 className="text-sm font-semibold text-slate-900">All Filters</h2>

      {Object.entries(filters).map(([key, options]) => (
        <div key={key} className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {key}
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {options.map((option) => (
              <li key={option} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default FiltersSidebar;