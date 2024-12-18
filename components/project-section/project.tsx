"use client";

import HeroButton from "../hero-section/heroButton";
import ProjectCarousel from "./ProjectCarousel";
import { GradientWaveDivider } from "../GradientWaveDivider";

export default function Project() {
  return (
    <section className="relative">
      <main
        id="réalisations"
        className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center overflow-hidden bg-lightPurple px-4 py-16 sm:px-6"
      >
        <h1 className="text-center text-2xl font-extrabold leading-tight text-nebuleuse sm:text-[32px] md:text-5xl md:leading-snug">
          Mes réalisations
        </h1>
        <div className="flex flex-col items-center gap-12">
          <ProjectCarousel />
          <HeroButton />
        </div>
      </main>

      {/* Séparateur ondulé inférieur */}
      <GradientWaveDivider />
    </section>
  );
}
