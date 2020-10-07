import { IconButton, useColorMode } from "@chakra-ui/core";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      colorScheme="yellow"
      position="fixed"
      bottom="10"
      right="10"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      p={1}
      borderRadius="50%"
      onClick={toggleColorMode}
      zIndex="10"
      _hover={{transform:"translateY(-2px)", boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 8px -1px rgba(0, 0, 0, 0.06)"}}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
