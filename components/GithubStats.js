import useSWR from "swr";

async function fetcher(...arg) {
  const res = await fetch(...arg);
  return res.json();
}

export default function GithubStats() {
  const { data } = useSWR("/api/github", fetcher);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl mt-8 mb-4 text-title-light dark:text-title-dark">
        Github Dashboard
      </h3>
      <p className="text-text-light dark:text-text-dark mb-4 md:text-lg text-md">
          Check out my updated dashboard tracking my github statistics.
        </p>
      <div className="flex w-full space-x-4">
        <div className="flex-1 rounded-lg border border-grey3-light dark:border-grey3-dark dark:text-title-dark p-4">
          <h4 className="font-medium text-md md:text-lg ">Github Stars</h4>
          <p className="text-grey2-dark dark:text-grey2-light">{data ? data.stars : "Loading ⭐"}</p>
        </div>
        <div className="flex-1 rounded-lg border border-grey3-light dark:border-grey3-dark dark:text-title-dark p-4">
          <h4 className="font-medium text-md md:text-lg">Github Followers</h4>
          <p className="text-grey2-dark dark:text-grey2-light">{data ? data.followers : "Loading 👨‍💻"}</p>
        </div>
        <div className="flex-1 rounded-lg border border-grey3-light dark:border-grey3-dark dark:text-title-dark p-4">
          <h4 className="font-medium text-md md:text-lg">Repos Starred</h4>
          <p className="text-grey2-dark dark:text-grey2-light">{data ? data.starred : "Loading 📚"}</p>
        </div>
      </div>
    </>
  );
}
