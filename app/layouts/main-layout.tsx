import { Link, NavLink, Outlet, type NavLinkRenderProps } from "react-router";
import IconFacebook from "~/ui/icons/icon-facebook";
import { IconInstagram } from "~/ui/icons/icon-instagram";

const getNavClass = (props: NavLinkRenderProps) => {
  return [
    "px-2 border-b-4 border-transparent hover:border-teal-green/80 ",
    props.isActive ? "border-teal-green" : "",
  ].join();
};
const MainLayout = () => {
  return (
    <div>
      <div className="box">
        <div className="bg-yellow mt-6 h-2"></div>
        <header>
          <nav className="flex justify-center gap-16 mt-5">
            <NavLink className={getNavClass} to="/">
              About us
            </NavLink>
            <div className="group relative">
              <div className="px-2 cursor-pointer">Our Projects</div>
              <div className="hidden absolute group-hover:flex flex-col gap-2 bg-bright-green/10 ml-2 p-3 w-35">
                <Link
                  className="pb-1.5 border-b-[0.5px] border-black/20 font-light text-xs"
                  to="/our-projects/one-girl-one-box"
                >
                  One Girl One Box Project
                </Link>
                <Link
                  className="pb-1.5 border-b-[0.5px] border-black/20 font-light text-xs"
                  to="/our-projects/volunteer-medical-placement"
                >
                  Our Volunteer/ Medical Placement Program
                </Link>
                <Link
                  className="pb-1.5 border-b-[0.5px] border-black/20 font-light text-xs"
                  to="/our-projects/mental-health-education"
                >
                  Mental Health Education
                </Link>
              </div>
            </div>
            <NavLink className={getNavClass} to="/blog">
              Our Blog
            </NavLink>
            <NavLink className={getNavClass} to="/get-involved">
              Get involved
            </NavLink>
            <NavLink className={getNavClass} to="/our-team">
              Our team
            </NavLink>
            <NavLink className={getNavClass} to="/contact-us">
              Contact Us
            </NavLink>
          </nav>
        </header>

        <div className="flex justify-between">
          <img src="/logo.png" alt="ihelp afrika" />
          <h1 className="mt-9 pr-44 font-bold text-6xl text-center">
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
        <div className="bg-yellow">
          <h2 className="mb-5 py-4 font-thin text-6xl box">CONTACT US</h2>
        </div>
        <div className="flex gap-47 box">
          <form className="w-107">
            <h4 className="font-black text-4xl">GET IN TOUCH</h4>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-[auto_1fr] mt-15 border-b-[1px] border-b-black">
                <label className="mr-2 font-thin text-2xl" htmlFor="name">
                  Name:
                </label>
                <input
                  className="focus:outline-none w-auto"
                  id="name"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-[auto_1fr] mt-15 border-b-[1px] border-b-black">
                <label className="mr-2 font-thin text-2xl" htmlFor="email">
                  Email:
                </label>
                <input
                  className="focus:outline-none w-auto"
                  id="email"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-[auto_1fr] mt-15 border-b-[1px] border-b-black">
                <label className="mr-2 font-thin text-2xl" htmlFor="subject">
                  Subject:
                </label>
                <input
                  className="focus:outline-none w-auto"
                  id="subject"
                  type="text"
                />
              </div>

              <textarea
                className="mr-2 focus:outline-none w-full h-40 font-thin placeholder:font-thin text-2xl"
                placeholder="message"
                id="message"
              />

              <div className="mt-15 border-b-[1px] border-b-black"></div>
              <button
                className="mt-5 font-bold text-2xl text-center"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <div>
            <img
              className="self-start"
              src="/people-riding-bicycle.png"
              alt="people riding bicycles"
            />
            <p className="mt-7 text-xl">
              iHelpafrika Foundation
              <br /> P. O. Box YP 178
              <br /> Kpando, Volta Region, Ghana
            </p>

            <div className="flex justify-start gap-9 mt-5">
              <div className="flex items-center gap-1 text-xl">
                <IconFacebook />
                ihelpafrika
              </div>
              <div className="flex items-center gap-1 text-xl">
                <IconInstagram />
                ihelpafrika
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
