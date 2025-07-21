// @flow strict
"use client";

import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { FaCommentAlt } from 'react-icons/fa';
import { PiEyeLight } from "react-icons/pi"; // 👈 icon for views
import { useState } from 'react';

function BlogCard({ blog }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group shadow-md hover:shadow-violet-600/20 flex flex-col justify-between h-full max-h-[450px]">

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
      <div className="p-3 flex flex-col flex-1 justify-between">

        {/* Top: Views & Comments */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm mb-2">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <PiEyeLight />
              <span>{blog.page_views_count ?? 0}</span>
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

        {/* Bottom: Read More */}
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

export default BlogCard;
