import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";

const Badge = ({ child }) => {
  return (
    <button
      type="button"
      class="shadow-2xl bg-shade-dark dark:bg-shade-light text-shade-light dark:text-shade-dark p-2 m-1 rounded items-center"
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
        <h1 className="font-bold text-3xl md:text-5xl pb-4 text-title-light dark:text-title-dark">
          Projects
        </h1>
        <p className="text-shade-dark dark:text-shade-light mb-4 md:text-lg text-md">
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
      </div>
      <div className="max-w-3xl mx-auto flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-x-0 space-y-4 my-10">
        <div className="flex flex-col flex-1 space-y-4">
          <figure
            className="md:flex flex-col justify-center hidden 
            flex-1 bg-accent-dark text-shade-light text-center  
            p-6 rounded-lg shadow-2xl"
          >
            <h1 className="font-bold md:text-lg text-md">Skills</h1>
            <h2 className="md:text-lg text-md">
              These projects taught me team building, as well encouraged
              personal growth.
            </h2>
          </figure>
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
          <ProjectCard
            image="/images/cutiehack2020.png"
            children="The website used by 500+ students to interact with and participate in the annual Cutiehack hackathon. Co-led the effort on UI/UX and frontend to provide a seamless and easy-to-use interface."
            href="https://cutiehack.io"
            title="Cutiehack"
            category="Hackathon"
          />
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
            image="/images/terminal.png"
            children="Rho Shell is aimed to replicate the standard functions of a shell using a Command Line Interface (CLI), written primarily in C++. It can perform most of the basic and common commands of a terminal."
            href="https://github.com/r-jo/rhoshell"
            title="Rho Shell"
            category="Personal Project"
          />
          <figure
            className="md:flex flex-col justify-center hidden 
            flex-1 bg-accent-light dark:bg-accent-light text-shade-light text-center  
            p-6 rounded-lg shadow-2xl"
          >
            <h1 className="font-bold md:text-lg text-md">Motivation</h1>
            <h2 className="md:text-lg text-md">
              I treat each project as a better iteration of the last.
            </h2>
          </figure>
          <ProjectCard
            image="/images/habitle.png"
            children="A minimal and powerful web app that generates a heatmap to visual progress to promote a positive and consistent lifestyle."
            href="https://habitle.com/#/"
            title="Habitle"
            category="Personal Project"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-x-0 space-y-4"></div>
    </Container>
  );
}
