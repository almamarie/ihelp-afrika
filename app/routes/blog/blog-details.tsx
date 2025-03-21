import React from "react";
import {
  isRouteErrorResponse,
  useRouteError,
  useSearchParams,
} from "react-router";
import type { Article } from "types";
import ArticleCard1 from "~/components/blog/article-cards/article-card-1";
import { IconAccountCircle } from "~/ui/icons/icon-account-circle";
import type { Route } from "../+types/home";
import { DUMMY_ARTICLES } from "utils/articles";

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;
  const article: Article | undefined = DUMMY_ARTICLES.find(
    (art) => art.slug === slug
  );
  console.log("Artilce: ", article);
  if (!article) {
    throw new Error("Article not found");
  }

  return article;
}

export function ErrorBoundary() {
  return (
    <div>
      <h1>Error Finding Article</h1>
      <p>The requested article was not found.</p>
    </div>
  );
}

const BlogDetails = ({ loaderData }: Route.ComponentProps) => {
  if (!loaderData) {
    throw new Error("Article not found");
  }
  const article: Article = loaderData;

  return (
    <div>
      <img
        className="w-full h-auto"
        src={article.articleImg}
        alt={`ihelp Afrika ${article.title}`}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          {article.writtenBy.img && (
            <img src={article.writtenBy.img} className="rounded-full w-5 h-5" />
          )}
          {!article.writtenBy.img && <IconAccountCircle className="w-5 h-5" />}
          <p className="font-light text-sm">{article.writtenBy.name}</p>
        </div>
        <p className="font-light text-sm">{article.date}</p>
      </div>

      <h3 className="mt-4 font-normal text-2xl">{article.title}</h3>

      <ul className="space-y-3 mt-2">
        {article.content.map((paragraph, index) => (
          <li key={index}>
            <p className="font-light text-sm">{paragraph}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <div className="flex justify-between">
          <ArticleCard1 article={DUMMY_ARTICLES[5]} />
          <ArticleCard1 article={DUMMY_ARTICLES[2]} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
