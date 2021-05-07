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
      className="text-xl font-semibold text-gray-900 dark:text-shadow-100"
    >
      {children}
    </motion.h3>
  );
};

const Step = ({ title, children, icon }) => {
  return (
    <motion.li variants={item} className="mt-2">
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
        <h2 className="font-medium text-lg my-2 text-gray-900 dark:text-shadow-100">
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
      <Step title="Decided on Web Development" icon={<StarIcon />}>
        I hated algorithms but loved designing. One day I woke up and decided I
        would be a professional pixel pusher.
      </Step>
      <Step title="Built my First Portfolio" icon={<FireIcon />}>
        And it was straight up ugly.
      </Step>
      <Step title="Joined Cutie Hack" icon={<FireIcon />}>
        On a whim, I attended my very first team meeting to launch the website
        for 2019 Cutie Hack.
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
        I forgot to plug in the power button cables and freaked out when it
        would not turn on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Jailbroke my First iPhone" icon={<BoltIcon />}>
        ...and bricked it.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Broke my PSP" icon={<SadIcon />}>
        I decided that I was smart enough to complete a full internal transplant
        of my playstation. It turns out a small lack of experience can break
        things.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Born" icon={<CakeIcon />}>
        Haha, yes.
      </Step>
    </ul>
  </motion.div>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h2 className="mt-8 mb-4 font-semibold text-2xl text-gray-900 dark:text-shadow-100">
        Experiences
      </h2>
      <Year>2021</Year>
      <ul>
        <Step title="First Internship" icon={<FireIcon />}>
          Accepted a position at a promising startup as a frontend developer.
        </Step>
        <Step title="First Roadtrip" icon={<BoltIcon />}>
          Crossed the border from CA to AZ.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Web dev Lead" icon={<StarIcon />}>
          I'm now in charge of the development for the vision of UCR's Cutie
          Hack, Citrus Hack, and Biohack.
        </Step>
        <Step title="Started Habitle" icon={<FireIcon />}>
          Due to our negative habits, my colleague Dev Bhatia and I are
          developing a web app that helps people develop positive habits by
          visualizing their progress.
        </Step>
        <Step title="Started my Junior Year" icon={<HatIcon />}>
          Half way there!
        </Step>
        <Step title="Finished All my Math Classes" icon={<HatIcon />}>
          No more!
        </Step>
        <Step title="Online Classes Begin" icon={<SadIcon />}>
          I am happy to announce that I will now be attending UC Zoom.
        </Step>
        <Step title="Joined Biohack" icon={<FireIcon />}>
          I helped develop, design, and launch the 2019 Biohack website (that
          was supposed to be) used by hundreds of student hackers.
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
