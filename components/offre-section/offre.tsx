/* eslint-disable react/no-unescaped-entities */
import OfferCard from "./offer-card";
import { cards } from "./dataOffre";
export default function Offre() {

    return (
      <main
        id="offres"
        className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-4 px-4 py-8 sm:gap-8 sm:px-6 sm:py-16"
      >
        <h1 className="text-center text-2xl font-extrabold leading-tight text-purple sm:text-[32px] md:text-5xl md:leading-snug">
          Des offres pour ton image
        </h1>
        <p className="w-full text-center text-lg font-bold text-white sm:text-xl md:w-7/12 md:text-2xl">
          Quelque soit ton projet, je te construit une offre adaptée à tes
          besoins.
        </p>
        <div className="flex w-full max-w-7xl flex-col flex-wrap justify-center gap-6 pt-4 sm:flex-row sm:gap-12">
          {cards.map((card) => (
            <OfferCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              features={card.features}
            />
          ))}
        </div>
      </main>
    );
 }