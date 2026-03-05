import React, { useState } from "react";

import TechCorp from "../../assets/TechCorp.svg";
import Buildlt from "../../assets/Test.svg";
import Creative from "../../assets/Creative.svg";

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "TechCorp Solutions",
    logo: TechCorp,
    location: "San Francisco, CA",
    type: "Full-Time",
    salary: "₹ 62,000 – 85,000 / year",
    posted: "Posted 2 days ago",
  },
  {
    title: "Heavy Equipment Operator",
    company: "Buildit Construction",
    logo: Buildlt,
    location: "Austin, TX",
    type: "Contract",
    salary: "₹ 6,200 / hr",
    posted: "Posted 5 hours ago",
  },
  {
    title: "Marketing Manager",
    company: "Creatives Agency",
    logo: Creative,
    location: "New York, NY",
    type: "Full-Time",
    salary: "₹ 62,000 – 85,000 / year",
    posted: "Posted 1 day ago",
  },
];

const FeaturedJobsSection = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = jobs.length;

  const next = () => {
    if (current < totalSlides - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progressWidth = ((current + 1) / totalSlides) * 100;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Featured Jobs
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Discover hand-picked opportunities from top companies actively
            hiring right now.
          </p>
        </header>

        {/* Slider Wrapper */}
        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {jobs.map((job, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3">
                <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm shadow-slate-200 transition hover:shadow-md">
                  <div className="space-y-4">
                    {/* Logo + Title */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg border border-slate-200 bg-white">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="h-8 w-8 object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                          {job.title}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span>{job.location}</span>

                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">
                        {job.type}
                      </span>

                      <span className="inline-flex items-center rounded-full bg-orange-500/10 px-2.5 py-1 font-semibold text-orange-500">
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs text-slate-400">{job.posted}</p>

                    <button className="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm">
                      Apply Now
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Slide Bar - LEFT SIDE */}
        <div className="mt-10 flex justify-start">
          <div className="flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-sm border border-slate-200">
            {/* Left Arrow */}
            <button
              onClick={prev}
              disabled={current === 0}
              className="text-slate-500 text-lg disabled:opacity-30"
            >
              &#8249;
            </button>

            {/* Progress Bar */}
            <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressWidth}%` }}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              disabled={current === totalSlides - 1}
              className="text-slate-500 text-lg disabled:opacity-30"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
