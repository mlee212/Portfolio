import Container from "../../components/Container";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import Head from "next/head";
import {
  Heading,
  Text,
  Box,
  Avatar,
  Flex,
} from "@chakra-ui/core";

export default function Post({ postData }) {
  return (
    <Container>
      <Box maxW="45rem" m="3rem auto 0rem">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <Heading as="h1" mb={4}>
            {postData.title}
          </Heading>
          <Flex my={-4} alignItems="center">
            <Avatar size="xs" name="Rajbir Johar" src="/images/profile.jpeg" />
            <Text pl={2} fontSize="sm">
              {postData.author} / <Date dateString={postData.date} />
            </Text>
          </Flex>
          <Text mb={4}>{postData.excerpt}</Text>
          <Text>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Text>
        </article>
      </Box>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
