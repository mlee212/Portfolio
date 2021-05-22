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
    <li className={styles.step}>
      <svg className={styles.icon}>{icon}</svg>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{children}</p>
      </div>
    </li>
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
      <Step title="Built my First Keyboard" icon={<FireIcon />}>
        Tofu65 case, a DZ65 hotswap PCB, a handful of kailh box white switches,
        and a set of DSA keycaps just made me the most annoying typist in the
        room.
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
        Good bye soggy and cold high school lunches.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul className={styles.list}>
      <Step title="Built my First Computer" icon={<BoltIcon />}>
        Rookie mistake but I forgot to plug in the power button cables and
        freaked out when it would not turn on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul className={styles.list}>
      <Step title="Jailbroke my iPhone" icon={<BoltIcon />}>
        And bricked it.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul className={styles.list}>
      <Step title="Broke my PSP" icon={<SadIcon />}>
        Thought I was smart enough to undertake a full internal transplant of my
        playstation. Turns out I was missing this small tool called experience
        which led me to crack the screen.
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
        <Step title="Director of Citrus Hack" icon={<FireIcon />}>
          Bringing <i>zesty</i> ideas to Citrus Hack as a director.
        </Step>
        <Step title="First Internship" icon={<BoltIcon />}>
          Finally moving up in the world.
        </Step>
        <Step title="Built my Fourth Keyboard" icon={<FireIcon />}>
          Hopefully my last. This one is a polycarbonate Think6.5 V2 with
          lubricated durock POM switches.
        </Step>
        <Step title="First Roadtrip" icon={<BoltIcon />}>
          Crossed the border from CA to AZ, trekked over a few mountains, and
          discovered decadent food not available locally.
        </Step>
        <Step title="Built my Third Keyboard" icon={<FireIcon />}>
          An e-white Vega 65 with gateron ink switches and a set of GMK Minimal.
          It's certainly a thocky boy. Also where I discovered the 7U layout.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul className={styles.list}>
        <Step title="Web dev Lead" icon={<StarIcon />}>
          Spearheaded the development for the Biohack, Cutie Hack, and Citrus
          Hack websites. Let's just say I don't know when to stop.
        </Step>
        <Step title="Started Habitle" icon={<FireIcon />}>
          Because of my bad habits, I built a tool to promote good ones instead.
          It's super primitive but was good practice on building my own
          projects.
        </Step>
        <Step title="Online Classes" icon={<SadIcon />}>
          I am happy to announce I will be attending UC Zoom.
        </Step>
        <Step title="Joined Biohack" icon={<FireIcon />}>
          Part of the four-person team that helped design, develop, and deploy
          the Biohack hackathon website.
        </Step>
        <Step title="Built my Second Keyboard" icon={<FireIcon />}>
          A plum Iron165 from the first round of groupbuy, along with some
          lubricated novelkeys cream switches and a set of GMK Bingsu. I
          consider this one as my personal endgame board.
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
