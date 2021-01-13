import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I'm Rajbir.
        </h1>
        <h2 className="text-black dark:text-gray-400 mb-16 md:text-lg text-md">
          Frontend Developer <br />
          Based in Southern California
        </h2>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          What I'm About.
        </h3>
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
          playing through Ghost of Tsushima.
        </p>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Current Projects
        </h3>
        <ProjectCard
          image="/images/citrushack.png"
          children="The website used by hundreds of students to interact and participate in the annual Citrushack hackathon. Coming Spring 2021."
          href="https://citrushack.com"
          category="Citrushack"
          date="Hackathon"
        />
        <ProjectCard
          image="/images/biohack2021.png"
          children="The website used by hundreds of students to interact and participate in the annual Biohack hackathon. Coming Spring 2021."
          href="https://biohackucr.com/#/"
          category="Biohack"
          date="Hackathon"
        />
        <ProjectCard
          image="/images/habitle.png"
          children="A minimal and powerful web app that generates a heatmap to visual progress to promote a positive and consistent lifestyle."
          href="https://habitle.com/#/"
          category="Habitle"
          date="Personal Project"
        />
      </div>
    </Container>
  );
}
