/* eslint-disable react/no-unescaped-entities */
import HeroButton from "../hero-section/heroButton";
import { PurpleWaveDivider } from "../PurpleWaveDivider";
import { cards } from "./dataSolution";
import SolutionCard from "./solution-card";

export default function Solution() {

  return (
    <section className="relative">
      <main className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-8 px-4 pb-24 pt-16">
        <h1 className="text-center text-[32px] font-extrabold leading-tight text-purple md:block md:text-5xl md:leading-snug">
          J'ai l'accompagement qu'il te faut
        </h1>
        <p className="l w-full text-center text-xl font-bold text-white md:w-7/12 md:text-2xl">
          Que tu partes de zéro, d'une idée en cours de construction ou d'une
          maquette,
          <br />
          <span className="rounded-2xl bg-nebuleuse p-2 leading-loose">
            je suis avec toi de A à Z.
          </span>
        </p>

        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 xl:grid-cols-2 xl:gap-12">
          {cards.map((card) => (
            <SolutionCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              image={card.image}
            />
          ))}
        </div>
        <HeroButton />
      </main>
      <PurpleWaveDivider />
    </section>
  );
}
