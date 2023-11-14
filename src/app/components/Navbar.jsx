import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 hidden md:flex border-b sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-xl font-bold">Your Logo</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <p className="navlink">Home</p>
          </Link>
          <Link href="/about">
            <p className="navlink">About</p>
          </Link>
          <Link href="/project">
            <p className="navlink">Project</p>
          </Link>
          <Link href="/resume">
            <p className="navlink">Resume</p>
          </Link>
          <Link href="/contact">
            <p className="navlink">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
