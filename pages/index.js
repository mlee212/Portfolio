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
      <div className="max-w-2xl mx-auto">
        <section>
          <h1 className="font-bold text-3xl md:text-5xl text-gray-900 dark:text-gray-50">
            Hello! I'm <span className="dark:text-brand">Rajbir</span>.
          </h1>
          <h2 className="font-medium my-2 mb-6">
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
            children="Create your Zen. Scheduled for April 9th to 11th 2021."
            href="https://citrushack-fe.vercel.app"
            title="Citrus Hack"
            category="Hackathon"
          />
          <ProjectCard
            image="/images/biohack2021.png"
            children="Scrapbook your idea for healthcare using code. Scheduled in May. Join now."
            href="https://biohackdemo.vercel.app"
            title="BioHack"
            category="Hackathon"
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
      </div>
    </Container>
  );
}
