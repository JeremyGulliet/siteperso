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
    content: "Dans un premier temps, je vous écoute pour comprendre votre projet et vos besoins. Dans un second temps, je vous explique comment je peux vous aider et réponds à vos questions.",
  },
  {
    id: 2,
    value: "item-2",
    title: "Quels sont vos tarifs ?",
    content: "Mes tarifs sont sur devis. Je vous propose un devis sur mesure en fonction de votre projet et de vos besoins.",
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
    content: "Les modifications sont illimitées dans la limite du raisonable. Je peux refuser une modification si elle n'est pas en accord avec votre projet.",
    },
    {
        id: 5,
        value: "item-5",
        title: "Est ce que je peux gérer mon site moi-même ?",
        content: "Je peux vous créer une interface administrateur pour que vous puissiez gérer votre site vous-même. Je vous forme à l'utilisation de cet outil.",
    },
    {
        id: 6,
        value: "item-6",
        title: "Pourquoi ne proposez-vous pas de pack tout compris ?",
        content: "Chaque projet est différent et chaque client a des besoins différents. Je préfère vous proposer un devis sur mesure pour répondre au mieux à vos attentes.",
  },
  {
    id: 7,
    value: "item-7",
    title: "Qu'est ce que la maintenance offerte à vie ?",
    content: "Je m'engage à corriger les bugs et les problèmes techniques de votre site. Je ne prends pas en charge les ajouts de fonctionnalités et les mises à jour de contenu.",
    }
    
];