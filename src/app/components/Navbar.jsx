"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  //console.log(path);
  return (
    <nav className="bg-white p-4 hidden md:flex border sticky top-0 z-50 mx-2 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" btn text-xl bg-skin-fill font-bold italic text-white">RK</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <p className={`navlink ${path=='/'? 'text-skin-main':''}`}>Home</p>
          </Link>
          <Link href="/about">
            <p className={`navlink ${path=='/about'? 'text-skin-main':''}`}>About</p>
          </Link>
          <Link href="/project">
            <p className={`navlink ${path=='/project'? 'text-skin-main':''}`}>Project</p>
          </Link>
          <Link href="/resume">
            <p className={`navlink ${path=='/resume'? 'text-skin-main':''}`}>Resume</p>
          </Link>
          <Link href="/contact">
            <p className={`navlink ${path=='/contact'? 'text-skin-main':''}`}>Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
