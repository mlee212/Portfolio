import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";

const Heading = () => {
  return (
    <h1 className="mb-4 font-bold text-3xl text-teal-400 dark:text-red-400">
      Me
    </h1>
  );
};

const Subheading = ({ children }) => {
  return (
    <h2 className="mt-8 mb-4 font-semibold text-2xl text-gray-900 dark:text-shadow-100">
      {children}
    </h2>
  );
};

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <Heading />
        <div className="space-y-2">
          <p>
            You found my corner of the internet, where you can learn about how I
            want to make the web a beautiful place. I'm a student at the
            University of California at Riverside studying Computer Science. But
            my real passion lies in frontend web development.
          </p>
          <p>
            If I'm not coding, you can catch me perfecting the art of the
            grilled cheese or building bespoke keyboards. I'm typing on my{" "}
            <Link href="https://smithrune.com" passHref>
              <a className="text-teal-600 dark:text-red-400 hover:underline">
                Iron165
              </a>
            </Link>{" "}
            (my favorite board ever) with lubricated cream switches.
          </p>
          <p>
            You can also find me currently playing through <i>Returnal</i>.
          </p>
          <p>I'm always up for a conversation. Feel free to hit me up.</p>
        </div>
        <Subheading children="Music" />
        <p className="mb-4">
          Here are the top ten songs I've been listening to, updated daily.
        </p>
        <TopTracks />
        <Subheading children="Setup" />
        <p>
          <i>In progress.</i>
        </p>
        <h3 className="font-medium text-lg my-2 text-gray-900 dark:text-shadow-100">
          Hardware
        </h3>
        <ul className="list-disc list-inside">
          <li>2019 Macbook Pro 16"</li>
          <li>2018 iPad Pro 11"</li>
          <li>Dell U2720Q</li>
        </ul>
        <h3 className="font-medium text-lg my-2 text-gray-900 dark:text-shadow-100">
          Keyboards
        </h3>
        <ul className="list-disc list-inside">
          <li>Iron165 Plum with a brass plate and cream switches</li>
          <li>
            Vega65 White with a polycarbonate plate and gateron ink switches
          </li>
          <li>Think6.5 v2 PC with an FR4 plate and durock switches</li>
        </ul>

        <h3 className="font-medium text-lg my-2 text-gray-900 dark:text-shadow-100">
          Software
        </h3>
        <ul className="list-disc list-inside">
          <li>Visual Studio Code</li>
          <li>Notion</li>
          <li>Spotify</li>
        </ul>
      </div>
    </Container>
  );
}
