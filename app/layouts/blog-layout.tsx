import { Outlet } from "react-router";
import PopularArticle from "~/components/blog/popular-articles";

const BlogLayout = () => {
  return (
    <div className="mb-20">
      <section className="relative w-full h-[446px]">
        <img
          className="z-10 absolute w-full h-full"
          src="/blog/hero-img.png"
          alt="ihelp afrika blog"
        />
        <div className="z-20 absolute bg-bright-green/40 w-full h-full"></div>
        <div className="box">
          <div className="w-[590px]">
            <h1 className="pt-52 font-normal text-6xl">OUR BLOG</h1>
            <p className="font-light text-3xl">
              Stay updated with our latest stories from impactful projects.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 box">
        <h1 className="heading-1">Top Articles</h1>
        <div className="gap-14 grid grid-cols-3 mt-5">
          <div className="col-span-2">
            <Outlet />
            {/* <div className="bg-bright-green/15 mt-10 pt-3.5 pr-20 pb-8 pl-5">
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <IconAccountCircle className="w-5 h-5" />
                  <p className="font-light text-sm">John Doe</p>
                </div>
                <p className="font-light text-sm">February 28, 2025</p>
              </div>

              <p className="mt-3.5 font-light text-sm">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div> */}
          </div>
          <aside>
            <div className="px-5 py-4 border-[1px]">
              <h4 className="mb-3 font-light text-2xl">Categories</h4>
              <ul className="flex flex-wrap gap-5">
                <li className="bg-bright-green/15 px-5 py-3 font-semibold text-sm">
                  Volunteer
                </li>
                <li className="bg-bright-green/15 px-5 py-3 font-semibold text-sm">
                  Mental Health Program
                </li>
                <li className="bg-bright-green/15 px-5 py-3 font-semibold text-sm">
                  The Girl Child in Ghana
                </li>
                <li className="bg-bright-green/15 px-5 py-3 font-semibold text-sm">
                  Mentral Education
                </li>
                <li className="bg-bright-green/15 px-5 py-3 font-semibold text-sm">
                  SRH Education
                </li>
                <li className="bg-bright-green/15 px-5 py-3 font-semibold text-sm">
                  The Medical Placement Program
                </li>
              </ul>
            </div>

            <div className="mt-6 px-5 py-4 border-[1px]">
              <h4 className="mb-3 font-light text-2xl">Popular Articles</h4>
              <PopularArticle />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogLayout;
