"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const AnimatedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
