import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import GithubStats from "../components/GithubStats";
import { motion } from "framer-motion";

const Badge = ({ child }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="cursor-default px-2 py-1 m-1 rounded-md items-center bg-gray-100 hover:bg-gray-200
     dark:bg-shadow-800 dark:hover:bg-shadow-700 transition duration-300 ease-in-out"
      >
        {child}
      </button>
    </motion.button>
  );
};

export default function Projects() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <section>
          <h1 className="font-bold text-4xl md:text-5xl text-blue-500 dark:text-red-400">
            Projects
          </h1>
          <p className="my-2 mt-4">
            <span className="font-medium">
              Here is a collection of my best work where I demonstrate my skills
              as a developer and a creator.
            </span>{" "}
            You can also see a more detailed view on my{" "}
            <a
              className="text-blue-500 dark:text-red-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/r-jo"
            >
              Github
            </a>
            . Some of the languages, frameworks, and libraries I currently use
            are:
          </p>
          <div className="text-center">
            <Badge child="Next JS"/>
            <Badge child="React JS" />
            <Badge child="Javascript" />
            <Badge child="HTML5" />
            <Badge child="CSS3" />
            <Badge child="Git" />
            <Badge child="Yarn" />
            <Badge child="NPM" />
            <Badge child="Chakra UI" />
            <Badge child="Tailwind CSS" />
            <Badge child="C++" />
            <Badge child="REST" />
            <Badge child="Styled Components" />
          </div>
        </section>
        <section className="my-16">
          <h3 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-shadow-100">
            Dashboard
          </h3>
          <p className="my-2 mb-6 text-md">
            My Github dashboard tracking my Github statistics.
          </p>
          <GithubStats />
        </section>
        <section className="my-16">
          <h3 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-shadow-100">
            Current Projects
          </h3>
          <p className="my-2 mb-6 text-md">
            {" "}
            Here are some of the projects that I am currently working on.
          </p>
          <ProjectCard
            image="/images/biohack2021.png"
            children="Scrapbook your idea for healthcare using code. Scheduled in May. Join now."
            demo="https://biohackucr.com"
            repo="https://github.com/BioHack-UCR/Biohack2021"
            title="BioHack"
          />
          <ProjectCard
            image="/images/habitle.png"
            children="A minimal and powerful web app that generates a heatmap to visualize progress."
            demo="https://habitle.com/#/"
            title="Habitle"
            category="Personal Project"
          />
        </section>
        <section className="my-16">
          <h3 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-shadow-100">
            Finished Projects
          </h3>
          <p className="my-2 mb-6 text-md"> Here are my finished projects.</p>
          <ProjectCard
            image="/images/citrushack.png"
            children={[
              "Create your Zen. Scheduled for April 9th to 11th 2021. Check out the official ",
              <a
                href="https://citrushack.com"
                rel="noreferrer"
                rel="noopener"
                target="_blank"
                className="text-blue-500 dark:text-red-400 text-gray-900 dark:text-shadow-100"
              >
                Citrus Hack
              </a>,

              " website!",
            ]}
            demo="https://citrushack-fe.vercel.app"
            repo="https://github.com/r-jo/citrushack-fe"
            title="Citrus Hack"
            category="Hackathon"
          />
          <ProjectCard
            image="/images/terminal.png"
            children="A Command Line Interface (CLI), written primarily in C++."
            demo="https://github.com/r-jo/rhoshell"
            title="Rho Shell"
            category="Personal Project"
          />
          <ProjectCard
            image="/images/cutiehack2020.png"
            children="The website used by 500+ students to interact with and participate in the annual Cutie Hack hackathon."
            demo="https://cutiehack.io"
            repo="https://github.com/citrushack/CutieHack2020Frontend"
            title="Cutie Hack"
            category="Hackathon"
          />
        </section>
        <section>
          <h1 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-shadow-100">
            Keyboards
          </h1>
          <p className="mt-2 text-md">Stay tuned!</p>
        </section>
      </div>
    </Container>
  );
}
