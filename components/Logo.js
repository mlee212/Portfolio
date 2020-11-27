import Link from "next/link";
import Image from 'next/image';
import { Box, useColorMode, Button, useColorModeValue } from "@chakra-ui/core";

export default function Logo() {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue("gray.100", "gray.600")
  return (
    <Link href="/">
      <Button padding="1" variant="solid" backgroundColor={bg} borderRadius="50%"><Box>
    <Image 
    src="/images/icon_logo.png"
    alt="Logo picture"
    width="32"
    height="32"
    cursor="pointer"
    />
    </Box></Button>
    </Link>
  );
}
