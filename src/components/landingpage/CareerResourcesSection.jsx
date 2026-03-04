import React from "react";
import interviewImg from "../../assets/careear_resource/interview.svg";
import bluejobsImg from "../../assets/careear_resource/Bluejobs.svg";
import SalaryGuidImg from "../../assets/careear_resource/SalaryGuide.svg";



const articles = [
  {
    title: "How to ace your next technical interview",
    date: "Apr 12, 2024",
    readTime: "6 min read",
    image: interviewImg,
  },
  {
    title: "The rise of blue-collar tech jobs in 2024",
    date: "Apr 10, 2024",
    readTime: "4 min read",
    image: bluejobsImg,
  },
  {
    title: "Negotiating your salary: A complete guide",
    date: "Apr 05, 2024",
    readTime: "7 min read",
    image: SalaryGuidImg,
  },
];

const CareerResourcesSection = () => {
  return (
    <section className="w-full bg-white">

      <div className="mx-auto max-w-[1280px] h-[567px] px-8 py-16">

        {/* Header */}
        <header className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Career Resources
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Insights, tips, and guides to help you land your next role and
            accelerate your career.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-3 gap-12 p-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[220px] object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="flex h-[160.88px] w-full flex-col p-6">

                <div className="w-[339.33px] h-[85px] pt-[18px] pb-[16px]">

                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {article.date} · {article.readTime}
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-slate-900">
                    {article.title}
                  </h3>

                </div>

                <button className="self-start flex items-center gap-1 
                   w-[339.33px] h-[21px]
                   text-[14px] leading-[21px] font-semibold 
                   text-blue-600 hover:text-blue-700">
                  Read Article
                  <span>→</span>
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