import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import SearchBar from "../../components/jobsearch/SearchBar";
import FiltersSidebar from "../../components/jobsearch/FiltersSidebar";
import ResultsHeader from "../../components/jobsearch/ResultsHeader";
import JobCard from "../../components/jobsearch/JobCard";
import Pagination from "../../components/jobsearch/Pagination";
import EmployerCard from "../../components/jobsearch/EmployerCard";
import FAQSection from "../../components/jobsearch/FAQSection";
import TestimonialsStrip from "../../components/jobsearch/TestimonialsStrip";

import { jobs } from "../../data/jobs";
import { filters } from "../../data/filter";

const JobSearchPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pb-12">
        <SearchBar />

        <section className="py-6 md:py-8 lg:py-10">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {/* Use grid with explicit column template + gap */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)_minmax(0,300px)] gap-6 lg:gap-8 items-start">
              <FiltersSidebar filters={filters} />

              {/* CENTER - JOB LIST */}
              <div className="space-y-5 lg:space-y-6 min-w-0">
                <ResultsHeader />

                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}

                <div className="pt-4">
                  <Pagination />
                </div>
              </div>

              <EmployerCard />
            </div>
          </div>
        </section>

        <FAQSection />
        <TestimonialsStrip />
      </main>

      <Footer />
    </>
  );
};

export default JobSearchPage;
