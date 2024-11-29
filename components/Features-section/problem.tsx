import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Problem() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
  });

  const bubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const centerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 4,
        delayChildren: 0.3,
      },
    },
  };

  const leftContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 1.5,
      },
    },
  };

  const rightContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 2.5,
      },
    },
  };

  const mobileContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.1,
      },
    },
  };

  const mobileBubbleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <main
      ref={sectionRef}
      id="accompagnement"
      className="scroll-mt-header-responsive lg:scroll-mt-header bg-lightPurple flex flex-col items-center justify-center gap-4 py-4 md:gap-8 md:py-12 lg:gap-16"
    >
      <h1 className="px-4 text-center text-2xl font-extrabold leading-tight text-nebuleuse md:text-4xl lg:text-5xl">
        Tu as une idée en tête mais tu ne sais pas la réaliser ?
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center gap-8 px-4 text-white lg:flex-row lg:gap-32"
      >
        {/* Colonne gauche */}
        <motion.div
          variants={leftContainer}
          className="hidden h-96 flex-col items-center justify-around gap-28 lg:flex"
        >
          <motion.p variants={bubbleVariants} className="question-bubble">
            Comment gérer <br /> mon contenu ?
          </motion.p>
          <motion.p
            variants={bubbleVariants}
            className="question-bubble xl:rotate-12"
          >
            Comment attirer <br /> les clients ?
          </motion.p>
        </motion.div>

        {/* Colonne centrale */}
        <motion.div
          variants={centerContainer}
          className="hidden lg:flex flex-col items-center gap-8 lg:gap-16"
        >
          <motion.p
            variants={bubbleVariants}
            className="question-bubble-mobile lg:question-bubble"
          >
            Par où commencer ?
          </motion.p>
          <Image
            src="/asset/Images/Woman thinking-bro.png"
            alt="FAQ illustration"
            width={400}
            height={120}
            quality={70}
            priority={true}
            loading="eager"
            className="w-full max-w-[200px] object-contain sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
          />
          <motion.p
            variants={bubbleVariants}
            className="question-bubble-mobile lg:question-bubble"
          >
            Quel format est adapté à mon projet?
          </motion.p>
        </motion.div>

        {/* Colonne droite */}
        <motion.div
          variants={rightContainer}
          className="hidden h-96 flex-col items-center justify-around gap-28 lg:flex"
        >
          <motion.p
            variants={bubbleVariants}
            className="question-bubble xl:rotate-12"
          >
            Comment augmenter
            <br /> mes conversions?
          </motion.p>
          <motion.p
            variants={bubbleVariants}
            className="question-bubble xl:-rotate-12"
          >
            Quel design correspond
            <br /> à cette idée ?
          </motion.p>
        </motion.div>

        {/* Questions mobiles */}
        <motion.div
          variants={mobileContainer}
          className="flex flex-col justify-center items-center gap-8 lg:hidden"
        >
          <Image
            src="/asset/Images/Woman thinking-bro.png"
            alt="FAQ illustration"
            width={400}
            height={120}
            quality={70}
            priority={true}
            loading="eager"
            className="w-full max-w-[200px] object-contain sm:max-w-[250px] md:max-w-[300px]"
          />
          {[
            "Par où commencer ?",
            "Comment gérer mon contenu ?",
            "Comment attirer les clients ?",
            "Comment augmenter mes conversions?",
            "Quel design correspond à cette idée ?",
            "Quel format est adapté à mon projet?",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={mobileBubbleVariants}
              className="question-bubble-mobile"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}