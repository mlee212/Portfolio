import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { Heading, Box, Button, Text } from "@chakra-ui/core";

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading fontWeight="bold" as="h1" my={5}>
        Journal
      </Heading>
      <p>My thoughts and ideas written down.</p>
      <Box minH="50vh">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <Box key={id}>
            <Heading as="h2" size="lg" fontWeight="bold" lineHeight="0.5">
              <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <Text fontSize="sm" color="gray.500">
                  <Date dateString={date} />
                </Text>
              </Box>
            </Heading>
            <Text>{excerpt}</Text>
          </Box>
        ))}
      </Box>
    </Layout>
  );
}
