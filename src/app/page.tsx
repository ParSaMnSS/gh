import Hero from "./components/Hero";
import AboutUsHome from "./components/AboutUsHome";
import ProjectsHome from "./components/ProjectsHome";
import PartnersMarquee from "./components/PartnersMarquee";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* These section wrappers with IDs are new */}
      <section id="about-us">
        <AboutUsHome />
      </section>
      
      <section id="projects">
        <ProjectsHome />
      </section>
      
      <section id="partners">
        <PartnersMarquee />
      </section>
    </main>
  );
}