"use client";
import React from "react";
import serv from "../libs/services.js";
import Image from "next/image";

import app from "../../../public/assets/service/app.png";
import web from "../../../public/assets/service/web.png";
import power from "../../../public/assets/service/power.png";
import data from "../../../public/assets/service/data.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const serviceData = [
  {
    id: 1,
    name: "Web Development",
    icon: web,
    des1: "User Friendly UI",
    des2: "Responsive Web Design",
    des3: "Full Stack Development",
    des4: "Focus High Performance",
    des5: "Creative Development",
    des6: "Testing and Debugging",
  },
  {
    id: 2,
    name: "App Development",
    icon: app,
    des1: "User Friendly App UI",
    des2: "Responsive App Design",
    des3: "Platform Independent",
    des4: "Full Stack Development",
    des5: "Focus High Performance",
    des6: "Testing & Clean Coding",
  },
  {
    id: 1,
    name: "Data Analysis",
    icon: data,
    des1: "Data Preprocessing",
    des2: "Data Visualization",
    des3: "Predictive Modeling ",
    des6: "Clustering & Mining",
    des4: "Focus High Performance",
    des5: "Bussiness Analysis",
  },
  {
    id: 1,
    name: "Animated Powerpoint",
    icon: power,
    des1: "Animated Slide",
    des2: "Pitch Deck Design",
    des3: "Custom Template",
    des4: "Business Presentaion",
    des5: "Creative Slide",
    des6: "Educational Presentation",
  },
];

const Services = () => {
  return (
    <section className="bg-slate-100">
        <h1 className=" text-center text-3xl font-bold pt-10">My Services</h1>
        <p className=" text-center text-gray-400">WHAT I WILL DO FOR YOU</p>
      <div className=" flex justify-center min-h-screen py-10">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 h-fit">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className=" shadow-sm bg-white w-full p-5 rounded-md hover:shadow-md Md:hover:scale-105 duration-300"
            >
              <div className=" flex justify-center">
                <Image src={item.icon} alt="icon" className=" w-36 h-36 py-3" />
              </div>
              <div>
                <p className=" text-center font-bold text-lg py-2">
                  {item.name}
                </p>
                <p className=" flex gap-2 items-center text-sm py-1"><AiOutlineSafetyCertificate color="green"/>{item.des1}</p>
                <p className=" flex gap-2 items-center text-sm py-1"><AiOutlineSafetyCertificate color="green"/>{item.des2}</p>
                <p className=" flex gap-2 items-center text-sm py-1"><AiOutlineSafetyCertificate color="green"/>{item.des3}</p>
                <p className=" flex gap-2 items-center text-sm py-1"><AiOutlineSafetyCertificate color="green"/>{item.des4}</p>
                <p className=" flex gap-2 items-center text-sm py-1"><AiOutlineSafetyCertificate color="green"/>{item.des5}</p>
                <p className=" flex gap-2 items-center text-sm py-1"><AiOutlineSafetyCertificate color="green"/>{item?.des6}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
