"use client";
import React from "react";
import { skills, awards } from "../libs/Data";
import { FiAward, FiCalendar, FiCheckCircle, FiUsers } from "react-icons/fi";

const Resume = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-2 pt-16">
          <h1 className="text-4xl font-bold text-gray-800 drop-shadow-md">
            My Professional Journey
          </h1>
          <p className="text-teal-600 font-medium">Experience & Achievements</p>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-lg border border-teal-100 p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-teal-600">Technical Skills</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map(({ name, icon, id }) => (
                  <div
                    key={id}
                    className="p-3 rounded-lg bg-gradient-to-br from-slate-50 to-teal-50 border border-teal-100 
                    hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-teal-600">{icon}</span>
                      <p className="text-gray-700">{name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-teal-100"></div>

              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-teal-600">Soft Skills</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {["Problem Solving", "Leadership", "Presentation", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Critical Thinking"].map((skill) => (
                  <div key={skill} className="p-3 rounded-lg bg-gradient-to-br from-slate-50 to-teal-50 border border-teal-100">
                    <p className="text-gray-700">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-xl shadow-lg border border-teal-100 p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Achievements & Recognition
              </h2>
              <div className="space-y-4">
                {awards.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-slate-50 to-teal-50">
                    <span className="text-teal-600 p-2 bg-white rounded-full shadow-sm">
                      <FiAward />
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">{item?.name}</p>
                      <p className="text-sm text-teal-600">{item?.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-xl shadow-lg border border-teal-100 p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Professional Experience</h2>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-teal-200">
                  <div className="absolute -left-2 top-0">
                    <div className="w-4 h-4 rounded-full bg-teal-600"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-800">Mentor&apos;s - React Native Developer</h3>
                    <p className="text-teal-600">Full-time</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <FiCalendar /> 09-2024 - Present
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-teal-200">
                  <div className="absolute -left-2 top-0">
                    <div className="w-4 h-4 rounded-full bg-teal-600"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-800">AyAI Corp Limited</h3>
                    <p className="text-teal-600">Web Developer Intern</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <FiCalendar /> 07-2023 - 11-2023
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-teal-200">
                  <div className="absolute -left-2 top-0">
                    <div className="w-4 h-4 rounded-full bg-teal-600"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-800">CPSD Technologies Ltd</h3>
                    <p className="text-teal-600">IOT Engineer Intern</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <FiCalendar /> 10-2023 - 01-2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Club & Activities Section */}
            <div className="bg-white rounded-xl shadow-lg border border-teal-100 p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Volunteer Activities</h2>
              
              <div className="space-y-6">

                <div className="p-4 rounded-lg bg-gradient-to-br from-slate-50 to-teal-50">
                  <h3 className="font-bold text-gray-800">UNICEF Bangladesh</h3>
                  <p className="text-teal-600">Volunteer</p>
                  <p className="text-sm text-gray-600">2022 - Present</p>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-slate-50 to-teal-50">
                  <h3 className="font-bold text-gray-800">Orphan Paradise Organization</h3>
                  <p className="text-teal-600">Volunteer</p>
                  <p className="text-sm text-gray-600">2022 - Present</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
