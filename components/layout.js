import Head from "next/head";
import Link from "next/link";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Box, Button, useColorMode } from "@chakra-ui/core";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const name = "Rajbir";
export const siteTitle = "Rajbir | Portfolio";

export default function Layout({ children, home }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#101010",
  };

  return (
    <div>
      <Box bg={bgColor[colorMode]} transition="background-color 0.2s ease-in-out">
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
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Nav />
        <Box
          maxW="45rem"
          p="0 2rem"
          m="3rem auto 6rem"
          my={50}
          lineHeight="1.6"
        >
          {children}
          {!home && (
          <Link href="/journal">
            <Button variant="solid" fontWeight="medium" my={2}>
              <ChevronLeftIcon />Go back
            </Button>
          </Link>
        )}
        </Box>
        
        <Footer />
      </Box>
    </div>
  );
}
