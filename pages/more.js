import React from "react";
import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import Timeline from "../components/Timeline";

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
        <Timeline />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-4 text-black dark:text-white">
          My Music Right Now
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          The top ten songs I've been listening to. Updated Daily.
        </p>
        <TopTracks />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-4 text-black dark:text-white">
          Favorite Tech
        </h3>
        <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
          Productivity
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          <ul>
            <li>M1 Mac Mini (2020)</li>
            <li>16" Macbook Pro (2019)</li>
            <li>11" iPad Pro (2018)</li>
            <li>iPhone 12 Pro</li>
            <li>LG 34" Ultrawide</li>
          </ul>
        </p>
        <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
          Downtime
        </h3>
        <p className="text-gray-600 dark:text-gray-400 md:text-lg text-md">
          <ul>
            <li>Playstation 5</li>
            <li>Xbox Series-X</li>
            <li>LG 55" CX</li>
          </ul>
        </p>
      </div>
    </Container>
  );
}
