'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const handleResumeClick = () => {
    window.open(personalData.resume, "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl">
        <Image
          src={personalData.profile}
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">{personalData.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{personalData.designation}</h2>
        <p className="text-lg text-gray-700 mb-6">{personalData.description}</p>

        <div className="flex justify-center gap-4 mb-6">
          <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
          </a>
          <a href={personalData.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-800 hover:text-black" />
          </a>
          <a href={personalData.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
          </a>
          <a href={`mailto:${personalData.email}`} target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="w-6 h-6 text-red-500 hover:text-red-600" />
          </a>
        </div>

        <button
          onClick={handleResumeClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View Resume
        </button>
      </div>
    </section>
  );
}