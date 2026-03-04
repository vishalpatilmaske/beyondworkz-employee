import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

import Hero from "../../components/landingpage/HeroSection";
import JobCategoriesSection from "../../components/landingpage/JobCategoriesSection";
import FeaturedJobsSection from "../../components/landingpage/FeaturedJobsSection";
import WhyChooseUsSection from "../../components/landingpage/WhyChooseUsSection";
import EmployerBannerSection from "../../components/landingpage/EmployerBannerSection";
import CoolPlacesSection from "../../components/landingpage/CoolPlacesSection";
import CareerResourcesSection from "../../components/landingpage/CareerResourcesSection";
import TestimonialsSection from "../../components/landingpage/TestimonialsSection";
import CallToActionSection from "../../components/landingpage/CallToActionSection";

const Landing = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= JOB CATEGORIES ================= */}
      <section className=" bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <JobCategoriesSection />
        </div>
      </section>

      {/* ================= FEATURED JOBS ================= */}
      <section className=" bg-[#94A3B8]">
          <FeaturedJobsSection />
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="">
          <WhyChooseUsSection />
      </section>

      {/* ================= EMPLOYER BANNER ================= */}
      <section className="bg-slate-100 pt-17">
        <div className="max-w-7xl mx-auto px-6">
          <EmployerBannerSection />
        </div>
      </section>

      {/* ================= COOL PLACES ================= */}
          <CoolPlacesSection />

      {/* ================= CAREER RESOURCES ================= */}
        <div className="max-w-7xl mx-auto px-6">
          <CareerResourcesSection />
        </div>


      {/* ================= TESTIMONIALS ================= */}
          <TestimonialsSection />

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <CallToActionSection />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;