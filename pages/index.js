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
        <h1 className="font-bold text-3xl md:text-5xl pb-4 text-title-light dark:text-title-dark">
          Hello! I'm Rajbir.
        </h1>
        <h2 className="text-text-light dark:text-text-dark font-medium mb-16 md:text-lg text-md">
          Frontend Developer <br />
          Based in Southern California
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-title-light dark:text-title-dark">
          Current Projects
        </h3>
        <p className="text-text-light dark:text-text-dark mb-4 md:text-lg text-md">
          {" "}
          Here are some of the projects that I am currently working on. Check
          out my other{" "}
          <Link href="/projects">
            <a className="text-link-light dark:text-link-dark underline">projects</a>
          </Link>{" "}
          here.
        </p>
        <ProjectCard
          image="/images/citrushack.png"
          children="The website used by hundreds of students to interact and participate in the annual Citrushack hackathon. Coming Spring 2021."
          href="https://citrushackdemo.vercel.app"
          title="Citrushack"
          category="Hackathon"
        />
        <ProjectCard
          image="/images/biohack2021.png"
          children="The website used by hundreds of students to interact and participate in the annual Biohack hackathon. Coming Spring 2021."
          href="https://biohackdemo.vercel.app"
          title="Biohack"
          category="Hackathon"
        />
        <ProjectCard
          image="/images/habitle.png"
          children="A minimal and powerful web app that generates a heatmap to visual progress to promote a positive and consistent lifestyle."
          href="https://habitle.com/#/"
          title="Habitle"
          category="Personal Project"
        />
        <Timeline />
      </div>
    </Container>
  );
}
