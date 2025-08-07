// @flow strict

import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import BlogCard from "./components/homepage/blog/blog-card";
import Link from "next/link";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .map((item) => ({
      id: item.id,
      title: item.title,
      cover_image: item.cover_image,
      url: item.url,
      description: item.description,
      published_at: item.published_at,
      reading_time: item.reading_time_minutes,
      views: item.page_views_count ?? 0,
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
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-8 flex justify-center">
            <Link href="/blogs">
              <button className="bg-violet-500 hover:bg-violet-600 transition px-6 py-2 rounded-full text-sm text-white">
                View More
              </button>
            </Link>
          </div>
        </section>
        {/* BLOG SECTION END */}

        <ContactSection />
      </main>
    </div>
  );
}
