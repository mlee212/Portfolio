import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";
import { Heading, Box, Text, useColorMode } from "@chakra-ui/core";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Readings({ allPostsData }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#000",
    dark: "rgba(240,240,244, 0.5)",
  };

  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading fontWeight="bold" as="h1" my={5}>
        Journal
      </Heading>
      <p>My thoughts and ideas written down.</p>
      <Box minH="50vh" maxW="45rem">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <Box key={id}>
            <Heading as="h2" size="lg" fontWeight="bold" lineHeight="0.5">
              <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <Text fontWeight="normal" fontSize="sm" color={textColor[colorMode]}>
                  <Date dateString={date} />
                </Text>
              </Box>
            </Heading>
            <Text color={textColor[colorMode]}>{excerpt}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
