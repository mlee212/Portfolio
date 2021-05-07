import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";

const Heading = () => {
  return (
    <h1 className="mb-4 font-bold text-3xl text-teal-400 dark:text-red-400">
      Hey, I'm Rajbir.
    </h1>
  );
};

const Subheading = ({ children }) => {
  return (
    <h2 className="mt-8 mb-4 font-semibold text-2xl text-gray-900 dark:text-shadow-100">
      {children}
    </h2>
  );
};

export default function Home() {
  const project = [1, 2, 3];
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <Heading />
        <h2 className="font-medium text-gray-900 dark:text-shadow-100">
          Frontend Developer <br />
          Based in Southern California
        </h2>
        <Subheading children="Current Projects" />
        <p>
          Here are some of the projects that I am currently working on. Check
          out my other{" "}
          <Link href="/projects" passHref>
            <a className="text-teal-600 dark:text-red-400 hover:underline">
              projects
            </a>
          </Link>{" "}
          here.
        </p>
        <ProjectCard
          key={project.id}
          image="/images/citrushack.png"
          children={[
            "Create your Zen. Check out the ",
            <a
              href="https://citrushack.com"
              rel="noreferrer"
              rel="noopener"
              target="_blank"
              className="text-teal-600 dark:text-red-400 hover:underline"
            >
              official Citrus Hack
            </a>,

            " website!",
          ]}
          href="https://citrushack-fe.vercel.app"
          title="Citrus Hack FE"
          category="Hackathon"
        />
        <ProjectCard
          key={project.id}
          image="/images/biohack2021.png"
          children="Scrapbook your idea for healthcare using code. Scheduled in May. Join now."
          href="https://biohackucr.com"
          title="BioHack"
        />
        <ProjectCard
          key={project.id}
          image="/images/habitle.png"
          children="A minimal and powerful web app that generates a heatmap to visualize progress."
          href="https://habitle.com/#/"
          title="Habitle"
          category="Personal Project"
        />
        <Timeline />
      </div>
    </Container>
  );
}
