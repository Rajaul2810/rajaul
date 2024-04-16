"use client";
import Image from "next/image";
import { useState } from "react";
import { media } from "../libs/Data";

export const Media = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = ({ currentIdx }) =>
    setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));

  return (
    <div className="flex gap-2 md:gap-4 px-5 justify-center">
      {media.map((slide, idx) => (
        <div
          onClick={() => toggle({ currentIdx: idx })}
          className={`h-[350px] md:h-[400px]  relative duration-500 ease-in-out border-4 rounded-3xl border-white shadow-2xl ${
            isOpen == idx ? "w-[900px] md:w-[400px] " : "w-[80px]"
          }`}
          key={idx}
        >
          <Image
            className="h-full object-cover rounded-3xl"
            src={slide.img}
            alt="Media"
          />
          <Image
            className={`absolute bottom-5 border-white border-4 ${
              isOpen === idx
                ? "left-4"
                : "left-1/2 -translate-x-1/2 duration-700"
            }  h-[50px] w-[50px] object-cover rounded-full`}
            src={slide.img}
            alt="media"
          />
          <div
            className={`text-white bg-skin-fill px-2 py-1 ${
              isOpen == idx ? "" : "hidden"
            } rounded-md opacity-90 absolute md:left-[100px] bottom-5`}
          >
            {/* <h3 className="text-3xl font-semibold">Status</h3> */}
            <p className="text-xs md:text-xl ">{slide.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
