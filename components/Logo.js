import Link from "next/link";
import { Box, useColorMode } from "@chakra-ui/core";

export default function Logo() {
  const { colorMode } = useColorMode();
  const logo = {
    light: "#1f2023",
    dark: "#f6a6a6",
  };
  const logoBgColor = {
    light: "#fff",
    dark: "#fff",
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
      bg={logo[colorMode]}
      color={logoBgColor[colorMode]}
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
