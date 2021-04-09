import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";
import { RightArrow } from "../public/images/icons/icons.js";

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <section>
          <h1 className="font-bold text-3xl md:text-5xl text-red-400 dark:text-red-300">
            Hello! I'm Rajbir.
          </h1>
          <h2 className="font-medium text-gray-900 dark:text-gray-50 my-2 mb-6">
            Frontend Developer <br />
            Based in Southern California
          </h2>
        </section>
        <section className="my-16">
          <h3 className="font-bold text-2xl md:text-4xl text-gray-900 dark:text-gray-50">
            Current Projects
          </h3>
          <p className="my-2 mb-6">
            {" "}
            Here are some of the projects that I am currently working on. Check
            out my other{" "}
            <Link href="/projects">
              <a className="underline text-gray-900 dark:text-gray-50">
                projects
              </a>
            </Link>{" "}
            here.
          </p>
          <ProjectCard
            image="/images/citrushack.png"
            children={[
              "Create your Zen. Scheduled for April 9th to 11th 2021. Check out the official ",
              <a
                href="https://citrushack.com"
                rel="noreferrer"
                rel="noopener"
                target="_blank"
                className="underline text-gray-900 dark:text-gray-50"
              >
                Citrus Hack
              </a>,

              " website!",
            ]}
            demo="https://citrushack-fe.vercel.app"
            repo="https://github.com/r-jo/citrushack-fe"
            title="Citrus Hack"
            category="Hackathon"
            demotitle={["Demo", <RightArrow />]}
            repotitle={["Repo", <RightArrow />]}
          />
          <ProjectCard
            image="/images/biohack2021.png"
            children="Scrapbook your idea for healthcare using code. Scheduled in May. Join now."
            demo="https://biohackucr.com"
            repo="https://github.com/BioHack-UCR/Biohack2021"
            title="BioHack"
            demotitle={["Demo", <RightArrow />]}
            repotitle={["Repo", <RightArrow />]}
          />
          <ProjectCard
            image="/images/habitle.png"
            children="A minimal and powerful web app that generates a heatmap to visualize progress."
            demo="https://habitle.com/#/"
            title="Habitle"
            category="Personal Project"
            demotitle={["Demo", <RightArrow />]}
          />
        </section>
        <section>
          <Timeline />
        </section>
      </div>
    </Container>
  );
}
