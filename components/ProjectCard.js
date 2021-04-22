import Image from "next/image";
import { RightArrow } from "../public/images/icons/icons.js";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ title, children, image, demo, repo }) {
  return (
    <motion.figure whileHover={{ scale: 1.015 }} whileTap={{ scale: 1 }} transition={{duration: 0.3}}>
      <Link href={demo} passHref={true}>
        <a target="_blank" rel="noopener noreferrer">
      <figure
        className="flex bg-gray-100 hover-hover:hover:bg-gray-200 dark:bg-shadow-800
       hover-hover:dark:hover:bg-shadow-700 p-4 rounded-lg
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

            </div>
          </figcaption>
        </div>
      </figure>
      </a>
      </Link>
    </motion.figure>
  );
}
