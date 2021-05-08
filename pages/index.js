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
      <section>
        <h1 className="font-bold text-2xl">Rajbir Johar</h1>
        <h3 className="font-medium mt-4">
          Frontend Developer <br />
          Based in Southern California
        </h3>
      </section>
      <section className="my-8">
        <h2 className="font-bold text-2xl">Current Projects</h2>
        <p className="my-2 mb-6">
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
          image="/images/biohack2021.png"
          children="Scrapbook your idea for healthcare using code. Scheduled in May. Join now."
          href="https://biohackucr.com"
          title="BioHack"
        />
        <ProjectCard
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
    </Container>
  );
}
