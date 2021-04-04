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
        <div className="md:flex w-full space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 space-y-4">
            <div className="rounded-lg p-6 bg-shade-light dark:bg-darkcard shadow-xl">
              <h4 className="font-medium text-md md:text-lg ">Github Stars</h4>
              <p>{data ? data.stars : "Loading ⭐"} stars collected.</p>
            </div>
            <div className="rounded-lg p-6 bg-shade-light dark:bg-darkcard shadow-xl">
              <h4 className="font-medium text-md md:text-lg">
                Github Followers
              </h4>
              <p>{data ? data.followers : "Loading 👨‍💻"} followers acquired.</p>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-lg p-6 bg-shade-light dark:bg-darkcard shadow-xl">
              <h4 className="font-medium text-md md:text-lg">Repos Starred</h4>
              <p>{data ? data.starred : "Loading 📚"} repos saved.</p>
            </div>
            <div className="rounded-lg p-6 bg-shade-light dark:bg-darkcard shadow-xl">
              <h4 className="font-medium text-md md:text-lg">Organizations</h4>
              <p>
                {data ? data.orgsCont : "Loading 🧑‍💻"} orgs contributed to.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
