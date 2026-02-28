import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/landingpage/HeroSection";
import HowItWorksSection from "../../components/landingpage/HowItWorksSection";
import JobCategoriesSection from "../../components/landingpage/JobCategoriesSection";
import CallToActionSection from "../../components/landingpage/CallToActionSection";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <JobCategoriesSection />
      <CallToActionSection />
      <Footer />
    </>
  );
};

export default Landing;
