"use client";
import React, { useState } from "react";
import {
  FiExternalLink,
  FiFrown,
  FiGlobe,
  FiLayers,
  FiLink,
  FiList,
  FiPackage,
  FiTrendingUp,
  FiUpload,
} from "react-icons/fi";

import { webs,apps } from "../libs/Data.js";
import Image from "next/image";

const Project = () => {
  const [change, setChange] = useState("all");
  return (
    <section className=" bg-slate-100">
      <div className="">
        <h1 className=" text-center text-3xl font-bold pt-10 drop-shadow-md">
          My Projects
        </h1>
        <p className=" text-center text-gray-400">
          WHICH PROJECT I HAVE ALREADY DONE
        </p>
        <div className=" min-h-screen">
          <div className="flex justify-center py-10">
            <div className=" flex  overflow-visible overflow-x-auto">
              <div onClick={() => setChange("all")} className=" mb-2">
                <a
                  className={` submenu ${
                    change == "all"
                      ? "bg-gradient-to-r from-amber-400 to-amber-300"
                      : ""
                  }`}
                >
                  <FiList />
                  All Work
                </a>
              </div>
              <div onClick={() => setChange("web")} className="h-fit ">
                <a
                  className={` submenu ${
                    change == "web"
                      ? "bg-gradient-to-r from-amber-400 to-amber-300 "
                      : ""
                  }`}
                >
                  <FiGlobe />
                  Web Development
                </a>
              </div>
              <div onClick={() => setChange("app")} className="h-fit">
                <a
                  className={` submenu ${
                    change == "app"
                      ? "bg-gradient-to-r from-amber-400 to-amber-300"
                      : ""
                  }`}
                >
                  <FiPackage />
                  App Development
                </a>
              </div>
              <div onClick={() => setChange("power")} className="h-fit">
                <a
                  className={` submenu ${
                    change == "power"
                      ? "bg-gradient-to-r from-amber-400 to-amber-300"
                      : ""
                  }`}
                >
                  <FiLayers />
                  Power Point
                </a>
              </div>
              <div onClick={() => setChange("data")} className="h-fit">
                <a
                  className={` submenu me-3 ${
                    change == "data"
                      ? "bg-gradient-to-r from-amber-400 to-amber-300"
                      : ""
                  }`}
                >
                  <FiTrendingUp />
                  Data Analysis
                </a>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
              {
               change=='all' && web_dev()
              }
              {
               change=='all' && app_dev()
              }
              {
               change=='all' && power_point()
              }
              {
               change=='web'&& web_dev()
              }
              {
               change=='app'&& app_dev()
              }
              {
               change=='power'&& power_point()
              }
              {
               change=='data'&& data_analysis()
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const web_dev = () => {
  return (
    <>
      {webs.map((item, index) => (
        <div key={index} className=" p-2 bg-white rounded-md shadow-sm group relative">
          <div className=" flex justify-center bg-slate-200 pt-1">
          <Image
            src={item.photo}
            alt={item.title}
            className=" w-3/4 h-72"
          />
          </div>
          <p className=" font-bold py-1 text-center">{item.title}</p>
          <p className=" text-xs text-justify">{item.description}</p>
          <div className=" flex flex-wrap gap-1 py-2 justify-center">
            {item?.tecnology.map((tg, i) => (
              <p key={i} className=" border p-1 rounded-md text-sm bg-slate-50 ">
                {tg}
              </p>
            ))}
          </div>
          <div className=" absolute h-full w-full top-0 invisible group-hover:visible bg-slate-600 bg-opacity-50 flex justify-center gap-5 items-center">
             <a href={item.code} className=" bg-white p-2 rounded-full shadow-sm tooltip"data-tip="Code" target="_blank"><FiLink/></a>
             <a href={item.live} className=" bg-white p-2 rounded-full shadow-sm tooltip" data-tip="Live" target="_blank"><FiExternalLink/></a>
          </div>
        </div>
      ))}
    </>
  );
};
const app_dev = () => {
  return (
    <>
      {apps.map((item, index) => (
        <div key={index} className=" p-2 bg-white rounded-md shadow-sm group relative">
          <div className=" flex justify-center bg-slate-200 pt-1">
          <Image
            src={item.photo}
            alt={item.title}
            className=" w-3/4 h-72"
          />
          </div>
          <p className=" font-bold py-1 text-center">{item.title}</p>
          <p className=" text-xs text-justify">{item.description}</p>
          <div className=" flex flex-wrap gap-1 py-2 justify-center">
            {item?.tecnology.map((tg, i) => (
              <p key={i} className=" border p-1 rounded-md text-sm bg-slate-50 ">
                {tg}
              </p>
            ))}
          </div>
          <div className=" absolute h-full w-full top-0 invisible group-hover:visible bg-slate-600 bg-opacity-50 flex justify-center gap-5 items-center">
             <a href={item.code} className=" bg-white p-2 rounded-full shadow-sm tooltip"data-tip="Code" target="_blank"><FiLink/></a>
             <a href={item.live} className=" bg-white p-2 rounded-full shadow-sm tooltip" data-tip="Live" target="_blank"><FiExternalLink/></a>
          </div>
        </div>
      ))}
    </>
  );
};
const power_point = () => {
  return (
    <>
      <div className=" bg-white shadow-sm rounded-md p-2">
        <iframe
          src="https://www.slideshare.net/slideshow/embed_code/key/8vAot3sUxL22L?hostedIn=slideshare&page=upload"
          width="100%"
          height="400"
        ></iframe>
      </div>
      <div className=" bg-white shadow-sm rounded-md p-2">
        <iframe
          src="https://www.slideshare.net/slideshow/embed_code/key/mYay6AM0e10lNo?hostedIn=slideshare&page=upload"
          width="100%"
          height="400"
        ></iframe>
      </div>
      <div className=" bg-white shadow-sm rounded-md p-2">
        <iframe
          src="https://www.slideshare.net/slideshow/embed_code/key/75o3UIyh1jFwh1?hostedIn=slideshare&page=upload"
          width="100%"
          height="400"
        ></iframe>
      </div>
    </>
  );
};
const data_analysis = () => {
  return (
    <>
      <div className=" flex justify-center items-center gap-3 text-gray-500">
        <FiFrown/> <p>No data available</p>
      </div>
    </>
  );
};



export default Project;
