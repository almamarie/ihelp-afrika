import React from "react";
import { IconArrowRight } from "~/ui/icons/icon-arrow-right";
import IconContribute from "~/ui/icons/icon-contribute";
import IconCulture from "~/ui/icons/icon-culture";
import IconExperience from "~/ui/icons/icon-experience";
import IconPeople from "~/ui/icons/icon-people";

const MedicalPlacementAndVolunteer = () => {
  return (
    <div>
      <section className="gap-20 grid grid-cols-2 mt-10 box">
        <div className="">
          <h1 className="font-bold text-bright-green text-5xl">
            Medical Placement & Volunteer Program with iHelp Afrika
          </h1>
          <p className="mt-5 font-light text-xl">
            At iHelp Afrika, we are committed to transforming lives through
            education, health, and community empowerment. Our Medical Placement
            Program and Volunteer Opportunities provide a platform for both
            medical students and skilled professionals to contribute
            meaningfully to rural healthcare and education in Ghana.
          </p>
        </div>
        <img
          src="/projects/volunteer-project/hero-img.png"
          alt="ihelp afrika"
        />
      </section>

      <section className="box">
        <h1 className="mt-11 heading-1">Medical Placement Program </h1>
        <div className="items-center gap-20 grid grid-cols-2 mt-10">
          <div className="bg-yellow/15 px-12 pt-6 pb-12">
            <div className="flex items-center gap-1">
              <IconArrowRight className="w-8 h-8 text-xl" />
              <p> For Final-Year Medical Students</p>
            </div>
            <p className="mt-8">
              Our Medical Placement Program is designed for final-year medical
              students looking to gain hands-on clinical experience while making
              a difference in underserved communities. Participants will be
              placed in rural hospitals and clinics, where they will work
              alongside local healthcare professionals to:
            </p>

            <ul className="space-y-3 mt-7">
              <li className="flex items-center gap-2">
                <IconArrowRight />
                <p>Provide primary healthcare services to rural populations</p>
              </li>
              <li className="flex items-center gap-2">
                <IconArrowRight />
                <p>
                  Gain exposure to tropical diseases, maternal health, and
                  emergency care
                </p>
              </li>
              <li className="flex items-center gap-2">
                <IconArrowRight />
                <p>Participate in community health outreach programs</p>
              </li>
              <li className="flex items-center gap-2">
                <IconArrowRight />
                <p>Develop cross-cultural medical competence</p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="heading-1">Keynote</h1>
            <p>
              This placement is a unique opportunity for medical students to
              enhance their clinical skills, learn from experienced local
              doctors, and understand the realities of rural healthcare systems.
            </p>

            <button className="bg-bright-green px-9 py-3.5 text-light text-4xl">
              Click to Participate
            </button>
          </div>
        </div>
      </section>

      <section className="mt-10 box">
        <h1 className="heading-1">Volunteer Programs</h1>

        <div className="flex mt-11">
          <IconArrowRight className="w-8 h-8 text-xl" />
          <div className="flex flex-col gap-1 mt-1">
            <p> For Skilled Professionals</p>
            <p className="mt-5 font-light text-[16]">
              For professionals and skilled individuals passionate about making
              a change, we offer volunteer opportunities in our ongoing
              community projects:
            </p>
          </div>
        </div>

        <div className="gap-6 grid grid-cols-2 mt-5 box">
          <div>
            <div className="bg-yellow/15 px-12 pt-6 pb-12 font-light">
              <p className="font-normal"> Mental Health Education</p>

              <p className="mt-8">
                Mental health remains one of the most overlooked aspects of
                healthcare in rural Ghana. Our Mental Health Education program,
                in collaboration with Right2Smile, focuses on:
              </p>

              <ul className="space-y-3 mt-7">
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>
                    Raising awareness and reducing stigma around mental health
                  </p>
                </li>
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>
                    Training young people in stress management and coping
                    mechanisms
                  </p>
                </li>
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>Providing counseling and mentorship programs in schools</p>
                </li>
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>
                    Supporting mental health policy advocacy in rural
                    communities
                  </p>
                </li>
              </ul>
            </div>
            <p className="mt-5">
              We welcome mental health professionals, counselors, psychologists,
              and social workers who want to contribute to breaking the silence
              on mental health.
            </p>
          </div>

          <div>
            <div className="bg-light-yellow/15 px-12 pt-6 pb-12 font-light">
              <p className="font-normal">
                Sexual and Reproductive Health (SRH) Education
              </p>

              <p className="mt-8">
                Through our One Girl, One Box Project, we are working to improve
                menstrual hygiene and sexual health education for young girls in
                rural Ghana. Volunteers can support by:
              </p>

              <ul className="space-y-3 mt-7">
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>Conducting SRH education sessions in schools</p>
                </li>
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>Training girls to make reusable sanitary kits</p>
                </li>
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>
                    Providing mentorship on personal hygiene and reproductive
                    health
                  </p>
                </li>
                <li className="flex gap-2">
                  <IconArrowRight />
                  <p>
                    Engaging in community outreach to promote menstrual health
                    awareness
                  </p>
                </li>
              </ul>
            </div>
            <p className="mt-5">
              Ideal volunteers include health educators, nurses, midwives, and
              community health workers who are passionate about empowering young
              girls.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-11">
        <div className="box">
          <h1 className="heading-1">Why Choose us</h1>
          <p className="mt-5 max-w-2xl font-light text-lg">
            By participating in our Medical Placement Program or volunteering in
            our community projects, you will:
          </p>
        </div>

        <div className="bg-bright-green/15 mt-5 py-10">
          <ul className="justify-between grid grid-cols-4 box">
            <li>
              <IconExperience />
              <h2 className="mt-4 font-light text-3xl">
                Real-World <br />
                Experience
              </h2>
              <p className="mt-2.5 max-w-2xs font-light text-lg">
                Gain real-world experience in rural healthcare and education
              </p>
            </li>

            <li>
              <IconContribute />
              <h2 className="mt-4 font-light text-3xl">
                Contribute
                <br /> to lives
              </h2>
              <p className="mt-2.5 max-w-2xs font-light text-lg">
                Contribute to improving lives in underserved communities
              </p>
            </li>

            <li>
              <IconPeople />
              <h2 className="mt-4 font-light text-3xl">
                Work with a<br /> Team
              </h2>
              <p className="mt-2.5 max-w-2xs font-light text-lg">
                Work with a passionate team dedicated to social impact
              </p>
            </li>

            <li>
              <IconCulture />
              <h2 className="mt-4 font-light text-3xl">
                Learn Ghanaian <br />
                Culture
              </h2>
              <p className="mt-2.5 max-w-2xs font-light text-lg">
                Immerse yourself in Ghanaian culture and traditions
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-11 box">
        <h1 className="heading-1">Be Part of the Change!</h1>

        <p className="mt-4">
          Whether you're a medical student seeking practical experience or a
          professional looking to make a difference, iHelp Afrika welcomes you.
          Join us in empowering lives and transforming communities in rural
          Ghana.
        </p>
        <div className="items-center gap-7 grid grid-cols-2 mt-8 mb-10">
          <p className="font-medium text-xl">
            For more details on how to apply, reach out to us today!
          </p>
          <button className="bg-yellow py-3.5 font-light text-4xl cursor-pointer">
            Click to Volunteer
          </button>
        </div>
      </section>
    </div>
  );
};

export default MedicalPlacementAndVolunteer;
