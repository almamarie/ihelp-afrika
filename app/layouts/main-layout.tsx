import { Link, NavLink, Outlet, type NavLinkRenderProps } from "react-router";

const getNavClass = (props: NavLinkRenderProps) => {
  return [
    "px-2 border-b-4 border-transparent hover:border-teal-green/80 ",
    props.isActive ? "border-teal-green" : "",
  ].join();
};
const MainLayout = () => {
  return (
    <div>
      <div className="w-[1245px] mx-auto">
        <div className="bg-yellow h-2 mt-6"></div>
        <header>
          <nav className="flex justify-center gap-16 mt-5">
            <div className="relative group">
              <div className="px-2 cursor-pointer">Our Projects</div>
              <div className="absolute hidden w-35 p-3 flex-col gap-2 bg-bright-green/10 ml-2 group-hover:flex">
                <Link
                  className="text-xs font-light border-b-[0.5px] border-black/20 pb-1.5"
                  to="/our-projects/one-girl-one-box"
                >
                  One Girl One Box Project
                </Link>
                <Link
                  className="text-xs font-light border-b-[0.5px] border-black/20 pb-1.5"
                  to="/our-projects/volunteer-medical-placement"
                >
                  Our Volunteer/ Medical Placement Program
                </Link>
                <Link
                  className="text-xs font-light border-b-[0.5px] border-black/20 pb-1.5"
                  to="/our-projects/mental-health-education"
                >
                  Mental Health Education
                </Link>
              </div>
            </div>
            <NavLink className={(props) => getNavClass(props)} to="/our-blog">
              Our Blog
            </NavLink>
            <NavLink
              className={(props) => getNavClass(props)}
              to="/get-involved"
            >
              Get involved
            </NavLink>
            <NavLink className={(props) => getNavClass(props)} to="/our-team">
              Our team
            </NavLink>
            <NavLink className={(props) => getNavClass(props)} to="/contact-us">
              Contact Us
            </NavLink>
          </nav>
        </header>

        <div className="flex justify-between">
          <img src="/logo.png" alt="ihelp afrika" />
          <h1 className="mt-9 text-6xl font-bold pr-44 text-center">
            HELPING
            <br />
            HEALING
            <br />
            CARING
            <br />
          </h1>
          <div></div>
        </div>
      </div>
      <Outlet />

      <footer className="pb-25">
        <div className="bg-yellow ">
          <h2 className="text-6xl font-thin mb-5 w-[1245px] mx-auto py-4">
            CONTACT US
          </h2>
        </div>
        <div className="flex gap-47 w-[1245px] mx-auto">
          <form className="w-107">
            <h4 className="text-4xl font-black">GET IN TOUCH</h4>

            <div className="flex flex-col gap-5">
              <div className="border-b-[1px] border-b-black grid grid-cols-[auto_1fr] mt-15">
                <label className="mr-2 font-thin text-2xl" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-auto focus:outline-none "
                  id="name"
                  type="text"
                />
              </div>
              <div className="border-b-[1px] border-b-black grid grid-cols-[auto_1fr] mt-15">
                <label className="mr-2 font-thin text-2xl" htmlFor="email">
                  Email:
                </label>
                <input
                  className="w-auto focus:outline-none "
                  id="email"
                  type="text"
                />
              </div>

              <div className="border-b-[1px] border-b-black grid grid-cols-[auto_1fr] mt-15">
                <label className="mr-2 font-thin text-2xl" htmlFor="subject">
                  Subject:
                </label>
                <input
                  className="w-auto focus:outline-none "
                  id="subject"
                  type="text"
                />
              </div>

              <textarea
                className="h-40 w-full mr-2 font-thin placeholder:font-thin text-2xl focus:outline-none"
                placeholder="message"
                id="message"
              />

              <div className="border-b-[1px] border-b-black mt-15"></div>
              <button
                className="text-2xl font-bold mt-5 text-center"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <img
            className="self-start"
            src="/people-riding-bicycle.png"
            alt="people riding bicycles"
          />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
