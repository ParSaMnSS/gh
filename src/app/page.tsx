import Hero from "./components/Hero";
import AboutUsHome from "./components/AboutUsHome";
import ProjectsHome from "./components/ProjectsHome";
import PartnersHome from "./components/PartnersMarquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsHome />
      <ProjectsHome />
      <PartnersHome />
    </main>
  );
}