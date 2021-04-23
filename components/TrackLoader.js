import { motion } from "framer-motion";

//Skeleton Loader for Song Tracks
const n = 10;

const Skeleton = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div variants={item}>
      <div
        className="items-baseline rounded-md flex flex-col
        w-full bg-gray-100 dark:bg-shadow-800 
     max-w-3xl w-full justify-items-center p-4 mb-2"
      >
        <div className="animate-pulse bg-gray-300 dark:bg-shadow-700 rounded-md h-6 w-1/3 mb-2"></div>
        <div className="animate-pulse bg-gray-300 dark:bg-shadow-700 rounded-md h-6 w-1/2"></div>
      </div>
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
