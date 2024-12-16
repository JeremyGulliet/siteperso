interface card { 
    id: number
    title: string;
    description: string;
    image: string;
    link: string;
}

export const cards: card[] = [
  {
    id: 1,
    title: "Création d'un site vitrine de A à Z",
    description:
      "J'ai réalisé ce site en partant de 0. J'ai créé le design, le contenu, le développement et le déploiement.",
    image: "/asset/Images/Portfolio.png",
    link: "https://portfolio-jeremy-gulliet.vercel.app/",
  },
  {
    id: 2,
    title: "Création landing page de A à Z",
    description:
      "Laura avait besoin d'un site à son image pour présenter ses services de stratégie éditoriale et de ghostwriting sur LinkedIn.\n\n J'ai donc créé une landing page, avec ses éléments visuels, de A à Z pour elle.",
    image:
      "/asset/Images/Laura MEZZONE - Stratégie éditoriale & Ghostwriting LinkedIn.png",
    link: "https://laura-mezzone.vercel.app/",
  },
  {
    id: 3,
    title: "Intégration d'une maquette",
    description:
      "Dans le cadre d'un challenge sur Spikes, j'ai intégré une maquette de landing page.",
    image: "/asset/Images/LandingPage-Spikes.png",
    link: "https://landing-page-spikes.vercel.app/",
  },
  {
    id: 4,
    title: "Intégration d'une maquette",
    description:
      "Dans le cadre d'un challenge sur Spikes, j'ai intégré une maquette de landing page.",
    image: "/asset/Images/Squaree.png",
    link: "https://squaree-landing.vercel.app/",
  },
];