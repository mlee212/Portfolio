import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import GithubStats from "../components/GithubStats";
import { motion } from "framer-motion";
import ProjectList from "../components/ProjectList";

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
          Finished Projects
        </h3>
        <ProjectList />
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
