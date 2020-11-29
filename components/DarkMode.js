import { IconButton, useColorMode, Box } from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box transition="all ease 1s" _hover={{ transform: "rotate(-360deg)" }}>
      <IconButton
        variant="ghost"
        p={1}
        borderRadius="50%"
        onClick={toggleColorMode}
        zIndex="10"
        aria-label="Darkmode"
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Box>
  );
}
