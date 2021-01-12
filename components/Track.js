// Full Credit to Lee Robinson

import React from "react";
import { Box, Divider, Link, Stack, Text, useColorMode } from "@chakra-ui/core";

const Track = (track) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.600",
    dark: "#8e95a3",
  }
  return (
    <>
    <Box
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      pt={4}
      maxWidth="100%"
      w="full"
    >
      <Text fontSize="sm" fontWeight="bold" color={color[colorMode]}>
        {track.ranking}
      </Text>
      <Stack ml={3}>
        <Link
          fontWeight="medium"
          maxWidth="100%"
          whiteSpace="wrap"
          overflow="hidden"
          textOverflow="ellipsis"
          href={track.songUrl}
          isExternal
        >
          {track.title}
        </Link>
        <Text
          color={color[colorMode]}
          mb={2}
          maxWidth="100%"
          whiteSpace="wrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {track.artist}
        </Text>
      </Stack>
    </Box>
    <Divider />
    </>
  );
};

export default Track;
