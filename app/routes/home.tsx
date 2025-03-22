import Partners from "~/components/home/partners";
import type { Route } from "../+types/root";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ihelp Afrika" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="justify-between gap-16 grid grid-cols-3 mt-10 box">
        <Link
          to="our-projects/one-girl-one-box"
          className="flex justify-center items-center bg-yellow w-93 h-116 font-bold text-white text-5xl"
        >
          ONE GIRL
          <br /> ONE BOX
          <br /> PROJECT
        </Link>
        <Link
          to="our-projects/volunteer-medical-placement"
          className="flex justify-center items-center bg-teal-green w-93 h-116 font-bold text-white text-5xl"
        >
          OUR
          <br /> VOLUNTEER/
          <br /> MEDICAL
          <br /> PLACEMENT <br />
          PROGRAM
        </Link>
        <Link
          to="our-projects/mental-health-education"
          className="flex justify-center items-center bg-bright-green w-93 h-116 font-bold text-white text-5xl"
        >
          MENTAL
          <br /> HEALTH
          <br /> EDUCATION
        </Link>
      </div>
      <img
        className="mt-20 w-full h-auto"
        src="/home/girls-holding-pads.png"
        alt="girls holding menstrual pads"
      />
      <section className="mt-20">
        <h2 className="mb-5 font-thin text-6xl box">ABOUT US</h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="font-normal text-xl box">
            iHelp Africa is a Ghanaian voluntary, non-governmental, and
            non-profit organization dedicated to enhancing the lives of
            individuals in rural Ghana. Our mission is to create a supportive
            environment for vulnerable individuals, empower children in rural
            and underserved communities to achieve success, reshape the futures
            of adolescent mothers and young boys who are out of school, and
            offer economic development support to women through skills training
            <br />
            <br />
            Established in May 2015 and officially registered in March 2016, our
            foundation is led by a passionate and dedicated team of young
            individuals. We are driven by a strong commitment to making a
            positive impact through education, skills training, counseling,
            healthcare, rehabilitation, and more. Our goal is to provide
            assistance, no matter how small, to young individuals, adolescents,
            and women who only need a little help to transform their lives and
            those of their communities.
            <br />
            <br />
            At iHelp Africa Foundation, we strive to achieve our objectives
            through advocacy and collaboration with other organizations and
            government institutions. Together, we work towards meaningful
            interventions in areas such as education, guidance, counseling, and
            other forms of assistance to uplift vulnerable segments of our
            society.
          </p>
        </div>

        <div className="gap-0 grid grid-cols-[auto_1fr] mt-10 box">
          <img
            src="/home/women-playing-with-child.png"
            alt="women playing with a child"
          />
          <div className="flex flex-col justify-center items-center self-center bg-yellow px-8 h-86 text-center">
            <h3 className="mb-5 font-thin text-4xl">Our mission</h3>
            <p className="text-xl">
              Our mission is to support the vulnerable in our society, including
              children, teenagers (including teenage mothers and substance
              addicts), and women. We provide them with a platform to become
              responsible individuals, create an enabling environment for them
              to realize their full potential, and guide them toward a brighter
              future through education, skills training, and counseling,
              ultimately enhancing their quality of life.
            </p>
          </div>
        </div>

        <div className="gap-0 grid grid-cols-[1fr_auto] mt-10 box">
          <div className="flex flex-col justify-center items-center self-center bg-bright-green px-8 pt-2 h-86 text-center">
            <h3 className="mb-5 font-thin text-4xl">Our vision</h3>
            <p className="text-xl">
              Our vision is to become a well-known nonprofit that helps
              children, young people, and women all around the world through
              partnerships and advocacy.
            </p>
          </div>

          <img
            src="/home/school-girl-smiling.png"
            alt="a school girl smiling"
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-5 font-thin text-6xl box">OUR APPROACH</h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="font-normal text-xl box">
            We achieve our goals through advocacy, partnerships, and
            community-based interventions, focusing on education, guidance,
            counseling, and healthcare.
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
      <Partners />
    </div>
  );
}
