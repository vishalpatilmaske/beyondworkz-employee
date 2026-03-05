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
      <JobCategoriesSection />

      {/* ================= FEATURED JOBS ================= */}
      <FeaturedJobsSection />

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUsSection />

      {/* ================= EMPLOYER BANNER ================= */}
      <EmployerBannerSection />

      {/* ================= COOL PLACES ================= */}
      <CoolPlacesSection />

      {/* ================= CAREER RESOURCES ================= */}
      <CareerResourcesSection />

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialsSection />

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24" style={{ background: "#1248C1" }}>
        <div className="max-w-7xl mx-auto px-6">
          <CallToActionSection />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
