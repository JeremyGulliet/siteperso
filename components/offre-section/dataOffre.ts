interface Card {
    id: number;
    title: string;
    subtitle?: string;
  features?: string[];
 }



export const cards: Card[] = [
  {
    id: 1,
    title: "Intégration",
    subtitle: "Landing page et site vitrine",
    features: [
      "Herbegement offert",
      "Optimisation SEO",
      "Repository Github",
      "Mise à jour gratuite du projet pendant 30 jours",
      "Accompagnement à la création de ton propre nom de domaine",
      "Maintenance offerte à vie (hors ajout de fonctionnalités et mise à jour de contenu)",
    ],
  },
  {
    id: 2,
    title: "Création de A à Z",
    subtitle:
      "Landing page, site vitrine, site e-commerce, SAAS, blog...",
    features: [
      "Herbegement offert",
      "Optimisation SEO",
      "Repository Github",
      "Accompagnement à la création de ton propre nom de domaine",
      "Mise à jour gratuite du projet pendant 30 jours",
      "Maintenance offerte à vie (hors ajout de fonctionnalités et mise à jour de contenu)",
    ],

  },
];
