import { Box, Text, Link, useColorMode } from "@chakra-ui/core";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function ProjectCard({ title, children, href }) {
  const { colorMode } = useColorMode();
  const bg = {
    light: "white",
    dark: "#24272d",
  };
  const color = {
    light: "gray.600",
    dark: "#e2e4e8",
  };
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
        bg={bg[colorMode]}
        boxShadow={bxShadow[colorMode]}
        borderRadius="7px"
        px={6}
        py={5}
        transition="all 0.2s ease-in-out"
      >
        <Text textDecoration="none" fontWeight="bold" mb={2}>
          <Link href={href} textDecoration="none" isExternal>
            {title} <ExternalLinkIcon mb={1} />
          </Link>
        </Text>
        <Text textDecoration="none" color={color[colorMode]}>
          {children}
        </Text>
      </Box>
    </motion.div>
  );
}
