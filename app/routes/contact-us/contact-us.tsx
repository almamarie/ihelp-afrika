import { Fragment } from "react/jsx-runtime";

const ContactUs = () => {
  return (
    <Fragment>
      <section className="relative mt-15 w-full h-[446px]">
        <img
          className="w-full h-full"
          src="/contact-us/hero-img.png"
          alt="ihelp afrika blog"
        />
        <div className="bottom-10 left-[50%] z-20 absolute flex w-[1245px] -translate-[50%]">
          <h1 className="bg-bright-green px-7 py-3 w-auto font-normal text-6xl">
            CONTACT US
          </h1>
        </div>
      </section>

      <section className="gap-20 grid grid-cols-2 mt-20 ml-24">
        <form>
          <h2 className="heading-1">We Take Pride In Your Contribution</h2>
          <div className="flex flex-col space-y-8 mt-14">
            <div className="flex flex-col">
              <label className="font-normal text-3xl">first name</label>
              <input
                className="mt-3 border-[1px] border-black/20 h-24"
                type="text"
                name="firstName"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-normal text-3xl">last name</label>
              <input
                className="mt-3 border-[1px] border-black/20 h-24"
                type="text"
                name="lastName"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-normal text-3xl">email</label>
              <input
                className="mt-3 border-[1px] border-black/20 h-24"
                type="text"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-normal text-3xl">message</label>
              <textarea
                className="mt-3 border-[1px] border-black/20 h-64"
                name="firstName"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-bright-green mt-8 py-8 w-full text-3xl"
          >
            Send message
          </button>
        </form>
        <div className="bg-bright-green/15"></div>
      </section>
    </Fragment>
  );
};

export default ContactUs;
