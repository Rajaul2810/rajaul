"use client";
import React from "react";
import { skills, awards } from "../libs/Data";
import { FiAward, FiCheckCircle } from "react-icons/fi";


const Resume = () => {
  return (
    <section className=" bg-slate-100">
      <div className="">
        <h1 className=" text-center text-3xl font-bold pt-10">My Resume</h1>
        <p className=" text-center text-gray-400">In Details</p>
        <div className=" min-h-screen flex justify-center py-10 ">
          <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" shadow-md bg-white w-full p-5 rounded-md">
              <h1 className=" font-bold py-2 ">My Skills</h1>
              <div className=" grid grid-cols-2 gap-3 p-2">
                {skills.map(({ name, icon, id }) => (
                  <div key={id} className=" p-2 border rounded-md bg-slate-50">
                    <div className="flex items-center  gap-5 ">
                      <p className="">{icon}</p>
                      <p className=" text-sm">{name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className=" py-4"> <hr /></p>
              <div className=" grid grid-cols-2 gap-3 p-2">
                <div className=" p-2 border rounded-md bg-slate-50">
                  <p className=" text-sm">200+ Problem Solving</p>
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
              <h1 className=" font-bold py-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
