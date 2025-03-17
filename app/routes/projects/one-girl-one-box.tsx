import React from "react";
import { motion } from "framer-motion";
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
        <p className="-top-4 left-20 z-20 absolute bg-yellow px-9 pt-8 pb-10 font-bold text-4xl">
          ONE GIRL
          <br /> ONE BOX
          <br /> PROJECT
        </p>
        <div className="-top-4 -right-7 absolute bg-yellow w-5xl h-96"></div>
        <img
          src="/projects/one-girl-one-box/hero-img.png"
          alt="one girl one box"
          className="z-10 w-5xl h-96"
        />
      </div>

      <section className="mt-24">
        <h2 className="heading-1 box">PROJECT OVERVIEW</h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="box">
            In rural Ghana, many girls miss school due to lack of access to
            menstrual hygiene products. To address this issue, iHelp Afrika
            launched the One Girl, One Box project, focusing on educating girls
            about menstrual hygiene and providing them with sanitary kits.
            <br />
          </p>

          <h2 className="my-4 heading-2 box">Breaking the silence</h2>
          <div className="">
            <p className="box">
              Our project goes beyond providing sanitary kits. We educate
              communities about menstrual hygiene, making conversations about it
              more popular and acceptable. By doing so, we give girls the
              freedom to discuss and educate each other about menstrual and
              sexual reproductive health.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="mt-11 box">
        <h2 className="mb-5 heading-1">
          Empowering Girls, Enhancing Communities
        </h2>

        <div className="gap-24 grid grid-cols-[622px_1fr]">
          <div>
            <p>The One Girl, One Box project aims to:</p>

            <ul className="mt-6">
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>Improve girls' attendance and participation in school</p>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>Enhance menstrual hygiene practices</p>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>
                  Promote economic empowerment through reusable sanitary kits
                </p>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <IconArrowRight />
                <p>
                  Foster open conversations about menstrual and sexual
                  reproductive health
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

        <p className="inline-block bg-yellow mt-20 px-20 py-3 font-light text-3xl">
          Join us in empowering girls and <br />
          enhancing communities!
        </p>
      </section>

      <section className="mt-11">
        <h2 className="mb-5 font-thin text-6xl heading-1 box">OUR APPROACH</h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="box">
            In partnership with Right2Smile, we've introduced a new approach:
            training girls in schools and communities to sew reusable sanitary
            kits. This initiative promotes sustainability, economic empowerment,
            and community engagement.
          </p>
        </div>
      </section>

      <section className="mt-10 box">
        <h2 className="mb-5 font-thin text-6xl">OUR IMPACT</h2>
        <div className="flex items-center gap-19 pt-5">
          <p className="font-thin text-4xl">
            Reached <strong>200</strong>
            <br /> Communities
          </p>
          <p className="bg-yellow/15 px-9 py-3 font-thin text-4xl">
            Distributed <strong>20,000</strong>
            <br /> Sanitary pads
          </p>
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
