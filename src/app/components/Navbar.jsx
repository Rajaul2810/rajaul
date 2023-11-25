"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  //console.log(path);
  return (
    <nav className="bg-white p-4 hidden md:flex border-b sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" btn text-xl bg-amber-300 hover:bg-amber-400 font-bold italic">RK</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <p className={`navlink ${path=='/'? 'bg-amber-400':''}`}>Home</p>
          </Link>
          <Link href="/about">
            <p className={`navlink ${path=='/about'? 'bg-amber-400':''}`}>About</p>
          </Link>
          <Link href="/project">
            <p className={`navlink ${path=='/project'? 'bg-amber-400':''}`}>Project</p>
          </Link>
          <Link href="/resume">
            <p className={`navlink ${path=='/resume'? 'bg-amber-400':''}`}>Resume</p>
          </Link>
          <Link href="/contact">
            <p className={`navlink ${path=='/contact'? 'bg-amber-400':''}`}>Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
