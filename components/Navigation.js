import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ActiveLink from "./ActiveLink";
import { motion } from "framer-motion";

import { MoonIcon, SunIcon } from "../public/images/icons/icons.js";

const item = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const NavLink = ({ destination, title }) => {
  return (
    <motion.div variants={item}>
      <ActiveLink activeClassName="active" href={destination}>
        <a className="nav-link text-boulder hover:text-thunder 
        dark:text-mobster dark:hover:text-cararra transition duration-300 ease-in-out">
          {title}
        </a>
      </ActiveLink>
    </motion.div>
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
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="sticky-nav sticky flex md:mt-8 mt-0 justify-center
      items-center w-full mx-auto bg-cararra dark:bg-thunder
      transition duration-300 ease-in-out"
      //   className={`sticky-nav md:mt-8 mt-0 sticky flex justify-center items-center
      // w-full p-6 pb-0 mx-auto transition duration-300 ease-in-out
      // bg-white dark:bg-shadow-900 dark:border-shadow-800 ${
      //   scroll ? "shadow-md dark:shadow-xl" : "shadow-none"
      // }`}
    >
      <div className="w-full max-w-3xl flex items-center justify-between p-6">
        <div className="h-9 w-9 relative cursor-pointer">
          <motion.button
            variants={item}
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center h-8 w-8 
                 transition duration-300 ease-in-out rounded-md
                 bg-lilac dark:bg-stormcloud"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4 text-thunder dark:text-cararra"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </svg>
            )}
          </motion.button>
        </div>
        <div className="space-x-4 flex">
          <NavLink destination="/" title="Home" />
          <NavLink destination="/projects" title="Projects" />
          <NavLink destination="/about" title="About" />
        </div>
      </div>
    </motion.nav>
  );
};
