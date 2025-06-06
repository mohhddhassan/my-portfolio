// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { useState } from 'react';

function BlogCard({ blog }) {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = '/images/fallback-blog.jpg'; // Add this image to your public folder

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-2xl relative group flex flex-col justify-between h-full">
      <div className="h-44 lg:h-52 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={imageError ? fallbackImage : blog?.cover_image}
          onError={() => setImageError(true)}
          height={1080}
          width={1920}
          alt={blog.title || "Blog cover"}
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-[#16f2b3] text-xs sm:text-sm">
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
          <p className="mt-2 mb-1 cursor-pointer text-white text-base sm:text-lg font-semibold hover:text-violet-400 line-clamp-2">
            {blog.title}
          </p>
        </Link>

        <p className="text-xs text-[#16f2b3] mb-2">{`${blog.reading_time_minutes} Min Read`}</p>

        <p className="text-sm text-[#d3d8e8] line-clamp-3 mb-4">
          {blog.description}
        </p>

        <div className="mt-auto">
          <Link target="_blank" href={blog.url}>
            <button className="bg-violet-500 hover:bg-violet-600 transition-all text-white px-4 py-1.5 rounded-full text-xs shadow-sm">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
