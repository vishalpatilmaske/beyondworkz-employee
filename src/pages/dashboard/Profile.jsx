import ProfileHeader from "../../components/profile/ProfileHeader.jsx";
import AboutSection from "../../components/profile/AboutSection";
import SkillsSection from "../../components/profile/SkillsSection";
import WorkExperience from "../../components/profile/WorkExperience";
import EducationSection from "../../components/profile/EducationSection.jsx";
import ResumeSection from "../../components/profile/ResumeSection";
import ProfileCompletion from "../../components/profile/ProfileCompletion";
import ProfileVisibility from "../../components/profile/ProfileVisibility";

const Profile = () => {
  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        <ProfileHeader />

        <AboutSection />

        <SkillsSection />

        <WorkExperience />

        <EducationSection />

        <ResumeSection />
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        <ProfileCompletion />

        <ProfileVisibility />
      </div>
    </div>
  );
};

export default Profile;
