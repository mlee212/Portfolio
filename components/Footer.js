import React from "react";
import Link from "next/link";

const RouteLink = ({ title, destination }) => {
  return (
    <Link href={destination}>
      <a className="md:text-lg text-md no-underline hover:underline">{title}</a>
    </Link>
  );
};

const ExtLink = ({ title, destination }) => {
  return (
    <a
      className="md:text-lg text-md no-underline hover:underline"
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
    <footer className="max-w-4xl w-full border-t-2 border-border-light dark:border-border-dark py-6 my-8 mx-auto transition duration-300 ease-in-out">
      <div className="md:flex space-y-8 md:space-y-0 py-4">
        <div className="flex-1">
          <p className="font-medium text-lg text-title-light dark:text-title-dark my-2">
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
          <p className="font-medium md:text-lg text-md text-lg my-2">Don't be a stranger.</p>
          <p className="text-text-light dark:text-text-dark text-opacity-80 md:text-lg text-md">
            I don't bite anything except really good food. I'm always up for
            making new friends.
          </p>
        </div>
        <div className="flex-1 md:ml-4">
          <p className="font-medium md:text-lg text-md text-lg my-2">Privacy first.</p>
          <p className="text-text-light dark:text-text-dark text-opacity-80 md:text-lg text-md">
            This site only uses local storage for the theme. It does not track
            anything you do.
          </p>
        </div>
      </div>
      <div className="md:text-lg text-md w-full text-center text-text-light dark:text-text-dark text-opacity-80">
        <p>2021 © Rajbir Johar</p>
      </div>
    </footer>
  );
};
