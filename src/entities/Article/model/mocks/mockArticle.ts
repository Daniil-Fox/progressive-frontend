import { Article, ArticleBlockType, ArticleType } from "./../types/article";

const mockUser = {
  id: "1",
  username: "admin",
  avatar:
    "https://img.magnific.com/free-vector/cute-astronaut-playing-vr-game-with-controller-cartoon-vector-icon-illustration-science-technology_138676-13977.jpg?semt=ais_hybrid&w=740&q=80",
};

const mockTextBlock = {
  id: "1",
  type: ArticleBlockType.TEXT as const,
  title: "Заголовок этого блока",
  paragraphs: [
    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js.",
  ],
};

export const mockArticle: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: mockUser,
  type: [ArticleType.IT],
  blocks: [
    mockTextBlock,
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
    {
      id: "3",
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\nconst server = jsonServer.create();",
    },
  ],
};

export const mockArticles: Article[] = [
  mockArticle,
  {
    ...mockArticle,
    id: "2",
    title: "Python news",
    img: "https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg",
    createdAt: "22.02.2025",
    blocks: [mockTextBlock],
  },
  {
    ...mockArticle,
    id: "3",
    title: "Kotlin news",
    img: "https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png",
    blocks: [mockTextBlock],
  },
];
