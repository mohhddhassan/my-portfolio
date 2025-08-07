"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCommentAlt } from "react-icons/fa";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`,
    {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5)
    .map((item) => ({
      id: item.id,
      title: item.title,
      cover_image: item.cover_image,
      url: item.url,
      description: item.description,
      published_at: item.published_at,
      reading_time_minutes: item.reading_time_minutes,
      comments_count: item.comments_count,
      page_views_count: item.page_views_count,
    }));

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />

        {/* BLOG SECTION START */}
        <section id="blog" className="py-12">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Latest Blogs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              // You can't use useState inside a map, so move image error handling into a component later if needed.
              return (
                <BlogCardInline key={blog.id} blog={blog} />
              );
            })}
          </div>
        </section>
        {/* BLOG SECTION END */}

        <ContactSection />
      </main>
    </div>
  );
}

// 👇 Define the inline blog card as a local component
function BlogCardInline({ blog }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group shadow-md hover:shadow-violet-600/20 flex flex-col justify-between h-full max-h-[450px]">
      {/* IMAGE */}
      <div className="h-32 sm:h-36 lg:h-40 w-full cursor-pointer overflow-hidden rounded-t-lg">
        {!imageError ? (
          <Image
            src={blog.cover_image}
            height={1080}
            width={1920}
            alt={blog.title}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300 border-b border-[#1d293a]"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-[#0f1629] text-white text-sm">
            image no longer exists
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3 flex flex-col flex-1 justify-between">
        {/* Views & Comments */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm mb-2">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <EyeIcon size={16} />
              <span>{blog.page_views_count ?? 0}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt size={14} />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>

        {/* Title */}
        <Link target="_blank" href={blog.url}>
          <p className="cursor-pointer text-base sm:text-lg text-white font-medium hover:text-violet-500 leading-snug line-clamp-2 mb-1">
            {blog.title}
          </p>
        </Link>

        {/* Read Time */}
        <p className="text-sm text-[#16f2b3] mb-1">{`${blog.reading_time_minutes} Min Read`}</p>

        {/* Description */}
        <p className="text-sm text-[#d3d8e8] line-clamp-2 mb-4">
          {blog.description}
        </p>

        {/* Read More Button */}
        <div className="mt-auto">
          <Link target="_blank" href={blog.url}>
            <button className="bg-violet-500 hover:bg-violet-600 transition px-4 py-1.5 rounded-full text-xs text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
