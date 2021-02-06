import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="max-w-4xl w-full py-8 my-8 mx-auto border-t border-border-light dark:border-border-dark">
      <div className="md:flex space-y-8 md:space-y-0 py-4">
        <div className="flex-1">
          <p className="font-medium text-lg text-title-light dark:text-title-dark my-2">
            Find me elsewhere.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-16 md:space-y-0 space-y-2">
            <div className="flex flex-col space-y-2">
              <Link href="/">
                <a className="md:text-lg text-md text-link-light dark:text-link-dark no-underline hover:underline">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="md:text-lg text-md text-link-light dark:text-link-dark no-underline hover:underline">
                  About
                </a>
              </Link>
              <a
                className="md:text-lg text-md text-link-light dark:text-link-dark no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/r-jo"
              >
                Github
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                className="md:text-lg text-md text-link-light dark:text-link-dark no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rajbirjohar/"
              >
                Linkedin
              </a>
              <a
                className="md:text-lg text-md text-link-light dark:text-link-dark no-underline hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/RajbirJohar"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-medium text-lg text-title-light dark:text-title-dark my-2">
            Don't be a stranger.
          </p>
          <p className="text-subtext-light dark:text-subtext-dark md:text-lg text-md">
            I don't bite anything except really good food. I'm always up for
            making new friends.
          </p>
        </div>
        <div className="flex-1 md:ml-4">
          <p className="font-medium text-lg text-title-light dark:text-title-dark my-2">
            Privacy first.
          </p>
          <p className="text-subtext-light dark:text-subtext-dark md:text-lg text-md">
            This site only uses local storage for the theme. It does not track
            anything you do.
          </p>
        </div>
      </div>
      <div className="w-full text-center text-subtext-light dark:text-subtext-dark">
        <p>🛰️ 2021 © Rajbir Johar</p>
      </div>
    </footer>
  );
};
