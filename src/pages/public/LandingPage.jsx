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
      <Hero />
      <JobCategoriesSection />
      <FeaturedJobsSection />
      <WhyChooseUsSection />
      <EmployerBannerSection />
      <CoolPlacesSection />
      <CareerResourcesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </>
  );
};

export default Landing;
