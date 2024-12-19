"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
let interval: any;

type Card = {
  id: number;
  content: React.ReactNode;
  answer: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [progress, setProgress] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  const rotateCards = useCallback(() => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      // On déplace la première carte à la fin
      newArray.push(newArray.shift()!);
      return newArray;
    });
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    // Seuils de déclenchement horizontal et vertical
    const THRESHOLD = 100;

    if (info.offset.x < -THRESHOLD || info.offset.y > THRESHOLD) {
      // Glissement vers la gauche ou vers le bas
      rotateCards();
      setProgress(0);
    } else if (info.offset.x > THRESHOLD || info.offset.y < -THRESHOLD) {
      // Glissement vers la droite ou vers le haut
      rotateCards();
      setProgress(0);
    }
  };

  const startFlipping = useCallback(() => {
    clearInterval(interval);
    if (isHovered) return; // Ne pas démarrer si survolé

    let startTime = Date.now();
    const duration = 5000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= duration) {
        startTime = Date.now();
        rotateCards();
      }
    };

    interval = setInterval(updateProgress, 16);
  }, [isHovered, rotateCards]);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, [startFlipping]);

  return (
    <TooltipProvider>
      <div
        className="relative size-[300px] md:h-[300px] md:w-[600px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cards.map((card, index) => {
          const cardContent = (
            <motion.div
              key={card.id}
              className="absolute flex size-[300px] cursor-grab flex-col justify-between rounded-3xl border border-white/20 bg-gradient-to-r from-purple to-nebuleuse p-6 shadow-xl shadow-black/[0.1] active:cursor-grabbing md:h-[300px] md:w-[600px] md:p-8"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              drag={index === 0 ? true : false}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={handleDragEnd}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="text-lg font-bold text-white md:text-2xl">
                  {card.content}
                </div>
                <div className="text-xs text-white/90 md:text-xl">
                  {card.answer}
                </div>
              </div>
              <div className="flex items-center justify-center">
                {index === 0 && (
                  <motion.div
                    className="size-4 rounded-full border border-white/50"
                    style={{
                      background: `conic-gradient(white ${progress}%, transparent ${progress}%)`,
                    }}
                  />
                )}
              </div>
            </motion.div>
          );
          return index === 0 ? (
            <Tooltip key={card.id}>
              <TooltipTrigger asChild>
                {cardContent}
              </TooltipTrigger>
              <TooltipContent side="bottom" className="rounded-2xl bg-nebuleuse">
                <p className="text-lg font-bold text-white">Glissez pour voir la carte suivante</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            cardContent
          );
        })}
      </div>
    </TooltipProvider>
  );
}