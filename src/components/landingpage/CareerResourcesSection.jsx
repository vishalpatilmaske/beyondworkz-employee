const articles = [
  {
    title: "How to ace your next technical interview",
    date: "Apr 12, 2024",
    readTime: "6 min read",
  },
  {
    title: "The rise of blue-collar tech jobs in 2024",
    date: "Apr 10, 2024",
    readTime: "4 min read",
  },
  {
    title: "Negotiating your salary: A complete guide",
    date: "Apr 05, 2024",
    readTime: "7 min read",
  },
  {
    title: "Building a career path beyond your current role",
    date: "Mar 29, 2024",
    readTime: "5 min read",
  },
];

const CareerResourcesSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Career Resources
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Insights, tips, and guides to help you land your next role and
            accelerate your career.
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-100"
            >
              <div className="h-28 w-full bg-slate-100" />
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  {article.date} · {article.readTime}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">
                  {article.title}
                </h3>
                <button className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-700">
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerResourcesSection;

