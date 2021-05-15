import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container, { siteTitle } from '../components/Container'

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>Rajbir Johar | Home</title>
      </Head>
      <section>
        <h1 className="font-bold text-3xl text-mist">Rajbir Johar</h1>
        <h2 className="font-medium mt-4">
          Frontend Developer <br />
          Based in Southern California
        </h2>
      </section>
      <section className="mt-8">
        <h3 className="font-bold text-2xl text-thunder dark:text-cararra">
          About
        </h3>
        <div className="my-2 mt-4 space-y-2">
          <p>
            You found my corner of the internet. Learn about how I want to make
            the web a beautiful place. I am a Junior at the University of
            California, Riverside studying Computer Science. But my real passion
            lies in frontend web development.
          </p>
          <p>
            If I am not coding, you can catch me perfecting the art of the
            grilled cheese or building bespoke keyboards. I'm typing on my{' '}
            <Link href="https://smithrune.com" passHref>
              <a className="text-boulder dark:text-mobster hover:underline">
                Iron165
              </a>
            </Link>{' '}
            (my favorite board ever) with lubricated cream switches. You can
            also find me currently playing through <i>Returnal</i>.
          </p>
          <p>I'm always up for a conversation. Feel free to hit me up.</p>
        </div>
      </section>
    </Container>
  )
}
