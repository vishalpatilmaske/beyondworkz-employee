import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import SearchBar from "../../components/job-search/SearchBar";
import FiltersSidebar from "../../components/job-search/FiltersSidebar";
import ResultsHeader from "../../components/job-search/ResultsHeader";
import JobCard from "../../components/job-search/JobCard";
import Pagination from "../../components/job-search/Pagination";
import EmployerCard from "../../components/job-search/EmployerCard";
import FAQSection from "../../components/job-search/FAQSection";
import TestimonialsStrip from "../../components/job-search/TestimonialsStrip";

import { jobs } from "../../data/Jobs";
import { filters } from "../../data/filters";

const JobSearchPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <SearchBar />

        <section className="py-6 sm:py-8">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[260px,minmax(0,1fr),260px] lg:px-8">
            
            <FiltersSidebar filters={filters} />

            <div className="space-y-4">
              <ResultsHeader />

              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}

              <Pagination />
            </div>

            <EmployerCard />

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