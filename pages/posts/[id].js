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
  useColorMode,
} from "@chakra-ui/core";

export default function Post({ postData }) {
  const { colorMode } = useColorMode();
  const textColor = {
    light:"#333",
    dark: "rgba(240,240,244, 0.7)",
  }
  return (
    <Container>
      <Box maxW="45rem" m="3rem auto 0rem">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <Breadcrumb color={textColor[colorMode]}>
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
          <Text fontSize="sm" color={textColor[colorMode]}>
            {postData.author} / <Date dateString={postData.date} />
          </Text>
          <Text mb={4} color={textColor[colorMode]}>
            {postData.excerpt}
          </Text>
          <Text color={textColor[colorMode]}>
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
