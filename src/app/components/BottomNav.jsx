import Link from "next/link";
import React from "react";
import {
  AiFillCrown,
  AiFillHome,
  AiFillMessage,
  AiFillSetting,
} from "react-icons/ai";
import { RiUser2Fill } from "react-icons/ri";

const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white p-3 rounded-t-xl shadow-md border-t z-50">
      <div className="flex justify-around items-center">
        <Link href="/">
          <div className=" bottomNav">
            <p className=" self-center">
              <AiFillHome />
            </p>
            <p className=" text-xs text-center">Home</p>
          </div>
        </Link>
        <Link href="/about">
          <div className=" bottomNav ">
            <p className=" self-center">
              <RiUser2Fill />
            </p>
            <p className="text-xs text-center">About</p>
          </div>
        </Link>
        <Link href="/project">
          <div className="bottomNav ">
            <p className=" self-center">
              <AiFillCrown />
            </p>
            <p className="text-xs text-center">Project</p>
          </div>
        </Link>
        <Link href="/resume">
          <div className="bottomNav ">
            <p className=" self-center">
              <AiFillSetting />
            </p>
            <p className="text-xs text-center">Resume</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className=" bottomNav ">
            <p className="self-center">
              <AiFillMessage />
            </p>
            <p className="text-xs text-center">Contact</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
