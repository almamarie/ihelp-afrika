import React from "react";
import { motion } from "framer-motion";
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
        <p className="absolute text-4xl font-bold px-9 pt-8 pb-10 -top-4 left-20 z-20 bg-yellow">
          ONE GIRL
          <br /> ONE BOX
          <br /> PROJECT
        </p>
        <div className="absolute -top-4 -right-7 w-5xl h-96 bg-yellow"></div>
        <img
          src="/projects/one-girl-one-box/hero-img.png"
          alt="one girl one box"
          className="w-5xl h-96 z-10"
        />
      </div>

      <section className="mt-24">
        <h2 className=" heading-1 box">PROJECT OVERVIEW</h2>
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

        <div className="grid grid-cols-[622px_1fr] gap-24">
          <div>
            <p>The One Girl, One Box project aims to:</p>

            <ul className="mt-6">
              <li className="mb-5 flex gap-2 items-center">
                <IconArrowRight />
                <p>Improve girls' attendance and participation in school</p>
              </li>
              <li className="mb-5 flex gap-2 items-center">
                <IconArrowRight />
                <p>Enhance menstrual hygiene practices</p>
              </li>
              <li className="mb-5 flex gap-2 items-center">
                <IconArrowRight />
                <p>
                  Promote economic empowerment through reusable sanitary kits
                </p>
              </li>
              <li className="mb-5 flex gap-2 items-center">
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
              className="absolute right-0 top-0"
            />
            <img
              src="/projects/one-girl-one-box/people-holding-pads.png"
              alt="ihelp afrika medical volunteer"
              className="absolute right-56 top-20"
            />
          </div>
        </div>

        <p className="mt-20 py-3 px-20 text-3xl font-light bg-yellow inline-block">
          Join us in empowering girls and <br />
          enhancing communities!
        </p>
      </section>

      <section className="mt-11">
        <h2 className="text-6xl font-thin mb-5 heading-1 box">OUR APPROACH</h2>
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
        <h2 className="text-6xl font-thin mb-5 ">OUR IMPACT</h2>
        <div className="pt-5 flex gap-19 items-center">
          <p className="text-4xl font-thin">
            Reached <strong>200</strong>
            <br /> Communities
          </p>
          <p className="text-4xl font-thin py-3 px-9 bg-yellow/15">
            Distributed <strong>20,000</strong>
            <br /> Sanitary pads
          </p>
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
