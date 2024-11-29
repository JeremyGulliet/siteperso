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
    title: "Quels sont tes tarifs ?",
    content: "Mes tarifs sont sur devis. Je te propose un devis sur mesure en fonction de ton projet et de tes besoins.",
    },
  {
    id: 3,
    value: "item-3",
    title: "Comment se déroule le règlement de la prestation?",
    content: "Il y a un accompte de 30% à régler à la signature du devis. 30% à la validation de la maquette et le solde est à la livraison du projet.",
  },
  {
    id: 4,
    value: "item-4",
    title: "Combien de modifications peut-on faire en phase de conception ?",
    content: "Les modifications sont illimitées dans la limite du raisonable. Je peux refuser une modification si elle n'est pas en accord avec ton projet.",
    },
    {
        id: 5,
        value: "item-5",
        title: "Est ce que je peux gérer mon site moi-même ?",
        content: "Je peux te créer une interface administrateur pour que tu puisses gérer votre site toi-même. Je te forme à l'utilisation de cet outil.",
    },
    {
        id: 6,
        value: "item-6",
        title: "Pourquoi ne proposes-tu pas de pack tout compris ?",
        content: "Chaque projet est différent et chaque client a des besoins différents. Je préfère te proposer un devis sur mesure pour répondre au mieux à tes attentes.",
  },
  {
    id: 7,
    value: "item-7",
    title: "Qu'est ce que la maintenance offerte à vie ?",
    content: "Je m'engage à corriger les bugs et les problèmes techniques de ton site. Je ne prends pas en charge les ajouts de fonctionnalités et les mises à jour de contenu.",
    }
    
];