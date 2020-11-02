import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Box, Button } from "@chakra-ui/core";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { motion, AnimatePresence } from "framer-motion";

const name = "Rajbir";
export const siteTitle = "Rajbir | Portfolio";

export default function Container({ children, main }) {
  const router = useRouter();

  return (
    <>
      <Box
        transition="background-color 0.2s ease-in-out"
      >
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <meta
            name="description"
            content="A portfolio for my neat projects and ideas using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <Nav />
        <Box
          maxW="42rem"
          p="0 2rem"
          m="3rem auto 6rem"
          my={50}
          lineHeight="1.6"
          fontSize="lg"
        >
          <AnimatePresence>
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
                x: 0,
              },
            }}
          >
            {children}
            {!main && (
              <Link href="/journal">
                <Button variant="solid" fontWeight="medium" my={2}>
                  <ChevronLeftIcon />
                  Go back
                </Button>
              </Link>
            )}
          </motion.div>
          </AnimatePresence>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
