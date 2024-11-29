/* eslint-disable react/no-unescaped-entities */
"use client"

import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {

  const listRef = useRef(null);
  const isInView = useInView(listRef);
  const bounceRef = useRef(null);

  const isBounceInView = useInView(bounceRef)

  const items = [
    "Expliquer simplement des choses compliquées",
    "Accompagner mes clients, être disponible et réactif",
    "Proposer des solutions qui répondent vraiment à leurs besoins et à leurs attentes",
    "M'adapter à chaque situation et réaliser un suivi efficace"
  ];
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 1 + 1,
      },
    }),
  };

  return (
    <main
      id="about"
      className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-8 bg-lightPurple py-4 md:gap-16 md:py-12"
    >
      <h1 className="px-4 text-center text-2xl font-extrabold leading-tight text-nebuleuse md:text-5xl md:leading-snug">
        Je t'accompagne pour créer un site au service de ton activité
      </h1>

      <div className="flex w-full flex-col items-center gap-8 px-4 md:px-6 lg:w-10/12 lg:flex-row lg:gap-20 xl:w-9/12">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="text-justify text-lg font-medium text-black md:text-xl">
            Développer un site, une appli ou gérer la base de données d'une
            entreprise, pour beaucoup c'est du charabia et je peux comprendre.
            <br />
            <br />
            C'est pourquoi, je ne vais pas te parler de Tailwind CSS, React,
            Next JS, NodeJS… à moins que cela t'intéresse ! 😉
            <br />
            <br />
            J'ai travaillé pendant plus de 10 ans dans l'immobilier, notamment
            en tant que gestionnaire de copropriétés, et j'en ai fait une force.
            <br />
            <br />
            Je suis habitué à :
            <br />
            <br />
            <ul ref={listRef} className="list-disc space-y-4 pl-8">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={listItemVariants}
                  className="text-lg font-medium text-black md:text-xl"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="hidden 2xl:flex flex-wrap items-center gap-2 text-justify  font-medium text-black justify-start text-xl"
            ref={bounceRef}
            initial={{ x: -1000 }}
            animate={isBounceInView ? { x: 0 } : { x: -1000 }}
            transition={{
              type: "spring",
              duration: 3,
              bounce: 0.3,
              delay: isBounceInView ? 4.5 : 0,
            }}
          >
            🚀 Alors, prêt à faire{" "}
            <p className="-rotate-3 rounded-2xl bg-nebuleuse p-2 text-lg font-bold text-white md:text-xl">
              décoller
            </p>{" "}
            ton activité ? 🚀
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-justify text-lg font-medium text-black md:justify-start md:text-xl 2xl:hidden">
            🚀 Alors, prêt à faire{" "}
            <p className="-rotate-3 rounded-2xl bg-nebuleuse p-2 text-lg font-bold text-white md:text-xl">
              décoller
            </p>{" "}
            ton activité ? 🚀
          </div>
        </div>

        <Image
          src="/asset/Images/Photo_de_Profil_LinkedIn_Jeremy_Gulliet.png"
          alt="logo"
          width={500}
          height={150}
          quality={75}
          priority={true}
          loading="eager"
          className="w-full max-w-[300px] md:max-w-[500px]"
        />
      </div>
    </main>
  );
}
