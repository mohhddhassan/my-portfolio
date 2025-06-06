// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-[999] w-full bg-transparent backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Mohamed Hussain S
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {[
            { label: "ABOUT", href: "/#about" },
            { label: "EXPERIENCE", href: "/#experience" },
            { label: "SKILLS", href: "/#skills" },
            { label: "PROJECTS", href: "/#projects" },
            { label: "EDUCATION", href: "/#education" },
            { label: "BLOGS", href: "/#blogs" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={item.href}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
