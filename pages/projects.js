import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
          Here is a collection of my best work where I demonstrate my skills as
          a developer and a creator. Some of the languages, frameworks, and
          libraries I currently use are:
        </p>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-4 text-black dark:text-white">
          Current Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
          {" "}
          Here are some of the projects that I am currently working on.
        </p>
        <ProjectCard
          image="/images/citrushack.png"
          children="The website used by hundreds of students to interact and participate in the annual Citrushack hackathon. Coming Spring 2021."
          href="https://rajbirjohar.com"
          category="Citrushack"
          date="Hackathon"
        />
        <ProjectCard
          image="/images/biohack2021.png"
          children="The website used by hundreds of students to interact and participate in the annual Biohack hackathon. Coming Spring 2021."
          href="https://rajbirjohar.com"
          category="Biohack"
          date="Hackathon"
        />
        <ProjectCard
          image="/images/habitle.png"
          children="A minimal and powerful web app that generates a heatmap to visual progress to promote a positive and consistent lifestyle."
          href="https://rajbirjohar.com"
          category="Habitle"
          date="Personal Project"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-4 text-black dark:text-white">
          Finished Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
          {" "}
          And these are my finished projects.
        </p>
        <ProjectCard
          image="/images/terminal.png"
          children="Rho Shell is aimed to replicate the standard functions of a shell using a Command Line Interface (CLI), written primarily in C++. It can perform most of the basic and common commands of a terminal."
          href="https://rajbirjohar.com"
          category="Rho Shell"
          date="Personal Project"
        />
        <ProjectCard
          image="/images/cutiehack2020.png"
          children="The website used by 500+ students to interact with and participate in the annual Cutiehack hackathon. Co-led the effort on UI/UX and frontend to provide a seamless and easy-to-use interface."
          href="https://rajbirjohar.com"
          category="Cutiehack"
          date="Hackathon"
        />
      </div>
    </Container>
  );
}
