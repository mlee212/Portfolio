// Full Credit to Lee Robinson

import React from "react";
import { Box, Link, Stack, Text } from "@chakra-ui/core";

const Track = (track) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      px={2}
      maxWidth="100%"
      w="full"
    >
      <Text fontSize="sm" fontWeight="bold" color="gray.500">
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
          color="gray.500"
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
