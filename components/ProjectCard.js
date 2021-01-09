import {
  Box,
  Text,
  Link,
  useColorMode,
  useColorModeValue,
  Center,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  title,
  category,
  children,
  image,
  href,
}) {
  const { colorMode } = useColorMode();
  const bg = {
    light: "white",
    dark: "#24272d",
  };
  const color = useColorModeValue("gray.600", "#e2e4e8");
  const bxShadow = {
    light:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    dark:
      "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  };
  
  return (
    <motion.div
      whileTap={{ scale: 1 }}
      whileHover={{
        position: "relative",
        zIndex: 1,
        background: "transparent",
        scale: [1, 1.02, 1.01],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Box
        display={{ md: "flex" }}
        bg={bg[colorMode]}
        boxShadow={bxShadow[colorMode]}
        borderRadius="7px"
        minHeight="100%"
        transition="all 0.2s ease-in-out"
        p={3}
        zIndex="1000"
      >
        <Center
          flexShrink={0}
          bgImage={image}
          p={4}
        >
          <Image
            width="150px"
            height="150px"
            src={image}
            alt="Project Brand Logo"
          />
        </Center>

        <Box mt={{ base: 4, md: 0 }} ml={{ md: 2 }} p={4}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            {category}
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href={href}
            isExternal
          >
            {title}
          </Link>
          <Text mt={2} color={color}>
            {children}
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
}
