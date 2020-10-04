import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  useColorMode,
  ButtonGroup,
  Flex,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 5;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.2s ease-in-out;
`;

export const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#101010",
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(16, 16, 16, 0.8)'
  };

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="50rem"
      width="100%"
      bg={navBgColor[colorMode]}
      as="nav"
      py={5}
      mt={[0, 0]}
      mb={5}
      px={8}
      mx="auto"
    >
      <Button p={1} onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <ButtonGroup spacing={1}>
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>

        <Link href="/projects">
          <Button variant="ghost">Projects</Button>
        </Link>

        <Link href="/journal">
          <Button variant="ghost">Journal</Button>
        </Link>
      </ButtonGroup>
    </StickyNav>
  );
};
