import { IconAccountCircle } from "~/ui/icons/icon-account-circle";
import IconArrowRightLong from "~/ui/icons/icon-arrow-right-long";

const LatestArticles = () => {
  return (
    <div className="gap-5 grid grid-cols-[355px_1fr]">
      <img
        src="/blog/top-article.png"
        alt="ihelp-africa top article"
        className="w-[355px] h-[241px]"
      />
      <div className="">
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <IconAccountCircle className="w-5 h-5" />
            <p className="font-light text-sm">John Doe</p>
          </div>
          <p className="font-light text-sm">February 28, 2025</p>
        </div>
        <h3 className="mt-3 font-normal text-lg">
          The Girl Child and Mentrals
        </h3>
        <p className="font-light text-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <p>Learn more</p>
          <IconArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
