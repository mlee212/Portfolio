import Link from "next/link";
import { Box, Button, useColorModeValue, Heading } from "@chakra-ui/core";

export default function Logo() {
  const bg = useColorModeValue("gray.100", "#24272d");
  return (
    <Link href="/">
        <Box>
          <Heading fontSize="xl" cursor="pointer">RJ.</Heading>
        </Box>
    </Link>
  );
}
