"use client"

import { useState } from "react";
import { cards } from "@/components/faq-section/dataFaq";
import ButtonCall from "../ButtonCall";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setActiveItem(activeItem === value ? null : value);
  };

  return (
    <main
      id="FAQ"
      className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:gap-12 lg:gap-16"
    >
      <Image
        src="/asset/Images/FAQs-amico.png"
        alt="FAQ illustration"
        width={400}
        height={120}
        quality={70}
        priority={true}
        loading="eager"
        className="w-full max-w-[250px] object-contain md:max-w-[300px] lg:max-w-[400px]"
        sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 400px"
      />

      <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px]">
        <div className="flex flex-col items-center justify-center gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex w-full flex-col rounded-2xl bg-nebuleuse px-4 py-2 text-white ring-2 ring-purple"
            >
              <button
                onClick={() => toggleItem(card.value)}
                className="flex flex-1 items-center justify-between py-4 text-xl font-medium transition-all hover:underline hover:underline-offset-4 md:text-2xl"
              >
                <p className="text-start"> {card.title}</p>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    activeItem === card.value ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden text-lg font-medium transition-all duration-200 ease-in-out md:text-xl ${activeItem === card.value ? "max-h-96" : "max-h-0"} `}
              >
                <div className="pb-4 pt-0 text-justify">{card.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 py-6 text-center text-xl font-medium text-white sm:py-8 md:text-2xl">
        🚀 Alors, prêt à faire{" "}
        <p className="-rotate-6 rounded-2xl bg-nebuleuse p-2 font-bold">
          décoller
        </p>{" "}
        ton activité ? 🚀
      </div>
      <ButtonCall />
    </main>
  );
}
