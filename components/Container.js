import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import ActiveLink from "./ActiveLink";

import { Footer } from "./Footer";

export const siteTitle = "Rajbir Johar | Portfolio";

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <html lang="en" className="bg-primary-light dark:bg-primary-dark transition duration-500 ease-in-out">
    <body className="bg-primary-light dark:bg-primary-dark transition duration-500 ease-in-out">
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
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
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
        <meta
          property="og:image"
          content="/images/icon_logo.png"
        />

        <meta name="og:title" content={siteTitle} />
      </Head>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-primary-light dark:bg-primary-dark bg-opacity-80 transition duration-500 ease-in-out">
      <div className="h-10 w-10 relative cursor-pointer">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="flex items-center justify-center h-10 w-10 bg-grey6-light dark:bg-grey5-dark rounded-md"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        </div>
        <div>
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link p-3 text-gray-900 dark:text-gray-100">
              Home
            </a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/projects">
            <a className="nav-link p-3 text-gray-900 dark:text-gray-100">
              Projects
            </a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/about">
            <a className="nav-link p-3 text-gray-900 dark:text-gray-100">
              About
            </a>
          </ActiveLink>
        </div>
      </nav>
      <main className="flex flex-col justify-center px-6">
        {children}
        <Footer />
      </main>
    </body>
    </html>
  );
}
