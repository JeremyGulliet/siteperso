"use client"

import About from "@/components/about-section/about";
import Faq from "@/components/faq-section/faq";
import Problem from "@/components/Features-section/problem";
import Solution from "@/components/Features-section/solution";
import Hero from "@/components/hero-section/Hero";
import Offre from "@/components/offre-section/offre";
import Project from "@/components/project-section/project";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const HomeSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
};


export default function Home() {
  const ref = useRef(null);

  return (
    <div className="flex flex-col">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <HomeSection>
          <Hero />
        </HomeSection>
        <HomeSection>
          <Problem />
        </HomeSection>
        <HomeSection>
          <Solution />
        </HomeSection>
        <HomeSection>
          <About />
        </HomeSection>
        <HomeSection>
          <Offre />
        </HomeSection>
        <HomeSection>
          <Project />
        </HomeSection>
        <HomeSection>
          <Faq />
        </HomeSection>
      </motion.div>
    </div>
  );
}
