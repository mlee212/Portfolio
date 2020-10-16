import { IconButton, useColorMode } from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      p={1}
      onClick={toggleColorMode}
      zIndex="10"
      aria-label="Darkmode"
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
