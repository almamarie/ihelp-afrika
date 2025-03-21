import { Fragment } from "react";
import { DUMMY_ARTICLES } from "utils/articles";
import ArticleCard1 from "~/components/blog/article-cards/article-card-1";
import ArticleCard2 from "~/components/blog/article-cards/article-card-2";

const Blog = () => {
  return (
    <Fragment>
      <div className="flex justify-between">
        <ArticleCard1 article={DUMMY_ARTICLES[0]} />
        <ArticleCard1 article={DUMMY_ARTICLES[4]} />
      </div>

      <div className="mt-6">
        <h2 className="mb-5 font-light text-4xl">Latest Articles</h2>
        <ul className="px-7 py-6 border-[1px]">
          <li className="mb-5">
            <ArticleCard2 article={DUMMY_ARTICLES[0]} />
          </li>
          <li className="py-5 border-t-[1px] border-light-black">
            <ArticleCard2 article={DUMMY_ARTICLES[1]} />
          </li>
          <li className="pt-5 border-t-[1px] border-light-black">
            <ArticleCard2 article={DUMMY_ARTICLES[2]} />
          </li>
          <li className="mt-5 pt-5 border-t-[1px] border-light-black">
            <ArticleCard2 article={DUMMY_ARTICLES[3]} />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Blog;
