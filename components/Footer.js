import React from "react";
import Link from "next/link";

const RouteLink = ({ title, destination }) => {
  return (
    <Link href={destination} passHref>
      <a className="text-md text-teal-600 dark:text-red-400 hover:underline">
        {title}
      </a>
    </Link>
  );
};

const ExtLink = ({ title, destination }) => {
  return (
    <a
      className="text-md text-teal-600 dark:text-red-400 hover:underline"
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
    <footer className="px-6 mx-auto text-gray-800 dark:text-shadow-200 text-md leading-7">
      <div className="border-t-2 border-gray-100 dark:border-shadow-700 max-w-4xl mx-auto md:flex py-6 space-y-8 md:space-y-0">
        <div className="flex-1">
          <p className="font-medium text-lg text-gray-900 dark:text-shadow-100 my-2">
            Find me elsewhere.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-16 md:space-y-0 space-y-2">
            <div className="flex flex-col space-y-2">
              <RouteLink title="Home" destination="/" />
              <RouteLink title="Projects" destination="/projects" />
              <RouteLink title="About" destination="/about" />
            </div>
            <div className="flex flex-col space-y-2">
              <ExtLink title="Github" destination="https://github.com/r-jo" />
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
          <p className="font-medium text-md text-lg my-2 text-gray-900 dark:text-shadow-100">
            Don't be a stranger.
          </p>
          <p>
            I don't bite anything except really good food. I'm always up for
            making new friends.
          </p>
        </div>
        <div className="flex-1 md:ml-4">
          <p className="font-medium text-md text-lg my-2 text-gray-900 dark:text-shadow-100">
            Privacy first.
          </p>
          <p>
            This site only uses local storage for the theme. It does not track
            anything you do.
          </p>
        </div>
      </div>
      <div className="text-center mb-12">
        <p>2021 © Rajbir Johar</p>
      </div>
    </footer>
  );
};
