interface Card {
    id: number;
  title: string;
  price: number | string;
    subtitle?: string;
  features?: string[];
 }



export const cards: Card[] = [
  {
    id: 1,
    title: "Landing Page",
    subtitle: "L'essentiel pour te faire connaître",
    price: 1500,
    features: [
      "1 page",
      "Design sur mesure",
      "Copywriting",
      "Hébergement offert",
      "Optimisation SEO",
      "Code complet sur Github",
      "Mise à jour gratuite du projet pendant 30 jours",
      "Accompagnement à la création de ton propre nom de domaine",
      "Maintenance offerte à vie (hors ajout de fonctionnalités et mise à jour de contenu)",
    ],
  },
  {
    id: 2,
    title: "Site vitrine",
    subtitle: "Un site pour présenter ton activité",
    price: 4500,
    features: [
      "5 pages à ton image",
      "Design sur mesure",
      "Copywriting",
      "Hébergement offert",
      "Optimisation SEO",
      "Code complet sur Github",
      "Mise à jour gratuite du projet pendant 30 jours",
      "Accompagnement à la création de ton propre nom de domaine",
      "Maintenance offerte à vie (hors ajout de fonctionnalités et mise à jour de contenu)",
    ],
  },
];
