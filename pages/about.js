import React from "react";
import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import GithubStats from "../components/GithubStats";
import { MusicIcon } from "../public/images/icons/icons";

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mt-4">
        <h1 className="font-bold text-3xl md:text-5xl pb-4 text-title-light dark:text-title-dark">
          What I'm About.
        </h1>
        <p className="text-text-light dark:text-text-dark mb-4 md:text-lg text-md">
          I'm a frontend web developer based in Southern California 😎 studying
          Computer Science at the University of California at Riverside.
          <br />
          <br /> I'm currently working on Citrushack, the largest hackathon
          offered by UCR. More updates soon to come!
          <br />
          <br />
          If I'm not coding, you can catch me perfecting the art of the grilled
          cheese 🥪 or building bespoke keyboards ⌨️. I'm typing on my Iron165
          (my favorite board ever) with lubricated cream switches. <br />
          <br />
          You can also find me currently playing through <i>The Last of Us 2</i>
          .
        </p>
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-title-light dark:text-title-dark">
          My Music
        </h3>
        <p className="text-text-light dark:text-text-dark mb-4 md:text-lg text-md">
          Here are the top ten songs I've been listening to, updated daily.
        </p>
        <TopTracks />
        <GithubStats />
        <p className="text-text-light dark:text-text-dark my-4 md:text-lg text-md">
          Find something we have in common? Let's talk about it. ☕
        </p>
      </div>
    </Container>
  );
}
