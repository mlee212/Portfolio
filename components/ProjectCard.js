import Image from "next/image";
import { RightArrow } from "../public/images/icons/icons.js";
import { motion } from "framer-motion";

export default function ProjectCard({ title, children, image, demo, repo }) {
  return (
    <motion.figure whileHover={{ scale: 1.015 }} whileTap={{ scale: 1 }}>
      <figure
        className="flex bg-gray-100 hover:bg-gray-200 dark:bg-shadow-800
       dark:hover:bg-shadow-700 md:p-6 p-4 rounded-lg
       mb-4 transition duration-300 ease-in-out"
      >
        <div className="space-y-4">
          <figcaption className="flex items-center">
            <div className="w-16 h-16 md:w-28 md:h-28 relative flex md:items-start">
              <Image src={image} alt="Product Logo" layout="fill" />
            </div>
            <div className="flex-1 pl-4">
              <h1 className="font-medium text-lg text-gray-900 dark:text-shadow-100">
                {title}
              </h1>
              <p className="text-gray-800 dark:text-shadow-200">{children}</p>
              <div className="flex font-medium space-x-6">
                <a
                  href={demo}
                  rel="noreferrer"
                  rel="noopener"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500 dark:text-red-400 dark:hover:text-red-300"
                >
                  <span className="flex items-center">
                    Demo
                    <RightArrow />
                  </span>
                </a>
                <a
                  href={repo}
                  rel="noreferrer"
                  rel="noopener"
                  target="_blank"
                  className="flex items-center text-gray-500 hover:text-gray-600 dark:text-shadow-200 dark:hover:text-shadow-100"
                >
                  <span className="flex items-center">
                    Repo
                    <RightArrow />
                  </span>
                </a>
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
    </motion.figure>
  );
}
