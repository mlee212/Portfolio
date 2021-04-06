import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import GithubStats from "../components/GithubStats";

const Badge = ({ child }) => {
  return (
    <button
      type="button"
      className="cursor-default p-2 m-1 rounded items-center bg-card-light 
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
          <p className="my-2 mb-6 md:text-lg text-md">
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
          <p className="my-2 mb-6 md:text-lg text-md">
            My Github dashboard tracking my Github statistics.
          </p>
          <GithubStats />
        </section>
        <section className="my-16">
          <h1 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Current Projects
          </h1>
          <p className="my-2 mb-6 md:text-lg text-md">
            {" "}
            Here are some of the projects that I am currently working on.
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
            href="https://biohackucrdemo.vercel.app"
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
        <section className="my-16">
          <h1 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Finished Projects
          </h1>
          <p className="my-2 mb-6 md:text-lg text-md">
            {" "}
            Here are my finished projects.
          </p>
          <ProjectCard
            image="/images/terminal.png"
            children="Rho Shell is aimed to replicate the standard functions of a shell using a Command Line Interface (CLI), written primarily in C++. It can perform most of the basic and common commands of a terminal."
            href="https://github.com/r-jo/rhoshell"
            title="Rho Shell"
            category="Personal Project"
          />
          <ProjectCard
            image="/images/cutiehack2020.png"
            children="The website used by 500+ students to interact with and participate in the annual Cutiehack hackathon. Co-led the effort on UI/UX and frontend to provide a seamless and easy-to-use interface."
            href="https://cutiehack.io"
            title="Cutiehack"
            category="Hackathon"
          />
        </section>
        <section>
          <h1 className="font-bold text-2xl md:text-4xl text-title-light dark:text-title-dark">
            Keyboards
          </h1>
          <p className="my-2 mb-6 md:text-lg text-md">
            Stay tuned!
          </p>
        </section>
      </div>
    </Container>
  );
}
