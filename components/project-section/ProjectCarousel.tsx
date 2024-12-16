"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cards } from "./dataProject";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (index: number) => {
    // Calculer la différence entre l'index actuel et l'index de la carte
    let diff = index - currentIndex;

    // Ajustement pour que les cartes continuent de défiler
    if (diff < -1) {
      diff += cards.length;
    } else if (diff > 1) {
      diff -= cards.length;
    }

    return diff;
  };

  return (
    <div className="relative mb-8 flex h-[650px] w-full items-center justify-center">
      <div className="relative h-[500px] w-[1800px]">
        {cards.map((card, i) => {
          const position = getPosition(i);
          const isVisible = position >= -1 && position <= 1;

          if (!isVisible) return null;

          return (
            <motion.div
              key={card.id}
              className="absolute left-1/2 top-0 h-[500px] w-[900px]"
              initial={false}
              animate={{
                x: `calc(${position * 65}% - 50%)`,
                scale: position === 0 ? 1 : 0.5,
                opacity: position === 0 ? 1 : 0.3,
                zIndex: position === 0 ? 2 : 1,
                filter: position === 0 ? "none" : "brightness(0.7)",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="rounded-xl object-cover shadow-2xl"
                onClick={() =>
                  position === 0 && window.open(card.link, "_blank")
                }
                style={{
                  cursor: position === 0 ? "pointer" : "default",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
