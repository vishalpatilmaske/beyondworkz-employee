import React from "react";
import interviewImg from "../../assets/images/landing-page/career1.jpg";
import bluejobsImg from "../../assets/images/landing-page/career2.jpg";
import SalaryGuidImg from "../../assets/images/landing-page/career3.jpg";

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
      <div className="mx-auto max-w-[1280px] px-8 py-16">
        {/* Header */}
        <header className="w-[1216px] h-[112px] mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Career Resources
          </h2>

          <p className="font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-[#94A3B8] w-[600px] max-w-[600px] h-[48px] mx-auto">
            Insights, tips, and guides to help you land your next role and
            accelerate your career.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-3 gap-12">
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

              {/*Content Section */}
              <div
                className="flex flex-col justify-between 
                w-[387.33px] h-[184.88px] p-6"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {article.date} · {article.readTime}
                  </p>

                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {article.title}
                  </h3>
                </div>

                <button
                  className="flex items-center gap-1 
                  text-[14px] leading-[21px] font-semibold 
                  text-blue-600 hover:text-blue-700"
                >
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
