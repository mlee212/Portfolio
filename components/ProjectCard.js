import { Box, Heading, Text, Link, useColorMode } from "@chakra-ui/core";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function ProjectCard({ title, children, href }) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#fff",
    dark: "#111",
  };
  const bxShadow = {
    light:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    dark:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(8, 8, 8, 0.4)",
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
        bg={bgColor[colorMode]}
        boxShadow={bxShadow[colorMode]}
        borderRadius="7px"
        px={6}
        py={1}
        transition="all 0.2s ease-in-out"
      >
        <Heading fontWeight="bold" as="h3">
          <Link href={href} isExternal>
            {title} <ExternalLinkIcon mb={1} />
          </Link>
        </Heading>
        <Text>{children}</Text>
      </Box>
    </motion.div>
  );
}
