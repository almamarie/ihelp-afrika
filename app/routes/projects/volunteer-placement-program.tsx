import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

const VolunteerPlacementProgram = () => {
  return (
      <Fragment>
          <div className="relative flex justify-end mt-28 box">
              <div className="-top-16 left-0 absolute bg-teal-green px-9 py-8 font-bold text-white text-4xl">
                  OUR <br />
                  VOLUNTEER/
                  <br /> MEDICAL
                  <br /> PLACEMENT
                  <br /> PROGRAM
              </div>
              <img src="/projects/volunteer-placement/a-girl-smiling.png" alt="one girl one box" />
          </div>

          <section className="mt-11">
              <h2 className="mb-5 font-thin text-6xl heading-1 box">PROJECT OVERVIEW</h2>
              <div className="bg-yellow/15 pt-5 pb-8">
                  <p className="box">At iHelp Afrika, we are committed to transforming lives through education, health, and community empowerment. Our Medical Placement Program and Volunteer Opportunities provide a platform for both medical students and skilled professionals to contribute meaningfully to rural healthcare and education in Ghana.</p>
              </div>
          </section>

          <section className="mt-11 box">
              <h2 className="mb-5 font-thin text-6xl heading-1">The Medical Placement Program</h2>

              <div className="gap-24 grid grid-cols-[622px_1fr]">
                  <div>
                      <p>Our Medical Placement Program is designed for final-year medical students looking to gain hands-on clinical experience while making a difference in underserved communities. Participants will be placed in rural hospitals and clinics, where they will work alongside local healthcare professionals to:</p>

                      <ul className="mt-6 pl-11">
                          <li className="mb-5">Provide primary healthcare services to rural populations</li>
                          <li className="mb-5">Gain exposure to tropical diseases, maternal health, and emergency care</li>
                          <li className="mb-5">Participate in community health outreach programs</li>
                          <li className="mb-5">Develop cross-cultural medical competence</li>
                      </ul>
                  </div>
                  <div className="relative">
                      <img src="/projects/volunteer-placement/medical-1.png" alt="ihelp afrika medical volunteer" className="top-0 right-0 absolute" />
                      <img src="/projects/volunteer-placement/medical-2.png" alt="ihelp afrika medical volunteer" className="top-20 right-56 absolute" />
                  </div>
              </div>
          </section>

          <section className="mt-11 box">
              <h2 className="mb-5 font-thin text-6xl heading-1">Volunteer Programs</h2>

              <div className="justify-between grid grid-cols-[auto_auto]">
                  <div className="text-right">
                      <div className="flex items-center bg-bright-green mx-auto px-11 h-20 text-3xl text-left">Mental Health Education</div>
                      <Link className="font-thin text-xl" to="mental-health-education">
                          read more
                      </Link>
                  </div>
                  <div className="text-right">
                      <div className="flex items-center bg-yellow mx-auto px-11 h-20 text-3xl text-left">
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
              <h2 className="mb-5 font-thin text-6xl heading-1 box">OUR BLOG</h2>

              <div className="bg-yellow/15 pt-5 pb-8">
                  <div className="gap-8 grid grid-cols-3 box">
                      <div className="bg-bright-green px-6 py-5">
                          <img src="/projects/volunteer-placement/medical-2.png" alt="ihelp afrika mentorship for adolescent girls" className="w-full h-auto" />
                          <p className="mt-3.5 w-3xs">Our third mentorship for adolescent girls</p>
                          <div className="flex justify-between items-end mt-8">
                              <p className="w-32 font-light text-sm">our mental health education</p>
                              <p className="font-light text-sm">Feb 28, 2025</p>
                          </div>
                      </div>
                      <div className="bg-bright-green px-6 py-5">
                          <img src="/projects/volunteer-placement/medical-2.png" alt="ihelp afrika mentorship for adolescent girls" className="w-full h-auto" />
                          <p className="mt-3.5 w-3xs">Our third mentorship for adolescent girls</p>
                          <div className="flex justify-between items-end mt-8">
                              <p className="w-32 font-light text-sm">our mental health education</p>
                              <p className="font-light text-sm">Feb 28, 2025</p>
                          </div>
                      </div>
                      <div className="bg-bright-green px-6 py-5">
                          <img src="/projects/volunteer-placement/medical-2.png" alt="ihelp afrika mentorship for adolescent girls" className="w-full h-auto" />
                          <p className="mt-3.5 w-3xs">Our third mentorship for adolescent girls</p>
                          <div className="flex justify-between items-end mt-8">
                              <p className="w-32 font-light text-sm">our mental health education</p>
                              <p className="font-light text-sm">Feb 28, 2025</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </Fragment>
  );
};

export default VolunteerPlacementProgram;
