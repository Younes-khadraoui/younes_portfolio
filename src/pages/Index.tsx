import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EngineeringFocus from "@/components/EngineeringFocus";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EngineeringFocus />
      <Projects />
      <TechStack />
      <Timeline />
      <Contact />
    </div>
  );
};

export default Index;
