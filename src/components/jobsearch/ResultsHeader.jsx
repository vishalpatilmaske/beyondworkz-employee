const ResultsHeader = () => {
  return (
    <div className="flex justify-between rounded-2xl bg-white px-5 py-3 shadow-sm">
      <p className="font-medium text-slate-900">
        Showing 1,409 jobs
      </p>

      <select className="rounded-full border border-slate-200 px-3 py-1 text-sm">
        <option>Relevance</option>
        <option>Latest</option>
        <option>Salary (High to Low)</option>
      </select>
    </div>
  );
};

export default ResultsHeader;