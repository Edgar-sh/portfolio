// ============================================================
// App.tsx — Main page orchestrator
// Consumes portfolioData.ts exclusively — zero hardcoded content
// ============================================================

import { heroData, aboutData, techCategories, projects, contactData, socialLinks } from "./data/portfolioData";
import { Navbar }           from "./components/Navbar";
import { HeroSection }      from "./components/HeroSection";
import { AboutSection }     from "./components/AboutSection";
import { TechSection }      from "./components/TechSection";
import { ProjectsSection }  from "./components/ProjectsSection";
import { ContactSection }   from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />
      <main>
        <HeroSection    data={heroData} />
        <AboutSection   data={aboutData} />
        <TechSection    categories={techCategories} />
        <ProjectsSection projects={projects} />
        <ContactSection  data={contactData} socialLinks={socialLinks} />
      </main>
    </div>
  );
}
