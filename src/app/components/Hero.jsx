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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-teal-600">Welcome to My Portfolio</h2>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              I&rsquo;m Rajaul Karim
            </h1>
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "React Native Developer",
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
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            I am an innovative, detail-oriented, and results-driven Software Engineer with a proven track record in problem-solving and development. My experience includes successful participation in over <span className="font-bold text-teal-600">05</span> hackathons and more than <span className="font-bold text-teal-600">10</span> competitive programming contests, demonstrating my technical prowess and ability to deliver under pressure.
          </p>

          <div className="flex gap-6">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 
                transition-all flex items-center gap-2 shadow-lg hover:shadow-teal-200"
            >
              Hire Me Now! <AiOutlineArrowRight className="text-xl" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1b6d9R61U4J1LVTq0Op2iI4Muw1yed3HL/view?usp=sharing"
              target="_blank"
              className="px-8 py-3 bg-white text-teal-600 rounded-full font-medium border-2 border-teal-600
                hover:bg-teal-50 transition-all flex items-center gap-2 shadow-lg"
            >
              Download CV <AiOutlineDownload className="text-xl" />
            </a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <FiMail />, link: "mailto:rajaulkarim2810@gmail.com" },
              { icon: <BsFacebook />, link: "https://www.facebook.com/Hira2810" },
              { icon: <BsLinkedin />, link: "https://www.linkedin.com/in/rajaul2810/" },
              { icon: <BsGithub />, link: "https://github.com/Rajaul2810" },
              { icon: <BsTwitter />, link: "https://twitter.com/Rajaul2810" },
              { icon: <BsYoutube />, link: "https://www.youtube.com/channel/UCvK7OuxNq_I3xyNenkj9x8Q" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md
                  hover:bg-teal-600 hover:text-white border border-teal-200 text-teal-600 
                  transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative w-96 h-96">
            <Image
              src={hero}
              priority={true}
              className="w-full h-full object-cover rounded-3xl bg-gradient-to-br from-teal-400 to-emerald-400"
              alt="hero"
            />
            
            <div className="absolute -top-4 -right-4 px-6 py-3 bg-white rounded-2xl shadow-xl
              border border-teal-100 backdrop-blur-sm">
              <p className="font-semibold text-gray-800">Projects <span className="text-teal-600">25+</span></p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-white rounded-2xl shadow-xl
              border border-teal-100 backdrop-blur-sm">
              <p className="font-semibold text-gray-800">Hackathons <span className="text-teal-600">5+</span></p>
            </div>
            
            <div className="absolute top-1/2 -right-8 px-6 py-3 bg-white rounded-2xl shadow-xl
              border border-teal-100 backdrop-blur-sm -translate-y-1/2">
              <p className="font-semibold text-gray-800">Contests <span className="text-teal-600">10+</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
