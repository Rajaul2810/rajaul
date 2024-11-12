"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { feature } from "../libs/Data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export const CarouselMain = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () => {
    setCurrentSlider((prev) => (prev === feature.length - 1 ? 0 : prev + 1));
  };

  const prevSlider = () => {
    setCurrentSlider((prev) => (prev === 0 ? feature.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full md:w-2/3 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
        <button
          onClick={prevSlider}
          className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
          aria-label="Previous slide"
        >
          <BsArrowLeft className="w-6 h-6 text-teal-600" />
        </button>
        <button
          onClick={nextSlider}
          className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
          aria-label="Next slide"
        >
          <BsArrowRight className="w-6 h-6 text-teal-600" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative h-full overflow-hidden rounded-2xl">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {feature.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative group"
            >
              <Image
                src={slide.photo}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {slide.tecnology.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-600/80 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={slide.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-all"
                    >
                      Live Demo
                    </a>
                    <a
                      href={slide.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-all"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {feature.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlider(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlider === index ? "w-4 bg-teal-600" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const ProjectCom = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-teal-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Explore my latest work and creative solutions that make a difference.
            </p>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full 
                font-medium hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200"
            >
              View All Projects <AiOutlineArrowRight className="text-xl" />
            </Link>
          </div>
          <CarouselMain />
        </div>
      </div>
    </div>
  );
};
