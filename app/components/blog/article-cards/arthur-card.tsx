import React, { type FC } from "react";
import type { Article } from "types";
import { IconAccountCircle } from "~/ui/icons/icon-account-circle";

const ArthurCard: FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-bright-green/15 mt-10 pt-3.5 pr-20 pb-8 pl-5">
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <IconAccountCircle className="w-5 h-5" />
          <p className="font-light text-sm">{article.writtenBy.name}</p>
        </div>
        <p className="font-light text-sm">{article.date}</p>
      </div>

      <p className="mt-3.5 font-light text-sm">{article.description}</p>
    </div>
  );
};

export default ArthurCard;
