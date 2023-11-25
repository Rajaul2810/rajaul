"use client";
import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/hira2.png";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { FiMail } from "react-icons/fi";
import Link from "next/link";


const Hero = () => {
  return (
    <div className=" flex justify-center min-h-screen bg-slate-100" >
      <div className=" w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        <div>
          <h1 className=" py-2">Welcome to My Portfolio</h1>
          <h1 className="text-4xl font-extrabold drop-shadow-md">I&rsquo;m Rajaul Karim </h1>
          <div className=" text-3xl py-6 font-extrabold text-amber-400">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "MERN Stack Developer",
                  "Problem Solver",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mb-4 text-justify">
            I am a hardworking, confident, enthusiastic Problem Solver and I want
            to utilize my knowledge and personal skills in Software Development.
          </p>
          <div className=" flex gap-5">
            <Link href="/contact" className=" heroBtn">
              Hire Me Now! <AiOutlineArrowRight />
            </Link>
            <a href="https://drive.google.com/file/d/1b6d9R61U4J1LVTq0Op2iI4Muw1yed3HL/view?usp=sharing" target="_blank" className="heroBtn">
              Download CV <AiOutlineDownload />
            </a>
          </div>
          <div className=" flex gap-5 py-6">
            <a href="mailto:rajaulkarim2810@gmail.com" target="_blank" className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <FiMail />
            </a>
            <a href="https://www.facebook.com/Hira2810" target="_blank" className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsFacebook />
            </a>
            <a href="https://www.linkedin.com/in/rajaul2810/" target="_blank" className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsLinkedin />
            </a>
            <a href="https://github.com/Rajaul2810" target="_blank" className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsGithub />
            </a>
            <a href="https://twitter.com/Rajaul2810" target="_blank" className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCvK7OuxNq_I3xyNenkj9x8Q" target="_blank" className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div>
        <Image src={hero} priority={true} className=" w-80 bg-amber-300 rounded-t-full" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
