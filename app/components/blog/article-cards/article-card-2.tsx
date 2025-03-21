import type { FC } from "react";
import { Link } from "react-router";
import type { Article } from "types";
import { IconAccountCircle } from "~/ui/icons/icon-account-circle";
import IconArrowRightLong from "~/ui/icons/icon-arrow-right-long";

const ArticleCard2: FC<{ article: Article }> = ({ article }) => {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="gap-5 grid grid-cols-[355px_1fr]"
    >
      <img
        src={article.articleImg}
        alt="ihelp-africa top article"
        className="w-80 h-60 object-contain"
      />
      <div className="">
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
      </div>
    </Link>
  );
};

export default ArticleCard2;
