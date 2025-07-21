// @flow strict
"use client";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { useState } from 'react';

function Blog({ blogs }) {
  const noBlogs = !blogs || blogs.length === 0;
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? sortedBlogs : sortedBlogs.slice(0, 3);

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Blur Background Circle */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Top Divider Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Blog Cards */}
      {noBlogs ? (
        <div className="text-center text-[#d3d8e8] text-sm md:text-base lg:text-lg py-12 px-4">
          <p className="mb-4">
            I&apos;m currently working on writing blog posts where I&apos;ll share my learning journey,
            project insights, and tech tips.
          </p>
          <p>Stay tuned!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            {visibleBlogs.map((blog, i) => (
              blog?.cover_image && <BlogCard blog={blog} key={i} />
            ))}
          </div>

          {/* View More / View Less Button */}
          <div className="flex justify-center mt-5 lg:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out"
            >
              <span>{showAll ? 'View Less' : 'View More'}</span>
              <FaArrowRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Blog;
