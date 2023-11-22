"use client";
import React from "react";
import Image from "next/image";
import {serviceData} from '../libs/Data.js'
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Services = () => {
  return (
    <section className="bg-slate-100">
      <h1 className=" text-center text-3xl font-bold pt-10 drop-shadow-md">My Services</h1>
      <p className=" text-center text-gray-400">WHAT I CAN DO FOR YOU</p>
      <div className=" flex justify-center min-h-screen py-10">
        <div className=" w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 h-fit">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className=" shadow-sm bg-white w-full p-5 rounded-md hover:shadow-md hover:scale-105 duration-300"
            >
              <div className=" flex justify-center">
                <Image src={item.icon} alt="icon" className=" w-36 h-36 py-3" />
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
    </section>
  );
};

export default Services;
