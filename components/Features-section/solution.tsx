/* eslint-disable react/no-unescaped-entities */
import { cards } from "./dataSolution";
import SolutionCard from "./solution-card";

export default function Solution() {

  return (
    <main className="scroll-mt-header-responsive lg:scroll-mt-header flex flex-col items-center justify-center gap-8 px-4 py-12">
      <h1 className="text-center text-[32px] font-extrabold leading-tight text-purple md:block md:text-5xl md:leading-snug">
        Un accompagement de A à Z
      </h1>
      <h3 className="w-full text-center text-xl font-bold text-white md:w-7/12 md:text-2xl">
        Que tu partes de zéro, d'une idée en cours de construction ou d'une
        maquette,
        <br />
        j'ai l'accompagement qu'il te faut.
      </h3>

      <div className="flex w-full max-w-7xl flex-wrap justify-center gap-8 pt-4">
        {cards.map((card) => (
          <SolutionCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
}
