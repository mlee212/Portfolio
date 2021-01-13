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
      </div>
    </Container>
  );
}
