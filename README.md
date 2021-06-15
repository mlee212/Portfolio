## Portfolio

> Author: Rajbir Johar

## Purpose

This repo/project is meant to serve as an extension of my experiences and projects. I strive for a minimal, yet concise design which serves only the neccessary information. There is nothing worse than having to read through blocks of random and off-tangent writing.

## Structure

The structure follows the typical Next.JS default structure.

```bash
├── master
│   ├── components
│   │   ├── Header.js
│   │   ├── Layout.js
│   │   ├── ...
│   ├── pages
│   │   ├── index.js
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── api
│   │   │   ├── github.js
│   │   │   ├── spotify.js
│   │   ├── ...
│   ├── components
│   │   ├── github.js
│   │   ├── spotify.js
│   ├── lib
│   │   ├── fetcher.js
│   │   ├── spotify.js
│   ├── styles
│   │   ├── global.css
│   │   ├── header.module.css
│   │   ├── layout.module.css
│   │   ├── ...
│   ├── ...
├── develop
│   │   ├── pages
│   │   ├── components
│   │   ├── lib
│   │   ├── styles
│   ├── ...
└── .gitignore
```

Components are within the `components` folder and the pages are within the `pages` folder.

The styling is all done via `css modules` to create clean designs and clean code structure.

Imports are done via absolute imports so there is no need to `../../../..` your way back to a parent folder and down another nested folder.

The `master` is for production and the `staging` branch is for staging and developing. When making PRs please make them for the `develop` branch and assign me for code review.

## Stack

<img alt="Next JS" src="https://img.shields.io/badge/nextjs-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" /> <img alt="GitHub" src="https://img.shields.io/badge/GithHub%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Spotify" src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white" />

This project has been bootstrapped using `yarn create next-app` and makes api calls to Github's and Spotify's public APIs. You will need to place your own secret `TOKENS` in your own `.env.local` file and of course, do not commit your secrets. Environment variables are how we access secured and private data from third party APIs. This allows us to fetch/read/write/delete data while ensuring that no one else has access to it asides from those authorized.

Instructions on how to acquire said `TOKENS` are as followed:

- Github

  1. Try cloning/forking is repo on your own machine. Next, head to - Github account settings > Developer Settings > Personal Tokens > Generate New Token. Then check the **user box.**
  2. Then within the root of the project, open up a terminal and type `touch .env.local` to create a new `.env.local` file. Open up the file and paste in your new secret key like shown below without `<>`.

  `GITHUB_AUTH_TOKEN=<SECRET-GH-TOKEN>`

  3. Once you've completed the above steps, your copy of this website should generate statistics and projects from your own Github profile.

- Notion

  1. Follow the official [Notion Guide](https://developers.notion.com/docs/getting-started) and acquire your `NOTION_TOKEN` and `NOTION_DATABASE_ID` and place within the `.env.local` file.

- Spotify

  1. Log into your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
  2. Click **Create an App**.
  3. Fill out the name and description and click **create**.
  4. Click **Show Client Secret**.
  5. Save your Client ID and Secret somewhere safe. You will need these later on.
  6. Click **Edit Settings**.
  7. Add `http://localhost:3000` as a redirect URI. (You would also add your production domain if you want this to work on your live website, `https://example.com`).

  You have properly set up a Spotify app and the correct credentials to make your requests.

  Since we only need to grant access once, we will follow the [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow).

  8. Use the example URL below to get an idea of what it might look like. Go ahead and swap out the `client_id` and scopes for your own. Then paste this within your browser.

  ```Javascript
  https://accounts.spotify.com/authorize?client_id=8e94bde7dd
  b84a1f7a0e51bf3bc95be8&response_type=code&redirect_uri=http
  %3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20
  user-top-read
  ```

  9. After authorization, you'll be sent back to `redirect_uri`. Within the URL, there is a `code` query parameter. Save the value without `<>`.

  ```
  http://localhost:3000/callback?code=<NApCCg..BkWtQ>
  ```

  10. Afterwards, you will need to retrieve the refresh token by generating a Base64 encoded string containing the client ID and secret you got from earlier. Use this [encoding tool](https://www.base64encode.org) to encode it online. The format should be `client_id:client_secret`. Replace the values with your new encoded string and the `code` parameter from the last step without the `<>`.

  ```
  curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
  -d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
  %2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
  ```

  11. This returns a JSON response containing a `refresh_token`. This token is valid indefinitely unless you revoke access, so we'll want to save this in an environment variable.

  12. Finally, place your `client_id`, `client_secret`, and `refresh_token` within the `.env.local` file.

I have included a `.env.example` file which you will just need to rename to `.env.local`.
