const categories = [
  { label: "Tech & IT", jobs: "12,450 Jobs" },
  { label: "Construction", jobs: "8,320 Jobs" },
  { label: "Healthcare", jobs: "15,900 Jobs" },
  { label: "Finance", jobs: "6,210 Jobs" },
];

const JobCategoriesSection = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            From corporate offices to shop floors and field operations, Beyond
            Workz connects you to opportunities that match your skills.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.label}
              className="flex flex-col items-start gap-4 rounded-2xl bg-white px-6 py-6 shadow-sm shadow-slate-200"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <span className="text-lg font-semibold">⌘</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {category.label}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {category.jobs}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;

