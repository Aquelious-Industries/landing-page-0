import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemBand from "@/components/ProblemBand";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import Ecosystem from "@/components/Ecosystem";
import Dashboard from "@/components/Dashboard";
import Validation from "@/components/Validation";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemBand />
        <Workflow />
        <Features />
        <Ecosystem />
        <Dashboard />
        <Validation />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
