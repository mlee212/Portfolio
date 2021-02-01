import { data } from "autoprefixer";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function GithubStats() {
  const { data } = useSWR("/api/github", fetcher);
  if (!data) {
    return null;
  }

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl mt-8 mb-4 text-title-light dark:text-title-dark">
        Github Dashboard
      </h3>
      <p className="text-text-light dark:text-text-dark mb-4 md:text-lg text-md">
        My updated dashboard tracking my github statistics.
      </p>
      <div className="md:flex w-full space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 space-y-4">
          <div className="rounded-lg border border-grey3-light dark:border-grey6-dark dark:text-title-dark p-6 dark:bg-grey6-dark">
            <h4 className="font-medium text-md md:text-lg ">Github Stars</h4>
            <p className="text-grey2-dark dark:text-grey-light">
              {data ? data.stars : "Loading ⭐"} stars collected.
            </p>
          </div>
          <div className="rounded-lg border border-grey3-light dark:border-grey6-dark dark:text-title-dark p-6 dark:bg-grey6-dark">
            <h4 className="font-medium text-md md:text-lg">Github Followers</h4>
            <p className="text-grey2-dark dark:text-grey-light">
              {data ? data.followers : "Loading 👨‍💻"} followers acquired.
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="rounded-lg border border-grey3-light dark:border-grey6-dark dark:text-title-dark p-6 dark:bg-grey6-dark">
            <h4 className="font-medium text-md md:text-lg">Repos Starred</h4>
            <p className="text-grey2-dark dark:text-grey-light">
              {data ? data.starred : "Loading 📚"} repos saved.
            </p>
          </div>
          <div className="rounded-lg border border-grey3-light dark:border-grey6-dark dark:text-title-dark p-6 dark:bg-grey6-dark">
            <h4 className="font-medium text-md md:text-lg">Organizations</h4>
            <p className="text-grey2-dark dark:text-grey-light">
              {data ? data.orgsCont : "Loading 🧑‍💻"} orgs contributed to.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
