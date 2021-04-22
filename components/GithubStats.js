import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Loader from "./GithubLoader";
import react, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Stat = ({ title, data, caption }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="https://github.com/r-jo" passHref={true}>
        <a target="_blank" rel="noopener noreferrer">
          <div
            className="rounded-lg p-6 bg-gray-100 hover-hover:hover:bg-gray-200 dark:bg-shadow-800 hover-hover:dark:hover:bg-shadow-700
    transition duration-300 ease-in-out"
          >
            <h4 className="font-medium text-gray-900 dark:text-shadow-100">
              {title}
            </h4>
            <p className="font-medium text-gray-800 dark:text-shadow-200">
              {data}{" "}
              <span className="font-normal text-gray-400 dark:text-shadow-300">
                {caption}
              </span>
            </p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default function GithubStats() {
  const [loading, setLoading] = useState(false);
  const { data } = useSWR("/api/github", fetcher);
  if (!data) {
    return <Loader show />;
  } else
    return (
      <div className="md:flex w-full space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 space-y-4">
          <Stat
            title="Github Stars"
            data={[data ? data.stars : "Loading"]}
            caption="stars collected."
          />
          <Stat
            title="Github Followers"
            data={[data ? data.followers : "Loading"]}
            caption="followers acquired."
          />
        </div>
        <div className="flex-1 space-y-4">
          <Stat
            title="Repos Starred"
            data={[data ? data.starred : "Loading"]}
            caption="repos saved."
          />
          <Stat
            title="Organizations"
            data={[data ? data.orgsCont : "Loading"]}
            caption="orgs contributed to."
          />
        </div>
      </div>
    );
}
