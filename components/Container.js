import Head from "next/head";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import { Footer } from "./Footer";
import { Box, Button, ButtonGroup, Flex, useColorMode } from "@chakra-ui/core";
import { ChevronLeftIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

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
    light: "#fff",
    dark: "#080808",
  };
  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(8, 8, 8, 0.8)",
  };

  return (
    <>
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .nav-link:hover{
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
          maxWidth="50rem"
          width="100%"
          bg={navBgColor[colorMode]}
          as="nav"
          py={5}
          mt={[0, 0]}
          mb={5}
          px={8}
          mx="auto"
        >
          <Button p={1} borderRadius="50%" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
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
          {children}
          {!main && (
            <Link href="/journal">
              <Button variant="solid" fontWeight="medium" my={2}>
                <ChevronLeftIcon />
                Go back
              </Button>
            </Link>
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
