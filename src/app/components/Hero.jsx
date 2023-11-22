"use client";
import Image from "next/image";
import React from "react";
import hero from "../../../public/assets/hero.png";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { FiMail } from "react-icons/fi";


const Hero = () => {
  return (
    <div className=" flex justify-center min-h-screen bg-slate-100" >
      <div className=" w-11/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
        <div>
          <h1 className=" py-2">Welcome to My Portfolio</h1>
          <h1 className="text-5xl font-bold drop-shadow-md">I&rsquo;m Rajaul Karim </h1>
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
            <button className=" heroBtn">
              Hire Me Now! <AiOutlineArrowRight />
            </button>
            <button className="heroBtn">
              Download CV <AiOutlineDownload />
            </button>
          </div>
          <div className=" flex gap-5 py-6">
            <p className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <FiMail />
            </p>
            <p className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsFacebook />
            </p>
            <p className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsLinkedin />
            </p>
            <p className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsGithub />
            </p>
            <p className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsTwitter />
            </p>
            <p className=" bg-white p-2 rounded-full shadow-md hover:bg-amber-300 transition duration-500 cursor-pointer">
              <BsYoutube />
            </p>
          </div>
        </div>
        <Image src={hero} className="w-full" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
