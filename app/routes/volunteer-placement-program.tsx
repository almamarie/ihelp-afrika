import { Link } from "react-router";

const VolunteerPlacementProgram = () => {
  return (
    <div>
      <div className="relative box flex justify-end mt-28">
        <div className="text-4xl text-white font-bold py-8 px-9 bg-teal-green absolute -top-16 left-0">
          OUR <br />
          VOLUNTEER/
          <br /> MEDICAL
          <br /> PLACEMENT
          <br /> PROGRAM
        </div>
        <img
          src="/projects/volunteer-project/a-girl-smiling.png"
          alt="one girl one box"
        />
      </div>

      <section className="mt-11">
        <h2 className="text-6xl font-thin mb-5 heading-1 box">
          PROJECT OVERVIEW
        </h2>
        <div className="bg-yellow/15 pt-5 pb-8">
          <p className="box">
            At iHelp Afrika, we are committed to transforming lives through
            education, health, and community empowerment. Our Medical Placement
            Program and Volunteer Opportunities provide a platform for both
            medical students and skilled professionals to contribute
            meaningfully to rural healthcare and education in Ghana.
          </p>
        </div>
      </section>

      <section className="mt-11 box">
        <h2 className="text-6xl font-thin mb-5 heading-1">
          The Medical Placement Program
        </h2>

        <div className="grid grid-cols-[622px_1fr] gap-24">
          <div>
            <p>
              Our Medical Placement Program is designed for final-year medical
              students looking to gain hands-on clinical experience while making
              a difference in underserved communities. Participants will be
              placed in rural hospitals and clinics, where they will work
              alongside local healthcare professionals to:
            </p>

            <ul className="pl-11 mt-6">
              <li className="mb-5">
                Provide primary healthcare services to rural populations
              </li>
              <li className="mb-5">
                Gain exposure to tropical diseases, maternal health, and
                emergency care
              </li>
              <li className="mb-5">
                Participate in community health outreach programs
              </li>
              <li className="mb-5">
                Develop cross-cultural medical competence
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/projects/volunteer-project/medical-1.png"
              alt="ihelp afrika medical volunteer"
              className="absolute right-0 top-0"
            />
            <img
              src="/projects/volunteer-project/medical-2.png"
              alt="ihelp afrika medical volunteer"
              className="absolute right-56 top-20"
            />
          </div>
        </div>
      </section>

      <section className="mt-11 box">
        <h2 className="text-6xl font-thin mb-5 heading-1">
          Volunteer Programs
        </h2>

        <div className="grid grid-cols-[auto_auto] justify-between">
          <div className="text-right">
            <div className="px-11 h-20 flex items-center mx-auto text-3xl bg-bright-green text-left">
              Mental Health Education
            </div>
            <Link className="font-thin text-xl" to="mental-health-education">
              read more
            </Link>
          </div>
          <div className="text-right">
            <div className="px-11 h-20 flex items-center mx-auto text-3xl bg-yellow text-left">
              Sexual & Reproductive Health (SRH) <br />
              Education
            </div>
            <Link className="font-thin text-xl" to="mental-health-education">
              read more
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-11 mb-20">
        <h2 className="text-6xl font-thin mb-5 heading-1 box">OUR BLOG</h2>

        <div className="bg-yellow/15 pt-5 pb-8">
          <div className="box grid grid-cols-3 gap-8">
            <div className="px-6 py-5 bg-bright-green">
              <img
                src="/projects/volunteer-project/medical-2.png"
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
                src="/projects/volunteer-project/medical-2.png"
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
                src="/projects/volunteer-project/medical-2.png"
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

export default VolunteerPlacementProgram;
