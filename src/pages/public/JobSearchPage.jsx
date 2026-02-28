import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const filters = {
  experience: [
    "Entry Level (0-1 yrs)",
    "Mid Level (2-5 yrs)",
    "Senior (6-10 yrs)",
    "Executive (10+ yrs)",
  ],
  workMode: ["On-site", "Hybrid", "Remote"],
  jobType: ["Full-Time", "Part-Time", "Contract", "Internship"],
};

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer (React)",
    company: "TechWave Solutions Pvt Ltd",
    location: "Bengaluru, Karnataka · India",
    mode: "Full-time",
    tags: ["Full-Time", "₹ 18L – 24L / year"],
    description:
      "We are looking for an experienced Frontend Developer proficient in React, Redux, and TypeScript.",
    posted: "Posted 2 days ago",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Nova Studio",
    location: "Mumbai, Maharashtra · India",
    mode: "Full-time",
    tags: ["Full-Time", "₹ 22L – 30L / year"],
    description:
      "You will drive the product roadmap for cross-functional teams and own the user experience end to end.",
    posted: "Posted 1 day ago",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote · India",
    mode: "Remote",
    tags: ["Remote", "₹ 10L – 16L / year"],
    description:
      "Design intuitive, delightful interfaces and interactions for B2B SaaS products across web and mobile.",
    posted: "Posted 5 hours ago",
  },
  {
    id: 4,
    title: "Backend Engineer (Node.js)",
    company: "StackForge Labs",
    location: "Pune, Maharashtra · India",
    mode: "Full-time",
    tags: ["Full-Time", "₹ 16L – 22L / year"],
    description:
      "Looking for a backend engineer to architect and scale microservices handling millions of requests.",
    posted: "Posted 3 days ago",
  },
];

const faqs = [
  {
    question: "How do I apply for jobs on Beyond Workz?",
    answer:
      "Browse or search for roles, create your account, complete your profile, and upload your latest resume. Once your profile is ready, click on any listing and hit the “Apply Now” button. Your profile will instantly be sent to employers.",
  },
  {
    question: "Is creating a profile completely free?",
    answer:
      "Yes. Creating a candidate profile, browsing jobs, and applying to roles on Beyond Workz is completely free for job seekers.",
  },
  {
    question: "How often are new jobs posted?",
    answer:
      "New opportunities are added every day across multiple industries and experience levels. Follow saved searches to get notified about fresh roles.",
  },
];

const FilterGroup = ({ title, options }) => (
  <div className="space-y-3">
    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
      {title}
    </h3>
    <ul className="space-y-2 text-sm text-slate-700">
      {options.map((option) => (
        <li key={option} className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span>{option}</span>
        </li>
      ))}
    </ul>
  </div>
);

const JobCard = ({ job }) => (
  <article className="flex gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm shadow-slate-100 sm:px-5 sm:py-5">
    <div className="mt-1 hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600 sm:flex">
      {job.title.charAt(0)}
    </div>
    <div className="flex-1 space-y-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            {job.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            {job.company}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs sm:justify-end">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500 sm:text-sm">{job.location}</p>

      <p className="text-xs text-slate-600 sm:text-sm">{job.description}</p>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-400">{job.posted}</p>
        <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:px-5 sm:text-sm">
          Apply Now
        </button>
      </div>
    </div>
  </article>
);

const FAQItem = ({ item, isOpen }) => (
  <details
    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:px-5 sm:py-4"
    open={isOpen}
  >
    <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
      {item.question}
    </summary>
    <p className="mt-2 text-xs text-slate-600 sm:text-sm">{item.answer}</p>
  </details>
);

const TestimonialsStrip = () => (
  <section className="w-full bg-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <header className="mb-6 text-center">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-2xl">
          Trusted by thousands of professionals
        </h2>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {["Beyond Workz helped me transition from a mid-level role to a Senior Developer in just 8 weeks. Their data is incredibly accurate.",
          "I love the transparency. Seeing the exact salary ranges and having direct contact with recruiters makes a huge difference.",
          "The UI is so clean and finding remote roles has been great! I feel more in control of my career search."].map(
          (quote, index) => (
            <article
              key={index}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm shadow-slate-100"
            >
              <p className="text-sm text-amber-400">★★★★★</p>
              <p className="text-xs text-slate-600 sm:text-sm">{quote}</p>
              <p className="text-xs font-semibold text-slate-900">
                {index === 0
                  ? "Rohit Verma · Senior Developer"
                  : index === 1
                  ? "Priya Patel · Product Manager"
                  : "Arjun Mehra · QA Engineer"}
              </p>
            </article>
          ),
        )}
      </div>
    </div>
  </section>
);

const JobSearchPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-4 lg:px-8">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
              <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <span className="whitespace-nowrap text-xs text-slate-500">
                  Job title
                </span>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  className="w-full border-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                />
              </label>
              <label className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                <span className="whitespace-nowrap text-xs text-slate-500">
                  Location
                </span>
                <input
                  type="text"
                  placeholder="Bengaluru, India"
                  className="w-full border-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                />
              </label>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Search
            </button>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[260px,minmax(0,1fr),260px] lg:items-start lg:gap-6 lg:px-8">
            <aside className="space-y-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800">
              <h2 className="text-sm font-semibold text-slate-900">
                All Filters
              </h2>
              <FilterGroup title="Experience" options={filters.experience} />
              <FilterGroup title="Work Mode" options={filters.workMode} />
              <FilterGroup title="Job Type" options={filters.jobType} />
            </aside>

            <div className="space-y-4">
              <div className="flex flex-col justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm shadow-slate-100 sm:flex-row sm:items-center sm:px-5">
                <p className="font-medium text-slate-900">
                  Showing 1,409 jobs
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="text-slate-500">Sort by:</span>
                  <select className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Relevance</option>
                    <option>Latest</option>
                    <option>Salary (High to Low)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600 sm:px-5">
                <button className="rounded-full border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50">
                  Previous
                </button>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 10].map((page) => (
                    <button
                      key={page}
                      className={`h-8 w-8 rounded-full text-xs font-semibold ${
                        page === 1
                          ? "bg-blue-600 text-white"
                          : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                      }`}
                    >
                      {page === 10 ? "10" : page}
                    </button>
                  ))}
                </div>
                <button className="rounded-full border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>

            <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800">
              <h2 className="text-sm font-semibold text-slate-900">
                Stand out to employers
              </h2>
              <p className="text-xs text-slate-600">
                Create a complete profile, get matched with relevant roles, and
                be discovered by recruiters looking for talent like you.
              </p>
              <div className="rounded-2xl bg-slate-900 px-4 py-4 text-xs text-slate-100">
                <p className="font-semibold">Profile strength</p>
                <p className="mt-1 text-[11px] text-slate-300">
                  Complete your profile to increase your chances of getting
                  shortlisted.
                </p>
              </div>
              <button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm">
                Create Profile
              </button>
            </aside>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold text-slate-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, index) => (
                <FAQItem key={item.question} item={item} isOpen={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <TestimonialsStrip />
      </main>

      <Footer />
    </>
  );
};

export default JobSearchPage;

