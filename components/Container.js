import Head from "next/head";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import { Footer } from "./Footer";
import { Box, Button, ButtonGroup, Flex, useColorMode } from "@chakra-ui/core";
import { ChevronLeftIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const name = "Rajbir";
export const siteTitle = "Rajbir | Portfolio";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 5;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.2s ease-in-out;
`;

export default function Container({ children, main }) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: "#ffffff",
    dark: "#000000",
  };
  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(0, 0, 0, 0.8)",
  };
  const logo = {
    light: "#000",
    dark: "#fff",
  };

  return (
    <>
      <style jsx>{`
        .logo {
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
        }
        .nav-link {
          text-decoration: none;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
        .active {
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
      <Box
        bg={bgColor[colorMode]}
        transition="background-color 0.2s ease-in-out"
      >
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <meta
            name="description"
            content="A portfolio for my awesome projects and ideas using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <StickyNav
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="40rem"
          width="100%"
          bg={navBgColor[colorMode]}
          as="nav"
          py={5}
          mt={[0, 0]}
          mb={5}
          px={8}
          mx="auto"
        >
          <Box
            maxH="40px"
            maxW="40px"
            py={0}
            px={2}
            borderRadius="5px"
            bg={logo[colorMode]}
            color={bgColor[colorMode]}
          >
            <ActiveLink href="/">
              <a className="logo">R</a>
            </ActiveLink>
          </Box>
          <ButtonGroup spacing={5}>
            <ActiveLink activeClassName="active" href="/">
              <a className="nav-link">Home</a>
            </ActiveLink>

            <ActiveLink activeClassName="active" href="/projects">
              <a className="nav-link">Projects</a>
            </ActiveLink>

            <ActiveLink activeClassName="active" href="/journal">
              <a className="nav-link">Journal</a>
            </ActiveLink>
          </ButtonGroup>
        </StickyNav>
        <Box
          maxW="40rem"
          p="0 2rem"
          m="3rem auto 6rem"
          my={50}
          lineHeight="1.6"
          fontSize="lg"
        >
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
          <Button
            colorScheme="blue"
            position="fixed"
            bottom="10"
            right="10"
            boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            p={1}
            borderRadius="50%"
            onClick={toggleColorMode}
            zIndex="10"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
