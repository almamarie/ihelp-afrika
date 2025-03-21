import { DUMMY_ARTICLES } from "utils/articles";
import ArticleCard3 from "./article-cards/article-card-3";

const PopulatArticles = (props: { className?: string }) => {
  const articles = DUMMY_ARTICLES.slice(0, 4);

  // const articles = [
  //   {
  //     articleImg: "/blog/popular-article.png",
  //     title: "SRH Education",
  //     description:
  //       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },

  //   {
  //     articleImg: "/blog/popular-article.png",
  //     title: "SRH Education",
  //     description:
  //       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     articleImg: "/blog/popular-article.png",
  //     title: "SRH Education",
  //     description:
  //       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     articleImg: "/blog/popular-article.png",
  //     title: "SRH Education",
  //     description:
  //       "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  // ];
  return (
    <ul>
      {articles.map((article, index) => {
        // const parsedArticle = {
        //   image: article.articleImg,
        //   title: article.title,
        //   description: article.description,
        // };
        return <ArticleCard3 key={index} article={article} />;
      })}
    </ul>
  );
};

export default PopulatArticles;
