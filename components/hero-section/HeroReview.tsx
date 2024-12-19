import AvisCard from "./avis-card";
import { FaStar } from "react-icons/fa";

export default function HeroReview() {
  const stars = Array(5).fill(null);

  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-0">
      <div className="mb-4 flex items-center gap-1 md:mb-6 md:gap-2">
        {stars.map((_, index) => (
          <FaStar
            key={index}
            className="text-2xl text-yellow-400 transition-transform md:text-3xl"
          />
        ))}
      </div>
      <AvisCard
        texte="Jérémy a réalisé mon site professionnel. C'est une super landing page pour présenter mon service, mes offres et qui je suis. Il a su m'accompagner de A à Z et me conseiller sur les différentes parties à faire figurer sur mon site. Je ne saurais que vous recommander de travailler avec lui pour votre site ou votre landing page."
        auteurNom="Laura Mezzone"
        auteurFunction="Ghostwriter"
      />
    </main>
  );
}
