// @flow strict
"use client";

import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { useState } from 'react';

function BlogCard({ blog }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group shadow-md hover:shadow-violet-600/20">

      {/* IMAGE */}
      <div className="h-32 sm:h-36 lg:h-40 w-full cursor-pointer overflow-hidden rounded-t-lg">
        {!imageError ? (
          <Image
            src={blog?.cover_image}
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
      <div className="p-2 sm:p-3 flex flex-col">

        {/* Reactions & Comments */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm mb-1">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>

        {/* Title */}
        <Link target="_blank" href={blog.url}>
          <p className="my-2 lg:my-2 cursor-pointer text-base sm:text-lg text-white font-medium hover:text-violet-500 leading-snug line-clamp-2">
            {blog.title}
          </p>
        </Link>

        {/* Read Time */}
        <p className="mb-2 text-sm text-[#16f2b3]">{`${blog.reading_time_minutes} Min Read`}</p>

        {/* Description with fade */}
        <div className="relative">
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
            {blog.description}
          </p>
          <div className="absolute bottom-3 left-0 w-full h-6 bg-gradient-to-t from-[#1b203e] to-transparent pointer-events-none"></div>
        </div>

        {/* Read More Button */}
        <div>
          <Link target="_blank" href={blog.url}>
            <button className="bg-violet-500 hover:bg-violet-600 transition px-3 py-1.5 rounded-full text-xs text-white">
              Read More
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BlogCard;
