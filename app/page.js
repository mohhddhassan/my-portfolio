import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
//     headers: {
//       "api-key": process.env.DEV_TO_API_KEY, 
//     },
//   });

  async function getBlogs() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.DEV_TO_API_KEY, // stored in .env
    },
    cache: "force-cache",
  });

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
      url: blog.url,
      description: item.description,
      published_at: item.published_at,
      reading_time: item.reading_time,
      views: item.views, 
    }));

  return filtered;
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div suppressHydrationWarning>
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog blogs={blogs} />
        <ContactSection />
      </main>
    </div>
  );
}
