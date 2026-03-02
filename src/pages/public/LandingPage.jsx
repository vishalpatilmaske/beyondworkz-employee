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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturedJobsSection />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gradient-to-b from-blue-100 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <WhyChooseUsSection />
        </div>
      </section>

      {/* ================= EMPLOYER BANNER ================= */}
      <section className="bg-slate-100 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <EmployerBannerSection />
        </div>
      </section>

      {/* ================= COOL PLACES ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-100 to-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <CoolPlacesSection />
        </div>
      </section>

      {/* ================= CAREER RESOURCES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CareerResourcesSection />
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialsSection />
        </div>
      </section>

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