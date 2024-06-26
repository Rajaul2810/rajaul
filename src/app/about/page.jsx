"use client";
import Image from "next/image";
import React, { useState } from "react";
import rajaul from "../../../public/assets/rajaul.jpg";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";
import {
  FiAward,
  FiCalendar,
  FiCpu,
  FiInfo,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

import Link from "next/link";
import { Media } from "../components/Media";

const About = () => {
  const [change, setChange] = useState("info");
  return (
    <div className="  min-h-screen py-5">
      <div className="flex justify-center items-center py-10">
        <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className=" flex justify-center items-center">
          <div className=" bg-skin-fill border-2 border-white shadow-md w-80 h-96">
            <Image src={rajaul} className=" w-80 h-96  -rotate-6" alt="Rajaul" />
          </div>
          </div>
          <div>
            <h1 className=" py-3 text-3xl font-semibold text-skin-main drop-shadow-md">
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
                  Information
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

            <div className=" flex gap-5 justify-center">
              <Link href="/contact" className=" heroBtn">
                Hire Me Now <AiOutlineArrowRight />
              </Link>
              <a href="https://drive.google.com/file/d/1b6d9R61U4J1LVTq0Op2iI4Muw1yed3HL/view?usp=sharing" target="_blank" className="heroBtn2">
                Download CV <AiOutlineDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className=" py-5" />

      {/* media */}
      <section  className="mb-3">
        <Media/>
      </section>
    </div>
  );
};

const info = () => {
  return (
    <div className=" grid gap-5 grid-cols-2 py-5">
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <FiUser color="teal"/> Rajaul Karim (Hira)
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <FiPhone color="teal"/> +8801776030787
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <FiMail color="teal"/> rajaulkarim2810 @gmail.com
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <FiCalendar color="teal"/>
        Born on 28 Oct 2000
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <RiGraduationCapLine color="teal"/>
        BSc in CSE
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <FiMapPin color="teal"/>
        Wari, Dhaka, Bangladesh
      </p>
      <p className=" flex gap-3 items-center text-sm bg-white shadow-sm p-2 border">
        <IoLanguageOutline color="teal"/>
        Bangle, English
      </p>
    </div>
  );
};

const edu = () => {
  return (
    <ul className="timeline timeline-compact timeline-snap-icon timeline-vertical py-5 w-full">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box w-full rounded-sm">
          <p className=" font-bold text-lg">Jagannath University,Dhaka</p>
          <p className=" text-gray-700">BSc in CSE</p>
          <p className=" flex gap-3 items-center py-2 text-sm">
            <FiCalendar color="teal"/>
            2019 - 2023
          </p>
          <p className=" flex gap-3 items-center text-sm font-bold">
            <FiAward color="teal"/>
            CGPA: 3.30
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
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box mt-5 w-full rounded-sm">
          <p className=" font-bold text-lg">Agricultural University Collage</p>
          <p className=" text-gray-700">Science Group</p>
          <p className=" flex gap-3 items-center py-2 text-sm">
            <FiCalendar color="teal"/>
            2016 - 2018
          </p>
          <p className=" flex gap-3 items-center text-sm font-bold">
            <FiAward color="teal"/>
            GPA: 4.78
          </p>
        </div>
        <hr />
      </li>
    </ul>
  );
};
const club = () => {
  return (
    <ul className="timeline timeline-compact timeline-snap-icon timeline-vertical py-5">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box rounded-sm">
          <p className=" font-bold">
            IEEE Computer Society JnU Student Branch Chapter
          </p>
          <p className=" text-gray-700">General Secretary</p>
          <p className=" flex gap-3 items-center py-3 text-sm">
            <FiCalendar color="teal"/>
            01-2023 to 12-2023
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
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box mt-5 rounded-sm">
          <p className=" font-bold text-lg">
            Bangladesh Science Fiction Society JnU Unit
          </p>
          <p className=" text-gray-700">Office Secretary</p>
          <p className=" flex gap-3 items-center py-3 text-sm">
            <FiCalendar color="teal"/>
            01-2022 - 12-2022
          </p>
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default About;
