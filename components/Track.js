// Full Credit to Lee Robinson

import React from "react";
import { Box, Link, Stack, Text, useColorMode } from "@chakra-ui/core";

const Track = (track) => {
  const { colorMode } = useColorMode();
  const rankingColor = {
    light: "gray.400",
    dark: "rgba(240,240,244,0.32)",
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      px={2}
      maxWidth="100%"
      w="full"
    >
      <Text fontSize="sm" fontWeight="bold" color={rankingColor[colorMode]}>
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
          color={rankingColor[colorMode]}
          mb={4}
          maxWidth="100%"
          whiteSpace="wrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {track.artist}
        </Text>
      </Stack>
    </Box>
  );
};

export default Track;
