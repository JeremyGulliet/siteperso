interface Card {
  id: number;
  title: string;
  description: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Découverte",
    description:
      "Nous découvrons ensemble ton projet, tes besoins et tes attentes lors d'un rendez-vous découverte.\n\nCela me permettra de te proposer une solution adaptée à ton projet.",
  },
  {
    id: 2,
    title: "Conception",
    description:
      "Je te propose une maquette de ton projet par rapport aux éléments définis lors de la découverte.\n\nElle nous permettra de valider ensemble le design, les fonctionnalités et les modifications à apporter.",
  },
  {
    id: 3,
    title: "Développement",
    description:
      "Je développe ton projet avec le design et les fonctionnalités définies lors de la conception.\n\nJe te tiens informé de l'avancée du projet et je reste à l'écoute de tes retours.",
  },
  {
    id: 4,
    title: "Livraison",
    description:
      "Je te livre ton site ou ta landing page, je t'accompagne dans sa prise en main.\n\nJe reste disponible pour répondre à tes questions et t'accompagner dans l'évolution de ton projet.",
  },
];