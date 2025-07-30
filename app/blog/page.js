import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import BlogCard from "./components/homepage/blog/blog-card";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";

async function getBlogs() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.DEV_TO_API_KEY,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <HeroSection />
      <Projects />
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-5">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
      <Education />
      <Experience />
      <Skills />
    </main>
  );
}
