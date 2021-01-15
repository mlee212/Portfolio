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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white">
          What I'm About.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          I'm a frontend web developer based in Southern California 😎 studying
          Computer Science at the University of California at Riverside. I'm
          currently working on Citrushack, the largest hackathon offered by UCR.
          More updates soon to come!
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-16 md:text-lg text-md">
          If I'm not coding, you can catch me perfecting the art of the grilled
          cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool
          of trade, am I right? I'm typing on my Iron165 (my favorite board
          ever) with lubricated cream switches. You can also find me currently
          playing through <i>The Last of Us 2</i>.
        </p>
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-black dark:text-white">
          My Music Right Now
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          The top ten songs I've been listening to. Updated Daily.
        </p>
        <TopTracks />
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-black dark:text-white">
          Favorite Tech
        </h3>
        <div className="flex content-between w-full">
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-bold mb-4  text-gray-900 dark:text-gray-100">
              Productivity
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
              <ul>
                <li>M1 Mac Mini (2020) (New Addition!)</li>
                <li>16" Macbook Pro (2019)</li>
                <li>11" iPad Pro (2018)</li>
                <li>iPhone 12 Pro</li>
                <li>LG 34" Ultrawide</li>
              </ul>
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-bold mb-4  text-gray-900 dark:text-gray-100">
              Downtime
            </h3>
            <p className="text-gray-600 dark:text-gray-400 md:text-lg text-md">
              <ul>
                <li>Playstation 5 (Currently playing <i>The Last of Us 2</i>)</li>
                <li>Xbox Series-X (Currently playing <i>Assassin's Creed Valhalla</i>)</li>
                <li>LG 55" CX</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
