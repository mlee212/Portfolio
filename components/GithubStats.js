import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Loader from "./Loader";
import react, { useState } from "react";

export default function GithubStats() {
  const [loading, setLoading] = useState(false);
  const { data } = useSWR("/api/github", fetcher);
  if (!data) {
    return <Loader show />;
  } else
    return (
      <>
        <div className="md:flex w-full space-y-6 md:space-y-0 md:space-x-6 ">
          <div className="flex-1 space-y-6">
            <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark transition duration-300 ease-in-out">
              <h4 className="font-medium text-md md:text-lg ">Github Stars</h4>
              <p className="text-text-light dark:text-text-dark text-opacity-70">
                {data ? data.stars : "Loading ⭐"} stars collected.
              </p>
            </div>
            <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark transition duration-300 ease-in-out">
              <h4 className="font-medium text-md md:text-lg">
                Github Followers
              </h4>
              <p className="text-text-light dark:text-text-dark text-opacity-70">
                {data ? data.followers : "Loading 👨‍💻"} followers acquired.
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark transition duration-300 ease-in-out">
              <h4 className="font-medium text-md md:text-lg">Repos Starred</h4>
              <p className="text-text-light dark:text-text-dark text-opacity-70">
                {data ? data.starred : "Loading 📚"} repos saved.
              </p>
            </div>
            <div className="rounded-lg p-6 bg-card-light dark:bg-card-dark transition duration-300 ease-in-out">
              <h4 className="font-medium text-md md:text-lg">Organizations</h4>
              <p className="text-text-light dark:text-text-dark text-opacity-70">
                {data ? data.orgsCont : "Loading 🧑‍💻"} orgs contributed to.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
