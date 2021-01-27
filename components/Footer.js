import React from "react";

export const Footer = () => {
  return (
    <footer className="max-w-4xl w-full py-8 my-8 mx-auto border-t-2 border-gray-200 dark:border-gray-600">
      <div className="md:flex justify-between py-4">
        <div className="flex-1">
          <p className="font-medium text-lg text-blue-700 dark:text-red-400 my-2">
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
        <div className="flex-1">
          <p className="font-medium text-lg text-blue-700 dark:text-red-400 my-2">
            Don't be a stranger.
          </p>
          <p className="text-gray-700 md:text-lg text-md dark:text-gray-400">
            I don't bite anything except really good food. I'm always up for
            making new friends.
          </p>
        </div>
        <div className="flex-1 md:ml-4">
          <p className="font-medium text-lg text-blue-700 dark:text-red-400 my-2">
            Privacy first.
          </p>
          <p className="text-gray-700 md:text-lg text-md dark:text-gray-400">
            This site only uses local storage for the theme. It does not track
            anything you do.
          </p>
        </div>
      </div>
      <div className="w-full text-center text-gray-700 dark:text-gray-400">
        <p>🛰️ 2021 © Rajbir Johar</p>
      </div>
    </footer>
  );
};
