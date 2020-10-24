import Link from "next/link";
import { Box, useColorMode } from "@chakra-ui/core";

export default function Logo() {
  const { colorMode } = useColorMode();
  const bg = {
    light: "gray.800",
    dark: "#fff",
  };
  const color = {
    light: "#fff",
    dark: "gray.800",
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      maxH="30px"
      maxW="30px"
      minH="30px"
      minW="30px"
      py={0}
      px={2}
      borderRadius="2px"
      bg={bg[colorMode]}
      color={color[colorMode]}
      textDecoration="none"
      fontSize="18px"
      fontWeight="600"
    >
      <Link href="/">
        <a className="logo">R</a>
      </Link>
    </Box>
  );
}
