// Full Credit to Lee Robinson

import React from 'react';
import { Box, Link, Stack, Text, useColorMode } from '@chakra-ui/core';

const Track = (track) => {
  const { colorMode } = useColorMode();
  const rankingColor = {
    light: 'gray.400',
    dark: 'gray.600'
  };

  return (
    <Box
      
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      
      p={2}
      maxWidth="100%"
      w="full"
    >
      <Text fontSize="sm" fontWeight="bold" color={rankingColor[colorMode]}>
        {track.ranking}
      </Text>
      <Stack spacing={0} ml={3}>
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