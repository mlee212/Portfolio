import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";
import { Heading, Box, Text } from "@chakra-ui/core";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Readings({ allPostsData }) {
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
              <Box borderRadius="7px" cursor="pointer" key={id}>
                <Heading as="h2" size="lg" fontWeight="bold" lineHeight="0.5">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    {title}
                    <Text fontWeight="normal" fontSize="sm" color="gray.500">
                      <Date dateString={date} />
                    </Text>
                  </Box>
                </Heading>
                <Text>{excerpt}</Text>
              </Box>
            </Link>
          </>
        ))}
      </Box>
    </Container>
  );
}
