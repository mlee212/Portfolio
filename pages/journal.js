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
  const dateColor = {
    light: "gray.600",
    dark: "#8e95a3",
  }
  const excerptColor = {
    light: "gray.600",
    dark: "#c6cad1",
  }
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
          <>
            <Link href={`/posts/${id}`}>
              <Box mt={4} cursor="pointer" key={id}>
                <Heading size="md" fontWeight="bold">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    {title}
                    <Text fontWeight="normal" fontSize="sm" color={dateColor[colorMode]}>
                      <Date dateString={date} />
                    </Text>
                  </Box>
                </Heading>
                <Text color={excerptColor[colorMode]}>{excerpt}</Text>
              </Box>
            </Link>
          </>
        ))}
      </Box>
    </Container>
  );
}
