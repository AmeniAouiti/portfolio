import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Project } from "../types";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import DevOpsSection from "../components/DevOpsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import PortfolioBackground from "../components/animations/PortfolioBackground";

export const LandingPage = () => {
  const { locale } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = locale.projects.data;
  const experiences = locale.experience.data;

  return (
    <div className="relative overflow-x-hidden bg-bg text-text">
      <PortfolioBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} onOpenProject={setSelectedProject} />
        <TechStackSection />
        <DevOpsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default LandingPage;
