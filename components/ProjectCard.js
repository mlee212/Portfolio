import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ title, children, image, href }) {
  return (
    <motion.figure
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.02 }}
      className="flex bg-gray-100 hover-hover:hover:bg-gray-200 dark:bg-shadow-800
       hover-hover:dark:hover:bg-shadow-700 p-4 rounded-lg
       mb-4 transition duration-200 ease-in-out"
    >
      <div className="space-y-4">
        <figcaption className="flex items-center">
          <div className="w-16 h-16 md:w-28 md:h-28 relative flex md:items-start">
            <Image src={image} alt="Product Logo" layout="fill" />
          </div>
          <div className="flex-1 pl-4">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-lg text-blue-500 dark:text-red-400 hover:underline cursor-pointer"
            >
              {title}
            </a>
            <p className="text-gray-800 dark:text-shadow-200">{children}</p>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}
