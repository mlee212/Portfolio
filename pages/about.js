import React from "react";
import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import { motion } from "framer-motion";

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-4 font-bold text-4xl md:text-5xl text-blue-400 dark:text-red-400">
          What I'm About.
        </h1>
        <div className="space-y-2">
          <p>
            I'm a frontend web developer based in Southern California 😎
            studying Computer Science at the University of California at
            Riverside.
          </p>
          <p>
            I'm currently working on Citrushack, the largest hackathon offered
            by UCR. More updates soon to come!
          </p>
          <p>
            If I'm not coding, you can catch me perfecting the art of the
            grilled cheese 🥪 or building bespoke keyboards ⌨️. I'm typing on my
            Iron165 (my favorite board ever) with lubricated cream switches.
          </p>
          <p>
            You can also find me currently playing through{" "}
            <i>The Last of Us 2</i>.
          </p>
        </div>
        <h3 className="mt-16 mb-4 font-bold text-3xl md:text-4xl my-4 text-gray-900 dark:text-shadow-100">
          My Music
        </h3>
        <p>Here are the top ten songs I've been listening to, updated daily.</p>
        <TopTracks />
        <p className="mt-6">
          Find something we have in common? Let's talk about it. ☕
        </p>
      </div>
    </Container>
  );
}
