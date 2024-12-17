interface Card { 
    id: number;
    value: string;
    title: string;
    content: string;
}

export const cards: Card[] = [
  {
    id: 1,
    value: "item-1",
    title: "Comment se déroule le rendez-vous découverte ?",
    content: "Dans un premier temps, je t'écoute pour comprendre ton projet et tes besoins. Dans un second temps, je t'explique comment je peux t'aider et réponds à tes questions.",
  },
  {
    id: 2,
    value: "item-2",
    title: "Comment se déroule le règlement de la prestation?",
    content: "Il y a un accompte de 30% à régler à la signature du devis. 30% à la validation de la maquette et le solde est à la livraison du projet.",
  },
  {
    id: 3,
    value: "item-3",
    title: "Combien de modifications peut-on faire en phase de conception ?",
    content: "Les modifications sont illimitées dans la limite du raisonable. Je peux refuser une modification si elle n'est pas en accord avec ton projet.",
    },
    {
        id: 4,
        value: "item-4",
        title: "Est ce que je peux gérer mon site moi-même ?",
        content: "Je peux te créer une interface administrateur pour que tu puisses gérer ton site toi-même. Je te forme à l'utilisation de cet outil. Cette prestation est en option et fera l'objet d'un devis complémentaire.",
    },
  {
    id: 5,
    value: "item-5",
    title: "Qu'est ce que la maintenance offerte à vie ?",
    content: "Je m'engage à corriger les bugs et les problèmes techniques de ton site. Je ne prends pas en charge les ajouts de fonctionnalités et les mises à jour de contenu.",
  },
  {
    id: 6,
    value: "item-6",
    title: "Combien de temps faut-il pour réaliser un site vitrine ou une landing page ?",
    content: "Le délai de réalisation est de 1 à 2 semaine pour une landing page et de 3 à 5 semaines pour un site vitrine. Ce délai peut varier en fonction de la complexité du projet et de la rapidité de tes retours.",
    }
    
];