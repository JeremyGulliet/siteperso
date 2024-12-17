/* eslint-disable react/no-unescaped-entities */
import OfferCard from "./offer-card";
import { cards } from "./dataOffre";
import HeroButton from "../hero-section/heroButton";
import { PurpleWaveDivider } from "../PurpleWaveDivider";

export default function Offre() {
  return (
    <section className="relative">
      {/* Séparateur ondulé supérieur */}
      <div className="absolute left-0 top-0 w-full overflow-hidden">
        <svg
          className="relative block h-[30px] w-full sm:h-[40px] md:h-[50px] lg:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-lightPurple transition-all duration-300"
          ></path>
        </svg>
      </div>

      <main
        id="offres"
        className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-4 bg-background px-4 py-16 sm:gap-8 sm:px-6"
      >
        <h1 className="text-center text-2xl font-extrabold leading-tight text-purple sm:text-[32px] md:text-5xl md:leading-snug">
          Des offres adaptées à tes besoins
        </h1>
        <p className="w-full text-center text-lg font-bold text-white sm:text-xl md:w-7/12 md:text-2xl">
          Quel que soit ton projet, il existe une offre pour toi.
        </p>
        <div className="flex w-full max-w-7xl flex-col flex-wrap justify-center gap-6 pt-4 sm:flex-row sm:gap-12">
          {cards.map((card) => (
            <OfferCard
              key={card.id}
              title={card.title}
              price={card.price}
              subtitle={card.subtitle}
              features={card.features}
            />
          ))}
        </div>
        <div className="mt-8">
          <HeroButton />
        </div>
      </main>

      <PurpleWaveDivider />
    </section>
  );
}
