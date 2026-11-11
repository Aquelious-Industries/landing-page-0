import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemBand from "@/components/ProblemBand";
import OurStory from "@/components/OurStory";
import HowWeAutomate from "@/components/HowWeAutomate";
import Ecosystem from "@/components/Ecosystem";
import Dashboard from "@/components/Dashboard";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StoryAutomationFlow from "@/components/StoryAutomationFlow";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <OurStory /> */}
        <StoryAutomationFlow />
        {/* <HowWeAutomate /> */}
        <Dashboard />
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
