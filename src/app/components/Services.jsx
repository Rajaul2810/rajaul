"use client";
import React from "react";
import Image from "next/image";
import { serviceData } from "../libs/Data.js";
import {
  AiOutlineArrowRight,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import Link from "next/link.js";

const Services = () => {
  return (
    <section className="bg-slate-100 min-h-screen pb-5">
      <h1 className=" text-center text-3xl font-bold pt-10 drop-shadow-md">
        My Services
      </h1>
      <p className=" text-center text-gray-400">WHAT I CAN DO FOR YOU</p>
      <div className=" flex justify-center  py-10">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-fit">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className=" shadow-sm bg-white border w-full p-5 rounded-md hover:shadow-md hover:scale-105 hover:bg-skin-fill hover:text-white duration-300"
            >
              <div className=" flex justify-center">
                <Image
                  src={item.icon}
                  alt="icon"
                  className=" w-36 h-36 py-3 drop-shadow-sm"
                />
              </div>
              <div className=" flex justify-center">
                <div className="">
                  <p className=" font-bold text-lg py-2 text-center">
                    {item.name}
                  </p>
                  <p className=" flex gap-2 items-center text-md sm:text-sm py-1">
                    <AiOutlineSafetyCertificate color="green" />
                    {item.des1}
                  </p>
                  <p className=" flex gap-2 items-center text-md sm:text-sm py-1">
                    <AiOutlineSafetyCertificate color="green" />
                    {item.des2}
                  </p>
                  <p className=" flex gap-2 items-center text-md sm:text-sm py-1">
                    <AiOutlineSafetyCertificate color="green" />
                    {item.des3}
                  </p>
                  <p className=" flex gap-2 items-center text-md sm:text-sm py-1">
                    <AiOutlineSafetyCertificate color="green" />
                    {item.des4}
                  </p>
                  <p className=" flex gap-2 items-center text-md sm:text-sm py-1">
                    <AiOutlineSafetyCertificate color="green" />
                    {item.des5}
                  </p>
                  <p className=" flex gap-2 items-center text-md sm:text-sm py-1">
                    <AiOutlineSafetyCertificate color="green" />
                    {item?.des6}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex gap-5 justify-center">
        <Link href="/project" className=" heroBtn">
          All Project <AiOutlineArrowRight />
        </Link>
        <Link href="/contact" className="heroBtn2">
          Contact Me <AiOutlineArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Services;
