import React, { useState } from 'react'
import styles from '@/styles/timeline.module.css'

import {
  HatIcon,
  CakeIcon,
  CheckIcon,
  FireIcon,
  StarIcon,
  SadIcon,
  BoltIcon,
} from '@/components/icons/icons.js'

const Divider = () => {
  return <hr />
}

const Year = ({ children }) => {
  return <h3>{children}</h3>
}

const Step = ({ title, children, icon }) => {
  return (
    <div className={styles.step}>
      <svg className={styles.icon}>{icon}</svg>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{children}</p>
      </div>
    </div>
  )
}

const FullTimeline = () => (
  <div>
    <Divider />
    <Year>2019</Year>
    <ul className={styles.list}>
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
    <ul className={styles.list}>
      <Step title="Hello World!" icon={<StarIcon />}>
        I wrote my first line of code{' '}
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
    <ul className={styles.list}>
      <Step title="Built my First Computer" icon={<BoltIcon />}>
        Forgot to plug in the power button cables and freaked out when it would
        not turn on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul className={styles.list}>
      <Step title="Jailbroke my iPhone" icon={<BoltIcon />}>
        ...and bricked it.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul className={styles.list}>
      <Step title="Broke my PSP" icon={<SadIcon />}>
        Thought I was smart enough to undertake a full internal transplant of my
        playstation.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul className={styles.list}>
      <Step title="Born" icon={<CakeIcon />}>
        Yes, haha.
      </Step>
    </ul>
  </div>
)

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <Year>2021</Year>
      <ul className={styles.list}>
        <Step title="First Internship" icon={<BoltIcon />}>
          Finally moving up in the world.
        </Step>
        <Step title="First Roadtrip" icon={<BoltIcon />}>
          Crossed the border from CA to AZ.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul className={styles.list}>
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
        <div className={styles.buttonwrapper}>
          <button
            type="button"
            className={styles.button}
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
        </div>
      )}
    </>
  )
}
