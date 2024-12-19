interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Découverte",
    description:
      "Commençons par faire connaissance autour d'un café virtuel ! C'est le moment idéal pour me parler de ton projet et de tes ambitions.\n\nEnsemble, nous explorerons tes besoins pour construire la solution parfaite pour toi.",
    icon: "🔍",
    image: "/asset/Images/Discovery2.jpg",
  },
  {
    id: 2,
    title: "Conception",
    description:
      "Place à la créativité ! Je vais transformer tes idées en une maquette concrète et interactive.\n\nTu pourras visualiser ton futur site et on ajustera chaque détail jusqu'à ce que le résultat corresponde exactement à tes attentes.",
    icon: "✏️",
    image: "/asset/Images/Conception.jpg",
  },
  {
    id: 3,
    title: "Développement",
    description:
      "C'est parti pour donner vie à ton projet ! Je code chaque fonctionnalité avec soin et en faisant attention aux détails.\n\nPas d'inquiétude, je te tiens au courant de chaque avancée et reste à l'écoute de tes retours tout au long du développement.",
    icon: "💻",
    image: "/asset/Images/Developpement2.jpg",
  },
  {
    id: 4,
    title: "Livraison",
    description:
      "Ton site est prêt à conquérir le web ! Je t'accompagne dans sa mise en ligne et t'explique comment tout fonctionne.\n\nMais ce n'est pas un adieu ! Je reste disponible pour t'aider à faire évoluer ton site selon tes besoins.",
    icon: "🚀",
    image: "/asset/Images/Livraison.jpg",
  },
];
