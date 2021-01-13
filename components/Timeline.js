// Full Credit to Lee Robinson

import React, { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-lg text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 text-lg dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Started Web Development">
        Around this time, I discovered where my two passions, coding and art,
        collide. I spent all day pushing pixels. My first portfolio iteration
        was a horrible mash of animations and fancy fonts haha.
      </Step>
      <Step title="Joined Citrushack">
        Developed, designed, and launched the 2019 Citrushack hackathon website
        which was used by hundreds of student hackers. This was also the largest
        hackathon offered by my university.
      </Step>
      <Step title="Joined Cutiehack">
        On a whim, I attended my very first team meeting to launch the website
        for the 2019 Cutiehack hackathon.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Hello World!">
        I wrote my first line of code{" "}
        <code>cout &#60;&#60; "Hello World!";</code>
      </Step>
      <Step title="Moved to University of California, Riverside">
        For Computer Science!
      </Step>
      <Step title="Graduated High School">Peace out high school lunches.</Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Built my First Computer">
        I installed my Ryzen 3 2200g into my brand new motherboard. I forgot to
        plug in the power button cables and freaked out when it would not turn
        on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Jailbroke my First iPhone">
        ...And subsequently bricked it thanks to a rogue Cydia tweak.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Got my First Game Console">
        It was my first time holding a Playstation Portable and it was my
        favorite thing in the world. I would take it everywhere with me. I ended
        up trying to take it apart and cracked the screen :(.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Born">Yes, haha.</Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Experiences
      </h1>
      <Year>2021</Year>
      <ul>
        <Step title="New Year, New Me">
          Here's to another year with new opportunities, hard classes, and fun
          experiences.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Web dev Lead">
          I'm now in charge of the development for the vision of UCR's
          Cutiehack, Citrushack, and Biohack.
        </Step>
        <Step title="Started Habitle">
          As a collaboration project, my colleague Dev Bhatia and I are
          developing a web app that helps people develop positive habits by
          visualizing their progress.
        </Step>
        <Step title="Started my Junior Year">
          Half way there! I'm looking forward to more challenging classes in an
          even more challenging enviroment.
        </Step>
        <Step title="Finished All my Math Classes">No more!</Step>
        <Step title="UC Zoom">
          The COVID-19 Pandemic shifted all of our classes online and we had to
          adapt using video calling and online only platforms.
        </Step>
        <Step title="Joined Biohack">
          I took a major role as part of the four-man team to develop the
          website for the Biohack hackathon. (I think you can sense a trend
          here.)
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 bg-gray-100 dark:bg-cardbgdark rounded-md font-medium text-gray-900 dark:text-gray-100 text-md"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
