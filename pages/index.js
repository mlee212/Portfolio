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
        <h1 className="font-bold text-3xl md:text-5xl pb-4 text-title-light dark:text-title-dark">
          Hello! I'm <span className="text-accent-light dark:text-accent-dark">Rajbir</span>.
        </h1>
        <h2 className="text-shade-dark dark:text-shade-light font-medium mb-16 md:text-lg text-md">
          Frontend Developer <br />
          Based in Southern California
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl my-4 text-title-light dark:text-title-dark">
          Current Projects
        </h3>
        <p className="text-shade-dark dark:text-shade-light md:text-lg text-md">
          {" "}
          Here are some of the projects that I am currently working on. Check
          out my other{" "}
          <Link href="/projects">
            <a className="text-link-light dark:text-link-dark underline">
              projects
            </a>
          </Link>{" "}
          here.
        </p>
      </div>
      <div className="max-w-3xl mx-auto flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-x-0 space-y-4 my-10">
        <div className="flex flex-col flex-1 space-y-4">
          <ProjectCard
            image="/images/citrushack.png"
            children={[
              "Create your Zen. This is the Founder's Edition of the Citrushack website written by me. It's to illustrate my version of the project. Citrushack is scheduled for April 9th to 11th 2021. Everyone is welcome to join ",
              <a
                href="https://citrushack.com"
                target="_blank"
                className="underline"
              >
                here
              </a>,
              "!",
            ]}
            href="https://citrushack-fe.vercel.app"
            title="Citrushack"
            category="Hackathon"
          />
          <figure
            className="md:flex flex-col justify-center hidden 
            flex-1 bg-accent-light dark:bg-accent-dark text-shade-light text-center  
            p-6 rounded-lg shadow-2xl"
          >
            <h1 className="font-bold md:text-lg text-md">Purpose</h1>
            <h2 className="md:text-lg text-md">
              These projects are meant to showcase my skill and dedication.
            </h2>
          </figure>
        </div>
        <div className="flex-1 space-y-4">
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
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <Timeline />
      </div>
    </Container>
  );
}
