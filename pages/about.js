import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import Timeline from "../components/Timeline";

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className="font-bold text-3xl text-mist">Interests</h1>
        <p className="my-2 mt-4">
          Get to know more about what I do and what I love outside of work.{" "}
          <span className="font-medium">Let's be human.</span>
        </p>
      </section>
      <section className="my-8">
        <Timeline />
      </section>
      <section>
        <h3 className="font-bold text-2xl mb-2 text-thunder dark:text-cararra">
          My Music
        </h3>
        <p className="mb-4">
          Here are the top ten songs I've been listening to, updated daily.
        </p>
        <TopTracks />
      </section>
    </Container>
  );
}
