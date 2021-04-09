import React from "react";
import Link from "next/link";

const RouteLink = ({ title, destination }) => {
  return (
    <Link href={destination}>
      <a className="text-md no-underline hover:underline text-gray-900 dark:text-gray-50">{title}</a>
    </Link>
  );
};

const ExtLink = ({ title, destination }) => {
  return (
    <a
      className="text-md no-underline hover:underline text-gray-900 dark:text-gray-50"
      target="_blank"
      rel="noopener noreferrer"
      href={destination}
    >
      {title}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-border-dark px-6 py-10 mx-auto transition duration-300 ease-in-out text-gray-500 dark:text-gray-400 text-md leading-7">
      <div className="max-w-4xl mx-auto md:flex space-y-8 md:space-y-0">
        <div className="flex-1">
          <p className="font-medium text-lg text-gray-900 dark:text-gray-50 my-2">
            Find me elsewhere.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-16 md:space-y-0 space-y-2">
            <div className="flex flex-col space-y-2">
              <RouteLink title="Home" destination="/" />
              <RouteLink title="About" destination="/about" />
              <ExtLink title="Github" destination="https://github.com/r-jo" />
            </div>
            <div className="flex flex-col space-y-2">
              <ExtLink
                title="LinkedIn"
                destination="https://www.linkedin.com/in/rajbirjohar/"
              />
              <ExtLink
                title="Twitter"
                destination="https://twitter.com/RajbirJohar"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-medium text-md text-lg my-2 text-gray-900 dark:text-gray-50">Don't be a stranger.</p>
          <p>
            I don't bite anything except really good food. I'm always up for
            making new friends.
          </p>
        </div>
        <div className="flex-1 md:ml-4">
          <p className="font-medium text-md text-lg my-2 text-gray-900 dark:text-gray-50">Privacy first.</p>
          <p>
            This site only uses local storage for the theme. It does not track
            anything you do.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>2021 © Rajbir Johar</p>
      </div>
    </footer>
  );
};
