// Full Credit to Lee Robinson

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  HatIcon,
  CakeIcon,
  CheckIcon,
  FireIcon,
  StarIcon,
  SadIcon,
  BoltIcon,
} from "../public/images/icons/icons.js";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Divider = () => {
  return (
    <motion.div
      variants={item}
      className="border-b-2 border-gray-100 dark:border-shadow-700 w-full my-4"
    />
  );
};

const Year = ({ children }) => {
  return (
    <motion.h3
      variants={item}
      className="text-xl font-bold text-gray-900 dark:text-shadow-100"
    >
      {children}
    </motion.h3>
  );
};

const Step = ({ title, children, icon }) => {
  return (
    <motion.li variants={item} className="my-4">
      <div className="flex items-center">
        <span className="sr-only">Icon</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 mr-1"
        >
          {icon}
        </svg>
        <h2 className="font-medium md:text-lg text-md text-gray-900 dark:text-shadow-100">
          {title}
        </h2>
      </div>
      <p className="ml-6 text-gray-800 dark:text-shadow-200">{children}</p>
    </motion.li>
  );
};

const FullTimeline = () => (
  <motion.div variants={container} initial="hidden" animate="show">
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Started Web Development" icon={<StarIcon />}>
        Around this time, I discovered where my two passions, coding and art,
        collide. I spent all day pushing pixels. My first portfolio iteration
        was a horrible mash of animations and fancy fonts haha.
      </Step>
      <Step title="Joined Citrushack" icon={<FireIcon />}>
        Developed, designed, and launched the 2019 Citrushack hackathon website
        which was used by hundreds of student hackers. This was also the largest
        hackathon offered by my university.
      </Step>
      <Step title="Joined Cutiehack" icon={<FireIcon />}>
        On a whim, I attended my very first team meeting to launch the website
        for the 2019 Cutiehack hackathon.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Hello World!" icon={<StarIcon />}>
        I wrote my first line of code{" "}
        <code>cout &#60;&#60; "Hello World!";</code>
      </Step>
      <Step
        title="Moved to University of California, Riverside"
        icon={<HatIcon />}
      >
        For Computer Science!
      </Step>
      <Step title="Graduated High School">Peace out high school lunches.</Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Built my First Computer" icon={<BoltIcon />}>
        I installed my Ryzen 3 2200g into my brand new motherboard. I forgot to
        plug in the power button cables and freaked out when it would not turn
        on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Jailbroke my First iPhone" icon={<BoltIcon />}>
        ...And subsequently bricked it thanks to a rogue Cydia tweak.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Broke my First Game Console" icon={<SadIcon />}>
        It was my first time holding a Playstation Portable and it was my
        favorite thing in the world. I would take it everywhere with me. I ended
        up trying to take it apart and cracked the screen :(.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Born" icon={<CakeIcon />}>
        Yes, haha.
      </Step>
    </ul>
  </motion.div>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-3xl md:text-4xl my-4 text-gray-900 dark:text-shadow-100">
        Experiences
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="New Year, New Me" icon={<BoltIcon />}>
          Here's to another year with new opportunities, hard classes, and fun
          experiences.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Web dev Lead" icon={<StarIcon />}>
          I'm now in charge of the development for the vision of UCR's
          Cutiehack, Citrushack, and Biohack.
        </Step>
        <Step title="Started Habitle" icon={<FireIcon />}>
          As a collaboration project, my colleague Dev Bhatia and I are
          developing a web app that helps people develop positive habits by
          visualizing their progress.
        </Step>
        <Step title="Started my Junior Year" icon={<HatIcon />}>
          Half way there! I'm looking forward to more challenging classes in an
          even more challenging enviroment.
        </Step>
        <Step title="Finished All my Math Classes" icon={<HatIcon />}>
          No more!
        </Step>
        <Step title="UC Zoom" icon={<SadIcon />}>
          The COVID-19 Pandemic shifted all of our classes online and we had to
          adapt using video calling and online only platforms.
        </Step>
        <Step title="Joined Biohack" icon={<FireIcon />}>
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
          className="flex items-center mx-auto px-3 py-1 text-gray-800 dark:text-shadow-200 mt-6 mb-2
          bg-gray-100 hover:bg-gray-200 dark:bg-shadow-700 dark:hover:bg-shadow-600 rounded-md text-md transition duration-300 ease-in-out"
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
