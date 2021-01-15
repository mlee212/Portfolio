import React from "react";

export const Footer = () => {
  return (
    <footer className="md:flex justify-between max-w-4xl w-full py-8 my-0 md:my-8 mx-auto border-t-2 border-gray-200 dark:border-gray-600">
      <div className="w-full">
        <p className="font-medium text-lg text-gray-900 dark:text-gray-100 my-2">
          Find me elsewhere.
        </p>
        <a
          className="text-gray-700 md:text-lg text-md dark:text-gray-400 no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/r-jo"
        >
          Github
        </a>
        <br />
        <a
          className="text-gray-700 md:text-lg text-md dark:text-gray-400 no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rajbirjohar/"
        >
          Linkedin
        </a>
        <br />
        <a
          className="text-gray-700 md:text-lg text-md dark:text-gray-400 no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://leerob.io/"
        >
          /Inspo
        </a>
      </div>
      <div className="max-full">
        <p className="font-medium text-lg text-gray-900 dark:text-gray-100 my-2">
          Don't be a stranger.
        </p>
        <p className="text-gray-700 md:text-lg text-md dark:text-gray-400">
          I don't bite anything except really good food. I'm always up for
          making new friends. Learn more and feel free to contact me. <br />
          2021 © Rajbir Johar
        </p>
      </div>
    </footer>
  );
};
