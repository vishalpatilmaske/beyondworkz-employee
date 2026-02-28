const categories = [
  { label: "Office & Admin", roles: "Front office, back office, support" },
  { label: "Sales & Marketing", roles: "Field sales, retail, promoters" },
  { label: "Operations & Logistics", roles: "Warehouse, delivery, supply chain" },
  { label: "Banking & Finance", roles: "Relationship managers, advisors" },
  { label: "IT & Support", roles: "Helpdesk, support engineers" },
  { label: "Manufacturing & On‑site", roles: "Supervisors, technicians, operators" },
];

const JobCategoriesSection = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            Explore roles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Roles for every kind of worker.
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            From corporate offices to shop floors and field operations, Beyond
            Workz connects you to opportunities that match your skills.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.label}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-100"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {category.label}
              </h3>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {category.roles}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;

