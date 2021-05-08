import React from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const NavLink = ({ destination, title }) => {
  return (
    <ActiveLink activeClassName="active" href={destination}>
      <a
        className="nav-link text-boulder hover:text-thunder
         dark:text-mobster dark:hover:text-cararra transition duration-300 ease-in-out"
      >
        {title}
      </a>
    </ActiveLink>
  );
};

const ExtLink = ({ title, destination }) => {
  return (
    <a
      className="text-boulder hover:text-thunder
      dark:text-mobster dark:hover:text-cararra transition duration-300 ease-in-out"
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
    <footer className="p-6 pb-24 mx-auto max-w-3xl leading-7">
      <div className="flex-1">
        <h2 className="font-bold text-2xl text-thunder dark:text-cararra">Elsewhere</h2>
        <p className="my-2 mb-4">I don't bite anything except really good food.</p>
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-2">
          <NavLink destination="/" title="Home" />
          <NavLink destination="/projects" title="Projects" />
          <NavLink destination="/about" title="About" />
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
    </footer>
  );
};
