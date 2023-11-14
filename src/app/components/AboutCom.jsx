"use client";
import Image from "next/image";
import React, { useState } from "react";
import rajaul from "../../../public/assets/rajaul.jpg";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { RiGraduationCapLine } from "react-icons/ri";
import {
  FiAward,
  FiCalendar,
  FiCpu,
  FiInfo,
  FiMail,
  FiMap,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const AboutCom = () => {
  const [change, setChange] = useState("info");
  return (
    <div className=" flex justify-center min-h-screen bg-amber-50 py-5">
      <div className=" w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        <div className=" bg-amber-300 border-2 border-white shadow-md order-last md:order-first">
          <Image src={rajaul} className=" w-80 h-96  -rotate-6" alt="hero" />
        </div>
        <div>
          <h1 className=" py-2 text-3xl font-semibold text-amber-400">
            About Me
          </h1>
          <ul className="menu menu-horizontal border-b bg-white shadow-md rounded-lg ">
            <li
              onClick={() => setChange("info")}
              className={`${
                change === "info"
                  ? "bg-slate-800 text-white rounded-md hover:text-white"
                  : ""
              }`}
            >
              <a>
                <FiInfo />
                Personal Info
              </a>
            </li>

            <li
              onClick={() => setChange("qua")}
              className={`${
                change === "qua"
                  ? "bg-slate-800 text-white rounded-md hover:text-white"
                  : ""
              }`}
            >
              <a>
                <RiGraduationCapLine />
                Education
              </a>
            </li>
            <li
              onClick={() => setChange("club")}
              className={`${
                change === "club"
                  ? "bg-slate-800 text-white rounded-md hover:text-white"
                  : ""
              }`}
            >
              <a>
                <FiCpu />
                Club
              </a>
            </li>
          </ul>
          {change === "info" && info()}
          {change === "qua" && edu()}
          {change === "club" && club()}

          <div className=" flex gap-5">
            <button className=" heroBtn">
              Details Me <AiOutlineArrowRight />
            </button>
            <button className="heroBtn">
              Download CV <AiOutlineDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const info = () => {
  return (
    <div className=" grid gap-5 grid-cols-2 py-5">
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2">
        <FiUser /> Rajaul Karim
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2">
        <FiPhone /> +8801776030787
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2">
        <FiMail /> rajaulkarim2810 @gmail.com
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2">
        <FiCalendar />
        Born on 28 Oct 2000
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2">
        <RiGraduationCapLine />
        BSc in CSE
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2">
        <FiMapPin />
        Wari, Dhaka, Bangladesh
      </p>
    </div>
  );
};

const edu = () => {
  return (
   
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-5">
        <li className=" p-3 bg-white shadow-sm rounded-sm">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start border-l-2 ps-2">
            <p className=" font-bold text-lg">Jagannath University,Dhaka</p>
            <p className=" text-gray-700">BSc in CSE</p>
            <p className=" flex gap-3 items-center py-3 text-sm">
              <FiCalendar />
              01-2019 to 12-2023
            </p>
            <p className=" flex gap-3 items-center text-sm font-bold">
              <FiAward />
              CGPA: 3.30
            </p>
          </div>
        </li>
        <li className=" p-3 bg-white shadow-sm rounded-sm my-3">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start border-l-2 ps-2">
            <p className=" font-bold text-lg">Agricultural University Collage</p>
            <p className=" text-gray-700">Science Group</p>
            <p className=" flex gap-3 items-center py-3 text-sm">
              <FiCalendar />
              2016 - 2018
            </p>
            <p className=" flex gap-3 items-center text-sm font-bold">
              <FiAward />
              GPA: 4.78
            </p>
          </div>
        </li>
      </ul>
   
  );
};
const club = () => {
  return (
   
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-5">
        <li className=" p-3 bg-white shadow-sm rounded-sm">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start border-l-2 ps-2">
            <p className=" font-bold">IEEE Computer Society JnU Student Branch Chapter</p>
            <p className=" text-gray-700">General Secretary</p>
            <p className=" flex gap-3 items-center py-3 text-sm">
              <FiCalendar />
              01-2023 to 12-2023
            </p>
          </div>
        </li>
        <li className=" p-3 bg-white shadow-sm rounded-sm my-3">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start border-l-2 ps-2">
            <p className=" font-bold text-lg"> Bangladesh Science Fiction Society JnU Unit</p>
            <p className=" text-gray-700">Office Secretary</p>
            <p className=" flex gap-3 items-center py-3 text-sm">
              <FiCalendar />
              01-2022 - 12-2022
            </p>
          </div>
        </li>
      </ul>
   
  );
};

export default AboutCom;
