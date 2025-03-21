import React, { type FC } from "react";
import { Link } from "react-router";
import type { Article } from "types";

const ArticleCard3: FC<{ article: Article; className?: string }> = ({
  article,
  className,
}) => {
  return (
    <li>
      <Link
        className={`flex gap-4 py-3.5 items-center ${className}`}
        to={`/blog/${article.slug}`}
      >
        <img
          className="w-40 h-32 object-contain"
          src={article.articleImg}
          alt="ihelp afrika popular article"
        />
        <div>
          <h5 className="font-medium text-sm line-clamp-1">{article.title}</h5>
          <p className="w-full overflow-hidden font-light text-xs line-clamp-5">
            {article.description}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard3;
