"use client";
import React from "react";
import { skills, awards } from "../libs/Data";
import { FiAward, FiCalendar, FiCheckCircle } from "react-icons/fi";

const Resume = () => {
  return (
    <section className=" bg-amber-50 ">
      <div className="">
        <h1 className=" text-center text-3xl font-bold pt-10 drop-shadow-md">
          My Resume
        </h1>
        <p className=" text-center text-gray-400">In Details</p>
        <div className="  flex justify-center py-10 ">
          <div className=" w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" shadow-md bg-white w-full p-5 rounded-md">
              <h1 className=" font-bold py-2 text-lg">My Skills</h1>
              <div className=" grid grid-cols-2 gap-3 p-2">
                {skills.map(({ name, icon, id }) => (
                  <div
                    key={id}
                    className=" p-2 border rounded-md bg-slate-50"
                    draggable
                  >
                    <div className="flex items-center  gap-5 ">
                      <p className="">{icon}</p>
                      <p className=" text-sm">{name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className=" py-4">
                <hr />
              </p>
              <div className=" grid grid-cols-2 gap-3 p-2">
                <div className=" p-2 border rounded-md bg-slate-50">
                  <p className=" text-sm">Problem Solving</p>
                </div>
                <div className=" p-2 border rounded-md bg-slate-50">
                  <p className=" text-sm">Leadership Skill</p>
                </div>
                <div className=" p-2 border rounded-md bg-slate-50">
                  <p className=" text-sm">Presentaion Skill</p>
                </div>
                <div className=" p-2 border rounded-md bg-slate-50">
                  <p className=" text-sm">Team Player</p>
                </div>
              </div>
            </div>

            <div className=" shadow-md bg-white w-full p-5 rounded-md">
              <h1 className=" font-bold py-2 text-lg">
                My Participations & Achievement
              </h1>
              {awards.map((item, index) => (
                <div key={index} className=" flex items-center p-2 gap-2">
                  <p className=" text-green-500 shadow-md rounded-full">
                    <FiCheckCircle />
                  </p>
                  <div>
                    <p className=" text-sm">{item?.name}</p>
                    <p className=" text-xs font-bold">{item?.category}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className=" shadow-md bg-white w-full p-5 rounded-md">
                <h1 className=" font-bold py-2 text-lg">Experience</h1>
                <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box w-full">
                      <p className=" font-bold ">AyAI Corp Limited - Internship</p>
                      <p className=" text-gray-700">Web Developer</p>
                      <p className=" flex gap-3 items-center py-2 text-sm">
                        <FiCalendar />
                        07-2023 - 11-2023
                      </p>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box w-full">
                      <p className=" font-bold">
                        CPSD Technologies Ltd - Internship
                      </p>
                      <p className=" text-gray-700">IOT Engineer</p>
                      <p className=" flex gap-3 items-center py-2 text-sm">
                        <FiCalendar />
                        10-2023 - 01-2024
                      </p>
                    </div>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className=" shadow-md bg-white w-full p-5 rounded-md">
                <h1 className=" font-bold py-2 text-lg">Other Activities</h1>
                <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box w-full">
                      <p className=" font-bold">
                      UNICEF Bangladesh
                      </p>
                      <p className=" text-gray-700">Volunteer</p>
                      <p className=" flex gap-3 items-center py-2 text-sm">
                        <FiCalendar />
                        2022 - Present
                      </p>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box w-full">
                      <p className=" font-bold">
                      Orphan Paradise Organization
                      </p>
                      <p className=" text-gray-700">Volunteer</p>
                      <p className=" flex gap-3 items-center py-2 text-sm">
                        <FiCalendar />
                        2022 - Present
                      </p>
                    </div>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
