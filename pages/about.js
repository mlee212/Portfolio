import React from "react";
import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl pb-4 text-gray-900 dark:text-gray-50">
          What I'm About.
        </h1>
        <p>
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
        <h3 className="font-bold text-2xl md:text-4xl my-4 text-gray-900 dark:text-gray-50">
          My Music
        </h3>
        <p className="mb-4">
          Here are the top ten songs I've been listening to, updated daily.
        </p>
        <TopTracks />
        <p className="mt-6">
          Find something we have in common? Let's talk about it. ☕
        </p>
      </div>
    </Container>
  );
}
