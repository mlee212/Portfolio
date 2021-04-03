import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import ActiveLink from "./ActiveLink";

import { Footer } from "./Footer";

import { MoonIcon, SunIcon } from "../public/images/icons/icons.js";

export const siteTitle = "Rajbir Johar | Portfolio";

export default function Container({ children }) {
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
    <html lang="en">
      <body
        className="transition duration-300 ease-in-out 
           bg-primary-light dark:bg-primary-dark"
      >
        <Head>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-128.png"
            sizes="128x128"
          />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta
            name="msapplication-square70x70logo"
            content="mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="mstile-310x310.png"
          />
          <meta
            name="description"
            content="A portfolio for my neat projects and ideas."
          />
          <meta property="og:image" content="/images/icon_logo.png" />

          <meta name="og:title" content={siteTitle} />
        </Head>
        <nav
          className="sticky-nav sticky flex justify-center items-center  
        w-full p-6 pb-0 my-0 md:my-8 mx-auto transition duration-100 ease-in-out 
          bg-primary-light dark:bg-primary-dark"
        >
          <div
            className={`w-full max-w-4xl flex items-center justify-between transition duration-300 ease-in-out border-b-2 pb-6 ${
              scroll
                ? "border-border-light dark:border-border-dark"
                : "border-primary-light dark:border-primary-dark"
            }`}
          >
            <div className="h-9 w-9 relative cursor-pointer">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="flex items-center justify-center h-9 w-9 bg-card-light dark:bg-card-dark rounded-md"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 text-text-light dark:text-text-dark"
                  >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </svg>
                )}
              </button>
            </div>
            <div className="space-x-2">
              <ActiveLink activeClassName="active" href="/">
                <a className="nav-link px-3 py-2 text-link-light dark:text-link-dark">
                  Home
                </a>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/projects">
                <a className="nav-link px-3 py-2 text-link-light dark:text-link-dark">
                  Projects
                </a>
              </ActiveLink>
              <ActiveLink activeClassName="active" href="/about">
                <a className="nav-link px-3 py-2 text-link-light dark:text-link-dark">
                  About
                </a>
              </ActiveLink>
            </div>
          </div>
        </nav>

        <main className="flex flex-col w-full max-w-4xl mx-auto p-6">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
