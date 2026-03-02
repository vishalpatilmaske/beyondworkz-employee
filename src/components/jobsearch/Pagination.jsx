const Pagination = () => {
  return (
    <div className="flex justify-between rounded-2xl border bg-white px-5 py-3">
      <button className="border px-3 py-1 rounded-full">
        Previous
      </button>

      <div className="flex gap-2">
        {[1,2,3].map((page)=>(
          <button
            key={page}
            className="h-8 w-8 rounded-full bg-blue-600 text-white"
          >
            {page}
          </button>
        ))}
      </div>

      <button className="border px-3 py-1 rounded-full">
        Next
      </button>
    </div>
  );
};

export default Pagination;