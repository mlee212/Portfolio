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
      className="border-b border-gray-200 dark:border-stormcloud w-full my-4"
    />
  );
};

const Year = ({ children }) => {
  return (
    <motion.h2 variants={item} className="text-lg font-bold">
      {children}
    </motion.h2>
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
        <h3 className="font-medium text-md">{title}</h3>
      </div>
      <p className="ml-6">{children}</p>
    </motion.li>
  );
};

const FullTimeline = () => (
  <motion.div variants={container} initial="hidden" animate="show">
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Started Web Development" icon={<StarIcon />}>
        Decided to become a professional pixel pusher.
      </Step>
      <Step title="Built First Portfolio" icon={<FireIcon />}>
        Oh boy was it ugly.
      </Step>
      <Step title="Joined Cutiehack" icon={<FireIcon />}>
        Introduced to web development and helped design, develop, and deploy the
        Cutie Hack hackathon website.
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
        For Computer Science.
      </Step>
      <Step title="Graduated High School" icon={<HatIcon />}>
        Peace out high school lunches.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Built my First Computer" icon={<BoltIcon />}>
        Forgot to plug in the power button cables and freaked out when it would
        not turn on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Jailbroke my iPhone" icon={<BoltIcon />}>
        ...and bricked it.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Broke my PSP" icon={<SadIcon />}>
        Thought I was smart enough to undertake a full internal transplant of my
        playstation.
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
      <h3 className="font-bold text-2xl mb-4 text-thunder dark:text-cararra">
        Experiences
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="First Internship" icon={<BoltIcon />}>
          Finally moving up in the world.
        </Step>
        <Step title="First Roadtrip" icon={<BoltIcon />}>
          Crossed the border from CA to AZ.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Web dev Lead" icon={<StarIcon />}>
          Spearheaded the development for Biohack, Cutie Hack, and Citrus Hack.
        </Step>
        <Step title="Started Habitle" icon={<FireIcon />}>
          Because of my bad habits, I built a tool to promote good ones instead.
        </Step>
        <Step title="Online Classes" icon={<SadIcon />}>
          I am happy to announce I will be attending UC Zoom.
        </Step>
        <Step title="Joined Biohack" icon={<FireIcon />}>
          Helped design, develop, and deploy the Biohack hackathon website.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center mx-auto px-3 py-1 text-thunder dark:text-cararra mt-6 mb-2
          bg-lilac dark:bg-stormcloud rounded-md
          transition duration-300 ease-in-out"
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
