import { motion } from "framer-motion";
import { ArrowCircleRightRounded } from "~/ui/icons/icon-arrow-circle-right-rounded";
import { IconArrowRight } from "~/ui/icons/icon-arrow-right";

const OneGirlOneBox = () => {
  const images = [
    "/projects/one-girl-one-box/gallery/img-1.png",
    "/projects/one-girl-one-box/gallery/img-2.png",
    "/projects/one-girl-one-box/gallery/img-3.png",
    "/projects/one-girl-one-box/gallery/img-4.png",
    "/projects/one-girl-one-box/gallery/img-1.png",
    "/projects/one-girl-one-box/gallery/img-2.png",
    "/projects/one-girl-one-box/gallery/img-3.png",
    "/projects/one-girl-one-box/gallery/img-4.png",
    "/projects/one-girl-one-box/gallery/img-1.png",
    "/projects/one-girl-one-box/gallery/img-2.png",
    "/projects/one-girl-one-box/gallery/img-3.png",
    "/projects/one-girl-one-box/gallery/img-4.png",
  ];
  return (
    <div>
      <div className="relative flex justify-end mt-28 box">
        <div className="-top-16 left-0 absolute bg-teal-green px-9 py-8 font-bold text-white text-4xl">
          MENTAL
          <br /> HEALTH
          <br /> EDUCATION
        </div>
        <img
          src="/projects/mental-health-education/hero-img.png"
          alt="one girl one box"
        />
      </div>

      <section className="mt-24">
        <h2 className="heading-1 box">PROJECT OVERVIEW</h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="box">
            Mental health education is a critical advocate for our community's
            well-being, yet it remains one of the most neglected aspects of our
            collective health. At iHelp Afrika, we recognize the urgency of this
            issue and have partnered with Right2Smile to bring mental health
            education to junior high schools.
            <br />
          </p>

          <h2 className="my-4 heading-2 box">Empowering Young Minds</h2>
          <div className="">
            <p className="box">
              Our education and mentorship initiative is facilitated by
              professional mental health workers from Malta, who volunteer their
              expertise through Right2Smile. Together, we aim to support the
              well-being of our community, particularly among young people, by
              providing them with the tools and resources needed to navigate
              mental health challenges.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="mt-11 box">
        <h2 className="mb-5 heading-1">
          Building a Supportive <br />
          Community
        </h2>

        <div className="gap-24 grid grid-cols-[622px_1fr]">
          <div>
            <p>
              By integrating mental health education into our community's
              fabric, we hope to:
            </p>

            <ul className="mt-6">
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>Raise awareness about mental health issues</p>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>Reduce stigma around mental illness</p>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>
                  Equip young people with coping mechanisms and stress
                  management techniques
                </p>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>
                  Foster a supportive community that encourages open
                  conversations about mental health
                </p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/projects/one-girl-one-box/man-talking-to-student.png"
              alt="ihelp afrika medical volunteer"
              className="top-0 right-0 absolute"
            />
            <img
              src="/projects/one-girl-one-box/people-holding-pads.png"
              alt="ihelp afrika medical volunteer"
              className="top-20 right-56 absolute"
            />
          </div>
        </div>
      </section>

      <section className="mt-11">
        <h2 className="mb-5 font-thin text-6xl heading-1 box">
          Join the Movement
        </h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <div className="box">
            <p>
              Together, we can break the silence surrounding mental health and
              create a more supportive and inclusive community for all.
            </p>
            <ArrowCircleRightRounded className="mt-3.5 w-8 h-8" />
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden">
        <h2 className="mb-5 font-thin text-6xl box">GALLLERY</h2>
        <div className="relative bg-yellow/15 py-4 w-full overflow-x-auto whitespace-nowrap no-scrollbar">
          <motion.div
            className="flex gap-7 w-max"
            initial={{ x: "0%" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          >
            {images.map((img, index) => (
              <img
                className="w-96 h-72"
                src={img}
                key={index}
                alt="ihelp-afrika gallery ${index}"
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt-11 mb-20">
        <h2 className="mb-5 heading-1 box">OUR BLOG</h2>

        <div className="bg-yellow/15 pt-5 pb-8">
          <div className="gap-8 grid grid-cols-3 box">
            <div className="bg-bright-green px-6 py-5">
              <img
                src="/projects/volunteer-placement/medical-2.png"
                alt="ihelp afrika mentorship for adolescent girls"
                className="w-full h-auto"
              />
              <p className="mt-3.5 w-3xs">
                Our third mentorship for adolescent girls
              </p>
              <div className="flex justify-between items-end mt-8">
                <p className="w-32 font-light text-sm">
                  our mental health education
                </p>
                <p className="font-light text-sm">Feb 28, 2025</p>
              </div>
            </div>
            <div className="bg-bright-green px-6 py-5">
              <img
                src="/projects/volunteer-placement/medical-2.png"
                alt="ihelp afrika mentorship for adolescent girls"
                className="w-full h-auto"
              />
              <p className="mt-3.5 w-3xs">
                Our third mentorship for adolescent girls
              </p>
              <div className="flex justify-between items-end mt-8">
                <p className="w-32 font-light text-sm">
                  our mental health education
                </p>
                <p className="font-light text-sm">Feb 28, 2025</p>
              </div>
            </div>
            <div className="bg-bright-green px-6 py-5">
              <img
                src="/projects/volunteer-placement/medical-2.png"
                alt="ihelp afrika mentorship for adolescent girls"
                className="w-full h-auto"
              />
              <p className="mt-3.5 w-3xs">
                Our third mentorship for adolescent girls
              </p>
              <div className="flex justify-between items-end mt-8">
                <p className="w-32 font-light text-sm">
                  our mental health education
                </p>
                <p className="font-light text-sm">Feb 28, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneGirlOneBox;
