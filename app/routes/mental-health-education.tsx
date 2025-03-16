import { motion } from "framer-motion";
import { ArrowCircleRightRounded } from "~/ui/icons/ArrowCircleRightRounded";
import { IconArrowRight } from "~/ui/icons/ArrowRight";

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
      <div className="relative box flex justify-end mt-28">
        <div className="text-4xl text-white font-bold py-8 px-9 bg-teal-green absolute -top-16 left-0">
          MENTAL
          <br /> HEALTH
          <br /> EDUCATION
        </div>
        <img
          src="/public/projects/mental-health-education/hero-img.png"
          alt="one girl one box"
        />
      </div>

      <section className="mt-24">
        <h2 className=" heading-1 box">PROJECT OVERVIEW</h2>
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

        <div className="grid grid-cols-[622px_1fr] gap-24">
          <div>
            <p>
              By integrating mental health education into our community's
              fabric, we hope to:
            </p>

            <ul className="mt-6">
              <li className="mb-5 flex gap-2 items-center">
                <IconArrowRight />
                <p>Raise awareness about mental health issues</p>
              </li>
              <li className="mb-5 flex gap-2 items-center">
                <IconArrowRight />
                <p>Reduce stigma around mental illness</p>
              </li>
              <li className="mb-5 flex gap-2 items-center">
                <IconArrowRight />
                <p>
                  Equip young people with coping mechanisms and stress
                  management techniques
                </p>
              </li>
              <li className="mb-5 flex gap-2 items-center">
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
              className="absolute right-0 top-0"
            />
            <img
              src="/projects/one-girl-one-box/people-holding-pads.png"
              alt="ihelp afrika medical volunteer"
              className="absolute right-56 top-20"
            />
          </div>
        </div>
      </section>

      <section className="mt-11">
        <h2 className="text-6xl font-thin mb-5 heading-1 box">
          Join the Movement
        </h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <div className="box">
            <p>
              Together, we can break the silence surrounding mental health and
              create a more supportive and inclusive community for all.
            </p>
            <ArrowCircleRightRounded className="w-8 h-8 mt-3.5" />
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden">
        <h2 className="text-6xl font-thin mb-5 box">GALLLERY</h2>
        <div className="relative w-full overflow-x-auto whitespace-nowrap bg-yellow/15 py-4 no-scrollbar">
          <motion.div
            className="flex w-max gap-7"
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
          <div className="box grid grid-cols-3 gap-8">
            <div className="px-6 py-5 bg-bright-green">
              <img
                src="/public/projects/volunteer-project/medical-2.png"
                alt="ihelp afrika mentorship for adolescent girls"
                className="w-full h-auto"
              />
              <p className="w-3xs mt-3.5">
                Our third mentorship for adolescent girls
              </p>
              <div className="flex justify-between items-end mt-8">
                <p className="font-light text-sm w-32">
                  our mental health education
                </p>
                <p className="font-light text-sm">Feb 28, 2025</p>
              </div>
            </div>
            <div className="px-6 py-5 bg-bright-green">
              <img
                src="/public/projects/volunteer-project/medical-2.png"
                alt="ihelp afrika mentorship for adolescent girls"
                className="w-full h-auto"
              />
              <p className="w-3xs mt-3.5">
                Our third mentorship for adolescent girls
              </p>
              <div className="flex justify-between items-end mt-8">
                <p className="font-light text-sm w-32">
                  our mental health education
                </p>
                <p className="font-light text-sm">Feb 28, 2025</p>
              </div>
            </div>
            <div className="px-6 py-5 bg-bright-green">
              <img
                src="/public/projects/volunteer-project/medical-2.png"
                alt="ihelp afrika mentorship for adolescent girls"
                className="w-full h-auto"
              />
              <p className="w-3xs mt-3.5">
                Our third mentorship for adolescent girls
              </p>
              <div className="flex justify-between items-end mt-8">
                <p className="font-light text-sm w-32">
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
