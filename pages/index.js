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
          <h1 className="font-bold text-3xl md:text-5xl my-4 text-title-light dark:text-title-dark">
            Hello! I'm <span className="text-brand">Rajbir</span>.
          </h1>
          <h2 className="font-medium my-4 md:text-lg text-md">
            Frontend Developer <br />
            Based in Southern California
          </h2>
        </section>
        <section className="my-16">
          <h3 className="font-bold text-2xl md:text-4xl my-4 text-title-light dark:text-title-dark">
            Current Projects
          </h3>
          <p className="mb-8 md:text-lg text-md">
            {" "}
            Here are some of the projects that I am currently working on. Check
            out my other{" "}
            <Link href="/projects">
              <a className="underline text-link-light dark:text-link-dark">
                projects
              </a>
            </Link>{" "}
            here.
          </p>
          <ProjectCard
            image="/images/citrushack.png"
            children={[
              "Create your Zen. This is the Founder's Edition of the Citrushack website written by me. It's to illustrate my version of the project. Citrushack is scheduled for April 9th to 11th 2021. Everyone is welcome to join ",
              <a
                href="https://citrushack.com"
                target="_blank"
                className="underline text-link-light dark:text-link-dark"
              >
                here
              </a>,
              "!",
            ]}
            href="https://citrushack-fe.vercel.app"
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
        </section>
        <section>
          <Timeline />
        </section>
      </div>
    </Container>
  );
}
