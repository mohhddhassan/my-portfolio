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
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        {!imageError ? (
          <Image
            src={blog?.cover_image}
            height={1080}
            width={1920}
            alt={blog.title}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-[#0f1629] text-white text-sm">
            image no longer exists
          </div>
        )}
      </div>

      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          {/* <p>{timeConverter(blog.published_at)}</p> */}
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

        <Link target="_blank" href={blog.url}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {blog.title}
          </p>
        </Link>

        <p className="mb-2 text-sm text-[#16f2b3]">{`${blog.reading_time_minutes} Min Read`}</p>

        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog.description}
        </p>

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
