import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import GithubStats from "../components/GithubStats";
import { RightArrow } from "../public/images/icons/icons.js";

const Badge = ({ child }) => {
  return (
    <button
      type="button"
      className="cursor-default px-2 py-1 m-1 rounded-md items-center bg-gray-100 
      dark:bg-card-dark transition duration-300 ease-in-out"
    >
      {child}
    </button>
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
          <h1 className="font-bold text-3xl md:text-5xl text-title-light dark:text-title-dark">
            Projects
          </h1>
          <p className="my-2 mb-6 text-md">
            <span className="font-medium">
              Here is a collection of my best work where I demonstrate my skills
              as a developer and a creator.
            </span>{" "}
            You can also see a more detailed view on my{" "}
            <a
              className="text-link-light dark:text-link-dark underline"
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
            <Badge child="Next JS" />
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
          <h3 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Dashboard
          </h3>
          <p className="my-2 mb-6 text-md">
            My Github dashboard tracking my Github statistics.
          </p>
          <GithubStats />
        </section>
        <section className="my-16">
          <h1 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Current Projects
          </h1>
          <p className="my-2 mb-6 text-md">
            {" "}
            Here are some of the projects that I am currently working on.
          </p>
          <ProjectCard
            image="/images/citrushack.png"
            children="Create your Zen. Scheduled for April 9th to 11th 2021."
            demo="https://citrushack-fe.vercel.app"
            repo="https://github.com/r-jo/citrushack-fe"
            title="Citrus Hack"
            category="Hackathon"
            demotitle={["Demo",<RightArrow />]}
            repotitle={["Repo",<RightArrow />]}
          />
          <ProjectCard
            image="/images/biohack2021.png"
            children="Scrapbook your idea for healthcare using code. Scheduled in May. Join now."
            demo="https://biohackdemo.vercel.app"
            repo="https://github.com/BioHack-UCR/Biohack2021"
            title="BioHack"
            demotitle={["Demo",<RightArrow />]}
            repotitle={["Repo",<RightArrow />]}
          />
          <ProjectCard
            image="/images/habitle.png"
            children="A minimal and powerful web app that generates a heatmap to visualize progress."
            demo="https://habitle.com/#/"
            title="Habitle"
            category="Personal Project"
            demotitle={["Demo",<RightArrow />]}
          />
        </section>
        <section className="my-16">
          <h1 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Finished Projects
          </h1>
          <p className="my-2 mb-6 text-md"> Here are my finished projects.</p>
          <ProjectCard
            image="/images/terminal.png"
            children="A Command Line Interface (CLI), written primarily in C++."
            demo="https://github.com/r-jo/rhoshell"
            title="Rho Shell"
            category="Personal Project"
            demotitle={["Repo",<RightArrow />]}
          />
          <ProjectCard
            image="/images/cutiehack2020.png"
            children="The website used by 500+ students to interact with and participate in the annual Cutie Hack hackathon."
            demo="https://cutiehack.io"
            repo="https://github.com/citrushack/CutieHack2020Frontend"
            title="Cutie Hack"
            category="Hackathon"
            demotitle={["Demo",<RightArrow />]}
            repotitle={["Repo",<RightArrow />]}
          />
        </section>
        <section>
          <h1 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Keyboards
          </h1>
          <p className="my-2 mb-6 text-md">Stay tuned!</p>
        </section>
      </div>
    </Container>
  );
}
