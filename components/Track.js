// Full Credit to Lee Robinson
import { motion } from "framer-motion";

export default function Track(track) {
  return (
    <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="flex flex-row items-baseline border-b-2 border-gray-100 dark:border-shadow-700 max-w-3xl
     w-full justify-items-center hover-hover:hover:bg-gray-100 hover-hover:dark:hover:bg-shadow-700 px-4 py-4 transition duration-300 ease-in-out"
        >
          <p>{track.ranking}</p>
          <div className="flex flex-col pl-3">
            <a
              className="font-medium text-gray-900 dark:text-shadow-100 truncate w-60 sm:w-96 md:w-full text-md hover:underline"
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {track.title}
            </a>
            <p className="truncate w-60 sm:w-96 md:w-full text-gray-400 dark:text-shadow-300">
              {track.artist}
            </p>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
