import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";

export default function Home() {
  const project = [1, 2, 3];
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <section>
          <h1 className="font-bold text-4xl md:text-5xl text-teal-600 dark:text-red-400">
            Hello! I'm Rajbir.
          </h1>
          <h2 className="font-medium text-gray-900 dark:text-shadow-100 mt-4">
            Frontend Developer <br />
            Based in Southern California
          </h2>
        </section>
        <section className="my-16">
          <h3 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-shadow-100">
            Current Projects
          </h3>
          <p className="my-2 mb-6">
            {" "}
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
              "Create your Zen. Scheduled for April 9th to 11th 2021. Check out the ",
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
        </section>
        <section>
          <Timeline />
        </section>
      </div>
    </Container>
  );
}
