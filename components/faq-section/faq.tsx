import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cards } from "@/components/faq-section/dataFaq";
import ButtonCall from "../ButtonCall";
import Image from "next/image";

export default function Faq() {
  return (
    <main
      id="FAQ"
      className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:gap-12 lg:gap-16"
    >
      {/* <h1 className="text-center font-extrabold leading-tight text-purple text-2xl md:text-4xl md:leading-snug lg:text-5xl">
        Encore des questions ?
      </h1> */}
      <Image
        src="/asset/Images/FAQs-amico.png"
        alt="FAQ illustration"
        width={400}
        height={120}
        quality={70}
        priority={true}
        loading="eager"
        className="w-full max-w-[250px] object-contain md:max-w-[300px] lg:max-w-[400px]"
      />
      <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col items-center justify-center gap-4"
        >
          {cards.map((card) => (
            <AccordionItem
              key={card.id}
              value={card.value}
              className="w-full text-justify text-sm sm:text-base md:text-lg"
            >
              <AccordionTrigger className="text-left font-semibold">
                {card.title}
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {card.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 py-6 text-center text-xl font-medium text-white sm:py-8 md:text-2xl">
        🚀 Alors, prêt à faire{" "}
        <p className="-rotate-3 rounded-2xl bg-nebuleuse p-2 font-bold">
          décoller
        </p>{" "}
        ton activité ? 🚀
      </div>
      <ButtonCall />
    </main>
  );
}