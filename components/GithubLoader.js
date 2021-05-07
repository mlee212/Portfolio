import { motion } from "framer-motion";

//Skeleton Loader for Github cards
const Skeleton = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      transition={{ duration: 0.02 }}
      className="rounded-lg p-6 bg-gray-100 dark:bg-shadow-800 transition duration-300 ease-in-out"
    >
      <div className="animate-pulse bg-gray-300 dark:bg-shadow-700 rounded-md h-6 w-1/2 mb-2"></div>
      <div className="animate-pulse bg-gray-300 dark:bg-shadow-700 rounded-md h-6 w-2/3"></div>
    </motion.div>
  );
};

export default function Loader({ show }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return show ? (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="md:flex w-full my-4 space-y-4 md:space-y-0 md:space-x-4"
    >
      <div className="flex-1 space-y-4">
        <Skeleton />
        <Skeleton />
      </div>
      <div className="flex-1 space-y-4">
        <Skeleton />
        <Skeleton />
      </div>
    </motion.div>
  ) : null;
}
