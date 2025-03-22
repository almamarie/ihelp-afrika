import React, { Fragment } from "react";
import { DUMMY_TEAM } from "utils/team";
import Partners from "~/components/home/partners";

const Team = () => {
  return (
    <Fragment>
      <div className="mt-20 box">
        <h1 className="text-center heading-1">OUR TEAM</h1>
        <ul className="gap-20 grid grid-cols-3 mt-10">
          {DUMMY_TEAM.map((member, index) => {
            return (
              <li className="relative" key={index}>
                <img
                  className="w-full h-full object-cover"
                  src={member.img}
                  alt={`ihelp afrika ${member.name}`}
                />
                <div className="bottom-3 left-[50%] absolute bg-[#8A928C]/50 w-[calc(100%-40px)] text-white text-center -translate-x-[50%]">
                  <p className="font-medium text-2xl">{member.name}</p>
                  <p>{member.designation}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-yellow mt-10 h-2" />
      <Partners />
    </Fragment>
  );
};

export default Team;
