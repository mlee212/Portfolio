import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import GithubStats from "../components/GithubStats";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Container main>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <section>
        <h1 className="font-bold text-3xl text-mist mb-2">Projects</h1>
        <p className="mt-4">
          Here is a collection of my best work where I demonstrate my skills as
          a <span className="font-medium">developer and a creator.</span> You
          can also see a more detailed view on my{" "}
          <a
            className="text-boulder dark:text-mobster hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/r-jo"
          >
            Github
          </a>
          .
        </p>
      </section>
      <section className="my-8">
        <h3 className="font-bold text-2xl mb-2 text-thunder dark:text-cararra">
          Dashboard
        </h3>
        <p className="mb-6">
          My Github dashboard tracking my Github statistics.
        </p>
        <GithubStats />
      </section>
      <section className="mb-8">
        <h3 className="font-bold text-2xl mb-2 text-thunder dark:text-cararra">
          Current Projects
        </h3>
        <p className="mb-6">
          <i>
            In progress. Just making sure I am presenting them the way I want it
            to be seen.
          </i>
        </p>
        <div className="flex md:flex-row flex-col md:space-x-4">
          <div className="flex flex-col flex-1">
            <ProjectCard
              image="/images/icon_logo.png"
              children="Instagram but for cars. Coming soon."
              title="Auto Exposure"
              category="Project"
            />
          </div>
          <div className="flex flex-col flex-1"></div>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="font-bold text-2xl mb-2 text-thunder dark:text-cararra">
          Finished Projects
        </h3>
        <p className="mb-6">
          <i>
            In progress. Just making sure I am presenting them the way I want it
            to be seen.
          </i>
        </p>
        <div className="flex md:flex-row flex-col md:space-x-4">
          <div className="flex flex-col flex-1">
            <ProjectCard
              image="/images/citrushack2021.png"
              children="Used by 700+ students to participate during 2021 Citrus Hack."
              href="https://citrushack-fe.vercel.app"
              title="Citrus Hack"
              category="Hackathon"
            />
            <ProjectCard
              image="/images/cutiehack2020.png"
              children="Used by 500+ students to participate during 2020 Cutie Hack."
              href="https://cutiehack.io"
              title="Cutie Hack"
              category="Hackathon"
            />
            <ProjectCard
              image="/images/biohack2021.png"
              children="Used by 100+ students to participate during 2021 Biohack."
              href="https://biohackucr.com"
              title="BioHack"
            />
          </div>
          <div className="flex flex-col flex-1">
            <ProjectCard
              image="/images/habitle.png"
              children="A minimal web app that generates a heatmap to visualize progress."
              href="https://habitle.com/#/"
              title="Habitle"
              category="Personal Project"
            />
            <ProjectCard
              image="/images/terminal.png"
              children="A Command Line Interface (CLI), written primarily in C++."
              href="https://github.com/r-jo/rhoshell"
              title="Rho Shell"
              category="Personal Project"
            />
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h1 className="font-bold text-2xl mb-2 text-thunder dark:text-cararra">
          Keyboards
        </h1>
        <p className="mb-6">Stay tuned! Thocky boards incoming.</p>
      </section>
      <section>
        <h3 className="font-bold text-2xl mb-2 text-thunder dark:text-cararra">
          Setup and Snippets
        </h3>
        <p> Coming soon! Learn more about how I stay productive.</p>
      </section>
    </Container>
  );
}
