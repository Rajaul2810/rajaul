"use client";
import React, { useState } from "react";
import {
  FiGlobe,
  FiLayers,
  FiList,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

const Project = () => {
  const [change, setChange] = useState("all");
  return (
    <section className=" bg-slate-100">
      <div className="">
        <h1 className=" text-center text-3xl font-bold pt-10">My Projects</h1>
        <p className=" text-center text-gray-400">
          WHICH PROJECT I HAVE ALREADY DONE
        </p>
        <div className=" min-h-screen flex justify-center py-10 ">
          <div className=" flex  overflow-visible overflow-x-auto">
            <div onClick={() => setChange("all")} className=" h-fit">
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
                    ? "bg-gradient-to-r from-amber-400 to-amber-300"
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
      </div>
    </section>
  );
};

export default Project;
