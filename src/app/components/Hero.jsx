"use client";
import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/hira2.png";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" flex justify-center min-h-screen bg-slate-100">
      <div className=" w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        <div>
          <h1 className=" py-2">Welcome to My Portfolio</h1>
          <h1 className="text-4xl font-extrabold drop-shadow-md">
            I&rsquo;m Rajaul Karim
          </h1>
          <div className=" text-3xl py-6 font-extrabold text-skin-main">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "MERN Stack Developer",
                  "Problem Solver",
                  "NodeJs Developer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mb-4 text-justify">
            I am a hardworking, confident, enthusiastic Problem Solver and I
            want to utilize my knowledge and personal skills in Software
            Development. I participated in more than <span className=" font-bold text-lg">05</span> hackathons and more than <span className=" font-bold text-lg">10</span> different types of contest.
          </p>
          <div className=" flex gap-5 justify-center md:justify-start">
            <Link href="/contact" className=" heroBtn ">
              Hire Me Now! <AiOutlineArrowRight />
            </Link>
            <a
              href="https://drive.google.com/file/d/1b6d9R61U4J1LVTq0Op2iI4Muw1yed3HL/view?usp=sharing"
              target="_blank"
              className="heroBtn2"
            >
              Download CV <AiOutlineDownload />
            </a>
          </div>
          <div className=" flex gap-5 py-6 justify-center md:justify-start">
            <a
              href="mailto:rajaulkarim2810@gmail.com"
              target="_blank"
              className=" bg-white p-2 rounded-full shadow-md border hover:bg-skin-fill hover:text-white border-teal-600 transition duration-500 cursor-pointer"
            >
              <FiMail />
            </a>
            <a
              href="https://www.facebook.com/Hira2810"
              target="_blank"
              className=" bg-white p-2 rounded-full shadow-md border hover:bg-skin-fill hover:text-white border-teal-600 transition duration-500 cursor-pointer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/rajaul2810/"
              target="_blank"
              className=" bg-white p-2 rounded-full shadow-md border hover:bg-skin-fill hover:text-white border-teal-600 transition duration-500 cursor-pointer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Rajaul2810"
              target="_blank"
              className=" bg-white p-2 rounded-full shadow-md border hover:bg-skin-fill hover:text-white border-teal-600 transition duration-500 cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href="https://twitter.com/Rajaul2810"
              target="_blank"
              className=" bg-white p-2 rounded-full shadow-md border hover:bg-skin-fill hover:text-white border-teal-600 transition duration-500 cursor-pointer"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvK7OuxNq_I3xyNenkj9x8Q"
              target="_blank"
              className=" bg-white p-2 rounded-full shadow-md border border-teal-600 hover:bg-skin-fill hover:text-white  transition duration-500 cursor-pointer"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className=" relative">
          <Image
            src={hero}
            priority={true}
            className=" w-80 bg-skin-fill rounded-t-full"
            alt="hero"
          />
          <div className=" absolute top-0">
              <p className=" px-5 py-2 rounded-full shadow-xl bg-white border flex">Project | 25+</p>
          </div>
          <div className=" absolute bottom-10 -left-10">
              <p className=" px-5 py-2 rounded-full shadow-xl bg-white border">Hackathon | 5+</p>
          </div>
          <div className=" absolute  top-2/4 -right-10 grid place-items-center">
              <p className=" px-5 py-2 rounded-full shadow-xl bg-white border">Contest | 10+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
