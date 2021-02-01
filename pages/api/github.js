const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  //Followers request
  const followers = await octokit.request("/users/r-jo/followers?per_page=100");
  const followerCount = followers.data.length;

  //Stars request
  const stars = await octokit.request("/users/r-jo/repos");
  const starsCount = stars.data
    .filter((repo) => !repo.fork)
    .reduce((acc, item) => {
      return acc + item.stargazers_count;
    }, 0);

  //Repos request
  const reposStarred = await octokit.request("/users/r-jo/starred");
  const starredCount = reposStarred.data.length;

  //Orgs request
  const userOrgs = await octokit.request("/user/orgs");
  const orgsCount = userOrgs.data.length;

  //return
  return res.status(200).json({
    stars: starsCount,
    followers: followerCount,
    starred: starredCount,
    orgsCont: orgsCount,
  });
};
