import Head from "next/head";
import { useRouter } from "next/router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/core";

import { motion, AnimatePresence } from "framer-motion";

import Particles from "react-tsparticles"

const name = "Rajbir";
export const siteTitle = "Rajbir | Portfolio";

export default function Container({ children, main }) {
  const router = useRouter();

  return (
    <>
      <Box transition="background-color 0.2s ease-in-out">
        <Head>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-128.png"
            sizes="128x128"
          />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta
            name="msapplication-square70x70logo"
            content="mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="mstile-310x310.png"
          />

          <meta
            name="description"
            content="A portfolio for my neat projects and ideas using Next.js"
          />
          <meta
            property="og:image"
            content="/images/icon_logo.png"
            // content={`https://og-image.now.sh/${encodeURI(
            //   siteTitle
            // )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <Nav />
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
            position: {
              value: "",
            },
          },
          backgroundMode:{
            enable: true,
            zIndex: -100,
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 2.0,
                opacity_min: 0.6,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 0.3,
                size_min: 1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 60,
              color: "#ffffff",
              opacity: 0.7,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 0,
                rotateY: 0
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onDiv: [
                {
                  enable: true,
                  selectors: ".titlespace",
                  mode: "bounce",
                  type: "rectangle"
                }
              ],
              resize: true,
              onhover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: true,
                  force: 100,
                  smooth: 6
                }
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 250,
                size: 6,
                duration: 2,
                opacity: 0.9,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              },
              push: {
                particles_nb: 1
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          detectRetina: true,
        }}
      />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
                x: -10,
              },
              pageAnimate: {
                opacity: 1,
                x: 0,
              },
              pageExit: {
                opacity: 0,
                x: 10,
              },
            }}
          >
            <Box
              maxW="45rem"
              p="0 1.75rem"
              m="3rem auto 6rem"
              my={50}
              lineHeight="1.6"
              fontSize="lg"
              overflowX="hidden"
            >
              {children}
            </Box>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </Box>
    </>
  );
}
