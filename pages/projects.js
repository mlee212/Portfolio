import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const Badge = ({ child }) => {
  return (
    <button
      type="button"
      class="bg-gray-100 dark:bg-cardbgdark dark:text-white text-black p-2 m-1 rounded items-center"
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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mt-4">
        <h1 className="font-bold text-3xl md:text-5xl pb-4 text-black bg-gradient-to-r text-purple-700 dark:text-red-400">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          Here is a collection of my best work where I demonstrate my skills as
          a developer and a creator. You can also see a more detailed view on my{" "}
          <a
            className="underline"
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
          <Badge child="Styled Components" />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-purple-700 dark:text-red-400 text-opacity-75">
          Current Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          {" "}
          Here are some of the projects that I am currently working on.
        </p>
        <ProjectCard
          image="/images/citrushack.png"
          children="The website used by hundreds of students to interact and participate in the annual Citrushack hackathon. Coming Spring 2021."
          href="https://citrushack.com"
          category="Citrushack"
          date="Hackathon"
        />
        <ProjectCard
          image="/images/biohack2021.png"
          children="The website used by hundreds of students to interact and participate in the annual Biohack hackathon. Coming Spring 2021."
          href="https://biohackucr.com/#/"
          category="Biohack"
          date="Hackathon"
        />
        <ProjectCard
          image="/images/habitle.png"
          children="A minimal and powerful web app that generates a heatmap to visual progress to promote a positive and consistent lifestyle."
          href="https://habitle.com/#/"
          category="Habitle"
          date="Personal Project"
        />
        <h3 className="font-bold text-2xl md:text-4xl  my-4 text-purple-700 dark:text-red-400 text-opacity-75">
          Finished Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 md:text-lg text-md">
          {" "}
          And these are my finished projects.
        </p>
        <ProjectCard
          image="/images/terminal.png"
          children="Rho Shell is aimed to replicate the standard functions of a shell using a Command Line Interface (CLI), written primarily in C++. It can perform most of the basic and common commands of a terminal."
          href="https://github.com/r-jo/rhoshell"
          category="Rho Shell"
          date="Personal Project"
        />
        <ProjectCard
          image="/images/cutiehack2020.png"
          children="The website used by 500+ students to interact with and participate in the annual Cutiehack hackathon. Co-led the effort on UI/UX and frontend to provide a seamless and easy-to-use interface."
          href="https://cutiehack.io"
          category="Cutiehack"
          date="Hackathon"
        />
      </div>
    </Container>
  );
}
