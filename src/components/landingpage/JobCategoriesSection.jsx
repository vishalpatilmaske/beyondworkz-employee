import techIcon from "../../assets/category/tech.svg";
import constructionIcon from "../../assets/category/construction.svg";
import healthcareIcon from "../../assets/category/healthcare.svg";
import financeIcon from "../../assets/category/finance.svg";

const categories = [
  { label: "Tech & IT", jobs: "12,450 Jobs", icon: techIcon },
  { label: "Construction", jobs: "8,320 Jobs", icon: constructionIcon },
  { label: "Healthcare", jobs: "15,900 Jobs", icon: healthcareIcon },
  { label: "Finance", jobs: "6,210 Jobs", icon: financeIcon },
];

const JobCategoriesSection = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            From corporate offices to shop floors and field operations, Beyond
            Workz connects you to opportunities that match your skills.
          </p>
        </header>

        {/* Categories Grid */}
       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
  {categories.map((category) => (
    <article
  key={category.label}
  className="w-[286px] h-[211px] rounded-[16px] border border-slate-200 bg-white pt-8 pr-6 pb-8 pl-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm"
>
      {/* Icon */}
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
       <img
  src={category.icon}
  alt={category.label}
  className="h-6 w-6 object-contain"
/>
      </div>

      {/* Text */}
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