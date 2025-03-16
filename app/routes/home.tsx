import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ihelp Afrika" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="flex justify-between mt-10  w-[1245px] mx-auto">
        <div className="h-116 w-93 flex items-center text-5xl justify-center bg-yellow font-bold text-white">
          ONE GIRL
          <br /> ONE BOX
          <br /> PROJECT
        </div>
        <div className="h-116 w-93 flex items-center text-5xl justify-center bg-teal-green font-bold text-white">
          OUR
          <br /> VOLUNTEER/
          <br /> MEDICAL
          <br /> PLACEMENT <br />
          PROGRAM
        </div>
        <div className="h-116 w-93 flex items-center text-5xl justify-center bg-bright-green font-bold text-white">
          MENTAL
          <br /> HEALTH
          <br /> EDUCATION
        </div>
      </div>
      <img
        className="mt-20 w-full h-auto"
        src="/home/girls-holding-pads.png"
        alt="girls holding menstrual pads"
      />
      <section className="mt-20">
        <h2 className="text-6xl font-thin mb-5 w-[1245px] mx-auto">ABOUT US</h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="w-[1245px] mx-auto text-xl font-normal">
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

        <div className="grid grid-cols-[auto_1fr] mt-10 gap-0 w-[1245px] mx-auto">
          <img
            src="/home/women-playing-with-child.png"
            alt="women playing with a child"
          />
          <div className="h-86 bg-yellow self-center text-center px-8 flex flex-col items-center justify-center">
            <h3 className="text-4xl mb-5 font-thin">Our mission</h3>
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

        <div className="grid grid-cols-[1fr_auto] mt-10 gap-0 w-[1245px] mx-auto">
          <div className="h-86 bg-bright-green self-center text-center px-8 pt-2 flex flex-col items-center justify-center">
            <h3 className="text-4xl mb-5 font-thin">Our vision</h3>
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
        <h2 className="text-6xl font-thin mb-5 w-[1245px] mx-auto">
          OUR APPROACH
        </h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="w-[1245px] mx-auto text-xl font-normal">
            We achieve our goals through advocacy, partnerships, and
            community-based interventions, focusing on education, guidance,
            counseling, and healthcare.
          </p>
        </div>
      </section>

      <section className="mt-10 w-[1245px] mx-auto">
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

      <section className="mt-10 w-[1245px] mx-auto">
        <h2 className="text-6xl font-thin mb-5 ">OUR PARTNERS</h2>
        <div className="pt-5 flex gap-19 items-center">
          <img src="/home/Lund-uni-logo.png" alt="lund university" />
          <img src="/home/right-2-smile-logo.png" alt="right to smile" />
        </div>
      </section>
    </div>
  );
}
