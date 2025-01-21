export interface Article {
  image: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  slug: string;
}

export const articles: Article[] = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    category: "Innovation",
    title: "ChatGPT Tasks : Les Agents IA Débarquent sur ChatGPT !",
    summary: "Découvrez ChatGPT Tasks, la nouvelle fonctionnalité révolutionnaire qui transforme ChatGPT en un véritable assistant personnel automatisé.",
    date: "2025-01-18",
    readTime: "8 min",
    slug: "chatgpt-tasks-agents-ia"
  },
  {
    image: "https://img.youtube.com/vi/lrF0lPfrwag/maxresdefault.jpg",
    category: "Innovation",
    title: "MidSceneJS : Votre Assistant IA Gratuit pour Doper votre Productivité en Outre-mer",
    summary: "Découvrez comment MidSceneJS permet aux entreprises ultramarines de rester compétitives malgré le décalage horaire grâce à l'automatisation intelligente.",
    date: "2025-01-13",
    readTime: "6 min",
    slug: "midscene-js-assistant-ia"
  },
  {
    image: "https://img.youtube.com/vi/Q11zWq4875o/maxresdefault.jpg",
    category: "Innovation",
    title: "Do Browser : L'assistant IA qui simplifie le travail des entrepreneurs ultramarins",
    summary: "Découvrez comment Do Browser révolutionne le travail des entrepreneurs ultramarins avec son assistant IA intégré au navigateur.",
    date: "2025-01-13",
    readTime: "5 min",
    slug: "do-browser-assistant-ia"
  },
  {
    image: "/images/blog/ia-outremer.jpg",
    category: "Innovation",
    title: "L'IA et les Outre-mer : De la Peur au Potentiel Inexploité",
    summary: "Découvrez comment l'intelligence artificielle transforme le paysage économique de nos territoires ultramarins.",
    date: "2025-01-05",
    readTime: "7 min",
    slug: "ia-et-outremer"
  },
  {
    image: "/images/blog/ia-martinique.jpg",
    category: "Innovation",
    title: "L'IA au service du développement local en Martinique",
    summary: "Découvrez comment l'intelligence artificielle transforme le paysage économique martiniquais.",
    date: "2024-03-14",
    readTime: "5 min",
    slug: "ia-martinique"
  },
  {
    image: "/images/blog/reunion-startup-ia.jpg",
    category: "Case Study",
    title: "Réunion : Success Story d'une startup IA",
    summary: "Une jeune entreprise réunionnaise révolutionne le traitement des données agricoles.",
    date: "2024-03-13",
    readTime: "8 min",
    slug: "reunion-startup-ia"
  }
];
