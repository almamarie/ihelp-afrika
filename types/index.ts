export type ArticleShort = {
  image: string;
  title: string;
  description: string;
};

export type Article = {
  slug: string;
  id: string;
  title: string;
  date: string;
  articleImg: string;
  writtenBy: {
    name: string;
    img: string;
  };
  content: string[];
  description: string;
};
