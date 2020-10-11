import Container from "../../components/Container";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";
import {
  Heading,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/core";

export default function Post({ postData }) {
  return (
    <Container>
      <Box maxW="45rem" m="3rem auto 0rem">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Journal</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{postData.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1" mb={4}>
            {postData.title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {postData.author} / <Date dateString={postData.date} />
          </Text>
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
