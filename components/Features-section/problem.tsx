"use client"

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GradientWaveDivider } from "../GradientWaveDivider";
import { CardStack } from "../ui/card-stack";
import { questions } from "./dataProblem";

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  
  return (
    <section className="relative">
      <main
        ref={sectionRef}
        id="accompagnement"
        className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-16 bg-lightPurple py-16 md:gap-8 lg:gap-16"
      >
        <h1 className="text-center text-[32px] font-extrabold leading-tight text-nebuleuse md:block md:text-5xl md:leading-snug">
          Comment concrétiser mon projet ?
        </h1>

        <div className="flex flex-col items-center justify-center gap-40 px-4 pb-12 lg:flex-row lg:gap-52">
          <div className="flex items-center justify-center">
            <Image
              src="/asset/Images/Developpement.jpg"
              alt="Problem image"
              width={400}
              height={400}
              quality={70}
              priority={true}
              loading="eager"
              className="w-full max-w-[250px] rounded-2xl object-contain sm:max-w-[300px] md:max-w-[350px] lg:max-w-[500px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <CardStack items={questions} offset={15} scaleFactor={0.08} />
          </motion.div>
        </div>
        <GradientWaveDivider />
      </main>
    </section>
  );
}
