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
│   │   │   ├── nowplaying.js
│   │   │   ├── toptracks.js
│   │   ├── ...
│   ├── lib
│   │   ├── fetcher.js
│   │   ├── notion.js
│   │   ├── spotify.js
│   ├── styles
│   │   ├── global.css
│   │   ├── header.module.css
│   │   ├── layout.module.css
│   │   ├── ...
│   ├── ...
├── staging
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

The `master` is for production and the `staging` branch is for staging and developing. When making PRs please make them for the `staging` branch and assign me for code review.

## Stack

<img alt="Next JS" src="https://img.shields.io/badge/nextjs-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" /> <img alt="GitHub" src="https://img.shields.io/badge/GithHub%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Spotify" src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white" />

This project has been bootstrapped using `yarn create next-app` and makes api calls to Github's, Notion's, and Spotify's public APIs. You will need to place your own secret `TOKENS` in your own `.env.local` file and of course, do not commit your secrets.
