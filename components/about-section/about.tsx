/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <main
      id="about"
      className="scroll-mt-header-responsive lg:scroll-mt-header bg-lightPurple flex flex-col items-center justify-center gap-8 py-4 md:gap-16 md:py-12"
    >
      <h1 className="px-4 text-center text-2xl font-extrabold leading-tight text-nebuleuse md:text-5xl md:leading-snug">
        Une personne au service de ton image
      </h1>

      <div className="flex w-full flex-col items-center gap-8 px-4 md:px-6 lg:w-10/12 lg:flex-row lg:gap-20 xl:w-9/12">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-justify text-lg font-medium text-black md:text-xl">
            Développer un site, une appli ou gérer la base de données d'une
            entreprise, pour beaucoup c'est du charabia et je peux comprendre.
            <br />
            <br />
            C'est pourquoi, je ne vais pas te parler de Tailwind CSS, React,
            Next JS, NodeJS… à moins que cela t'intéresse ! 😉
            <br />
            <br />
            J'ai travaillé pendant +10 ans dans l'immobilier, notamment en tant
            que gestionnaire de copropriétés, et j'en ai fait une force. Je suis
            habitué à :
            <br />
            <br />
            - Expliquer simplement des choses compliquées <br />
            - Accompagner mes clients, être disponible et réactif <br />
            - Proposer des solutions qui répondent vraiment à leurs besoins et à
            leurs attentes <br />- M'adapter à chaque situation et réaliser un
            suivi efficace.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-justify text-lg font-medium text-black md:justify-start md:text-xl">
            🚀 Alors, prêt à faire{" "}
            <p className="-rotate-3 rounded-2xl bg-nebuleuse p-2 text-lg font-bold text-white md:text-xl">
              décoller
            </p>{" "}
            ton activité ? 🚀
          </div>
        </div>

        <Image
          src="/asset/Images/Photo_de_Profil_LinkedIn_Jérémy_Gulliet.jpg"
          alt="logo"
          width={500}
          height={150}
          quality={75}
          priority={true}
          loading="eager"
          className="w-full max-w-[300px] md:max-w-[500px]"
        />
      </div>
    </main>
  );
}
