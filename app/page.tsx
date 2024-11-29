import About from "@/components/about-section/about";
import Faq from "@/components/faq-section/faq";
import Problem from "@/components/Features-section/problem";
import Solution from "@/components/Features-section/solution";
import Hero from "@/components/hero-section/Hero";
import Offre from "@/components/offre-section/offre";
import Project from "@/components/project-section/project";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Problem />
      </AnimatedSection>
      <AnimatedSection>
        <Solution />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Offre />
      </AnimatedSection>
      <AnimatedSection>
        <Project />
      </AnimatedSection>
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
    </div>
  );
}
