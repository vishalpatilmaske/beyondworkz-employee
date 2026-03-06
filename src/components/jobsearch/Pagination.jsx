const Pagination = () => {
  const pages = [1, 2, 3, "...", 10];

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous */}
      <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
        ‹ Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          className={`w-9 h-9 rounded-lg text-sm flex items-center justify-center
          ${
            page === 1
              ? "bg-blue-600 text-white"
              : "border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
        Next ›
      </button>
    </div>
  );
};

export default Pagination;
