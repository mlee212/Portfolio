// Full Credit to Lee Robinson
import { motion } from "framer-motion";

export default function Track(track) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.015 }}
      className="flex flex-row items-baseline mb-2 max-w-3xl rounded-md
                    w-full bg-gray-100 dark:bg-shadow-800 hover-hover:hover:bg-gray-200 
                    hover-hover:dark:hover:bg-shadow-700 p-4 transition duration-150 ease-in-out"
    >
      <p>{track.ranking}</p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium truncate w-60 sm:w-96 md:w-full text-md text-teal-600 dark:text-red-400 hover:underline"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="truncate w-60 sm:w-96 md:w-full">
          {track.artist}
        </p>
      </div>
    </motion.div>
  );
}
