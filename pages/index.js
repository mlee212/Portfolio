import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mt-4">
        <h1 className="font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white">
          Hey, I'm Rajbir.
        </h1>
        <h2 className="text-black dark:text-white mb-16 md:text-lg text-md">
          Frontend Developer <br />
          Based in Southern California
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-black dark:text-white">
          Current Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          {" "}
          Here are some of the projects that I am currently working on. Check
          out my other{" "}
          <Link href="/projects">
            <a className="underline">projects</a>
          </Link>{" "}
          here.
        </p>
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
        <Timeline />
      </div>
    </Container>
  );
}
