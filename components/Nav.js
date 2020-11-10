import ActiveLink from "./ActiveLink";
import Logo from "./Logo";
import { ButtonGroup, Flex, useColorMode, Box } from "@chakra-ui/core";
import styled from "@emotion/styled";

import { DarkMode } from "./DarkMode";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 5;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.2s ease-in-out;
`;

export function Nav() {
  const { colorMode } = useColorMode();
  const navBgColor = {
    light: "rgba(253, 254, 254, 0.8)",
    dark: "rgba(25, 27, 31, 0.8)",
  };

  return (
    <>
      <StickyNav
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        py={5}
        mt={[0, 0]}
        mb={5}
        px={6}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="50rem"
          width="100%"
          mx="auto"
        >
          <Logo />
          <ButtonGroup alignItems="center" spacing={5}>
            <ActiveLink activeClassName="active" href="/">
              <a className="nav-link">Home</a>
            </ActiveLink>

            <ActiveLink activeClassName="active" href="/projects">
              <a className="nav-link">Projects</a>
            </ActiveLink>
            <DarkMode />
          </ButtonGroup>
        </Box>
      </StickyNav>
    </>
  );
}
