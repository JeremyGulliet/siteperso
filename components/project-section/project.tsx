import ButtonCall from "../ButtonCall";
import { cards } from "./dataProject";
import ProjectCard from "./project-card";

export default function Project() {
  return (
    <main
      id="réalisations"
      className="scroll-mt-header-responsive lg:scroll-mt-header bg-lightPurple flex flex-col items-center justify-center gap-12 px-4 py-8 sm:px-6 sm:py-12"
    >
      <h1 className="text-center text-2xl font-extrabold leading-tight text-nebuleuse sm:text-[32px] md:text-5xl md:leading-snug">
        Mes réalisations
      </h1>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>
      <ButtonCall />
    </main>
  );
}
