import type { FC } from "react";
import { Link } from "react-router";
import type { Article } from "types";
import { IconAccountCircle } from "~/ui/icons/icon-account-circle";
import IconArrowRightLong from "~/ui/icons/icon-arrow-right-long";

const ArticleCard1: FC<{ article: Article }> = ({ article }) => {
  return (
    <Link to={`/blog/${article.slug}`} className="w-80">
      <img
        className="w-80 h-72 object-contain"
        src={article.articleImg}
        alt="ihelp-africa top article"
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <IconAccountCircle className="w-5 h-5" />
          <p className="font-light text-sm">{article.writtenBy.name}</p>
        </div>
        <p className="font-light text-sm">{article.date}</p>
      </div>
      <h3 className="mt-3 font-normal text-lg">{article.title}</h3>
      <p className="font-light text-sm">{article.description}</p>
      <div className="flex items-center gap-2 mt-3">
        <p>Learn more</p>
        <IconArrowRightLong />
      </div>
    </Link>
  );
};

export default ArticleCard1;

// 355x293
