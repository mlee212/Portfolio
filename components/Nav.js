import ActiveLink from "./ActiveLink";
import Logo from "./Logo";
import { ButtonGroup, Flex, useColorMode } from "@chakra-ui/core";
import styled from "@emotion/styled";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 5;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.2s ease-in-out;
`;

export function Nav() {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#fffafa",
    dark: "#1f2023",
  };
  const navBgColor = {
    light: "rgba(255, 250, 250, 0.8)",
    dark: "rgba(31, 32, 35, 0.8)",
  };

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="45rem"
      width="100%"
      bg={navBgColor[colorMode]}
      as="nav"
      py={5}
      mt={[0, 0]}
      mb={5}
      px={8}
      mx="auto"
    >
      <Logo />
      <ButtonGroup spacing={5}>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/projects">
          <a className="nav-link">Projects</a>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/journal">
          <a className="nav-link">Journal</a>
        </ActiveLink>
      </ButtonGroup>
    </StickyNav>
  );
}
