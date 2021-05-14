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
      className="rounded-lg bg-cararra dark:bg-thunder border-2 border-lilac dark:border-stormcloud p-4 mb-4"
    >
      <div className="animate-pulse bg-lilac dark:bg-stormcloud rounded-md h-6 w-1/2 mb-2"></div>
      <div className="animate-pulse bg-lilac dark:bg-stormcloud rounded-md h-6 w-2/3 mb-2"></div>
      <div className="animate-pulse bg-lilac dark:bg-stormcloud rounded-md h-6 w-1/4"></div>
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full space-y-4 mb-4"
    >
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </motion.div>
  ) : null;
}