import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ActiveLink from "./ActiveLink";
import { motion, AnimatePresence } from "framer-motion";

import { MoonIcon, SunIcon } from "../public/images/icons/icons.js";

const NavLink = ({ destination, title }) => {
  return (
    <ActiveLink activeClassName="active" href={destination}>
      <a className="nav-link px-3 py-2 text-gray-400 hover:text-gray-900 dark:text-shadow-300 dark:hover:text-shadow-100 font-medium transition duration-300 ease-in-out">
        {title}
      </a>
    </ActiveLink>
  );
};

export const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  useEffect(function mount() {
    window.addEventListener("scroll", changeNav);
    return function unMount() {
      window.removeEventListener("scroll", changeNav);
    };
  });

  return (
    <nav
      className="sticky-nav md:mt-8 mt-0 sticky flex justify-center items-center 
        w-full p-6 pb-0 mx-auto bg-white dark:bg-shadow-900 transition duration-300 ease-in-out"
      //   className={`sticky-nav md:mt-8 mt-0 sticky flex justify-center items-center
      // w-full p-6 pb-0 mx-auto transition duration-300 ease-in-out
      // bg-white dark:bg-shadow-900 dark:border-shadow-800 ${
      //   scroll ? "shadow-md dark:shadow-xl" : "shadow-none"
      // }`}
    >
      <div className="w-full max-w-4xl flex items-center justify-between pb-6">
        <div className="h-9 w-9 relative cursor-pointer">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center h-8 w-8 bg-gray-100 dark:bg-shadow-700
                 hover:bg-gray-200 dark:hover:bg-shadow-600
                 transition duration-300 ease-in-out rounded-md"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-shadow-100"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </svg>
            )}
          </button>
        </div>
        <div className="space-x-2 flex">
          <NavLink destination="/" title="Home" />
          <NavLink destination="/projects" title="Projects" />
          <NavLink destination="/about" title="About" />
        </div>
      </div>
    </nav>
  );
};
