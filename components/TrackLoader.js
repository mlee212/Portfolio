import { motion } from "framer-motion";

//Skeleton Loader for Song Tracks
const n = 10;

const Skeleton = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      className="flex flex-col items-baseline py-4 border-b border-gray-100 dark:border-stormcloud w-full"
    >
      <div className="animate-pulse bg-gray-200 dark:bg-stormcloud rounded-md h-6 w-1/3 mb-2"></div>
      <div className="animate-pulse bg-gray-200 dark:bg-stormcloud rounded-md h-6 w-1/2"></div>
    </motion.div>
  );
};

export default function Loader({ show }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return show ? (
    // ? [...Array(n)].map((e, i) =>
    <motion.div variants={container} initial="hidden" animate="show">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </motion.div>
  ) : null;
}
