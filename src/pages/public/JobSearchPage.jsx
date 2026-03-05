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
