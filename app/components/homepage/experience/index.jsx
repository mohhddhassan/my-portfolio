// @flow strict
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace, BsChevronDown } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import GlowCard from "../../helper/glow-card";

// Dynamic import of AnimationLottie with SSR disabled
const AnimationLottie = dynamic(
  () => import("../../helper/animation-lottie"),
  {
    ssr: false,
  }
);

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Lottie Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Experience Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experienceItem, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <GlowCard
                    key={`${experienceItem.id}-${index}`}
                    identifier={`experience-${experienceItem.id}`}
                  >
                    <div
                      className="p-3 relative cursor-pointer"
                      onClick={() => toggleExperience(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleExperience(index);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                    >
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />

                      {/* Duration */}
                      <div className="flex justify-center relative z-10">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experienceItem.duration}
                        </p>
                      </div>

                      {/* Title + Company + Location */}
                      <div className="flex items-start gap-x-8 px-3 py-5 relative z-10">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                          <BsPersonWorkspace size={36} />
                        </div>

                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium">
                            {experienceItem.title}
                          </p>

                          <p className="text-sm sm:text-base text-gray-300">
                            {experienceItem.company}
                          </p>

                          {experienceItem.location && (
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                              {experienceItem.location}
                            </p>
                          )}
                        </div>

                        {/* Expand Icon */}
                        <div
                          className={`text-gray-400 mt-2 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                        >
                          <BsChevronDown size={18} />
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div
                        className={`relative z-10 overflow-hidden transition-all duration-300 ${isExpanded
                            ? "max-h-[600px] opacity-100 pb-4"
                            : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="border-t border-[#25213b] mx-3 pt-4">
                          <ul className="space-y-3 px-3">
                            {experienceItem.responsibilities?.map(
                              (responsibility, responsibilityIndex) => (
                                <li
                                  key={responsibilityIndex}
                                  className="flex gap-3 text-sm sm:text-base text-gray-300 leading-relaxed"
                                >
                                  <span className="text-[#16f2b3] mt-1.5">
                                    •
                                  </span>

                                  <span>{responsibility}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;