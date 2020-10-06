// Full Credit to Lee Robinson

import React, { useState } from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Stack,
  Divider,
  Code,
  Link,
} from "@chakra-ui/core";
import { StarIcon, ChevronDownIcon } from "@chakra-ui/icons";

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.400",
    dark: "gray.500",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <ListItem>
      <Stack ml={2} mb={-2}>
        <Flex align="center" mb={-6}>
          <StarIcon mr={2} color="green.300" />
          <Text fontWeight="bold">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} pl={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <Divider my={2}/>
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2018
    </Heading>
    <List>
      <TimelineStep title="Hello World!">
        I wrote my first line of code{" "}
        <Code>cout &#60;&#60; "Hello World!";</Code>
      </TimelineStep>
      <TimelineStep title="Moved to University of California, Riverside">
        For Computer Science!
      </TimelineStep>
      <TimelineStep title="Graduated High School">
        Peace out high school lunches.
      </TimelineStep>
    </List>
    <Divider my={2}/>
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2017
    </Heading>
    <List>
      <TimelineStep title="First Computer">
        I installed my Ryzen 3 2200g into my brand new motherboard. I forgot to
        plug in the power button cables and freaked out when it would not turn
        on.
      </TimelineStep>
    </List>
    <Divider my={2}/>
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2015
    </Heading>
    <List>
      <TimelineStep title="Jailbroke my First iPhone">
        ...And subsequently bricked it. Lesson learned: Don't install too many
        Cydia tweaks.
      </TimelineStep>
    </List>
    <Divider my={2}/>
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2012
    </Heading>
    <List>
      <TimelineStep title="Got my First Game Console">
        It was my first time holding a Playstation Portable and it was my
        favorite thing in the world. I would take it everywhere with me. I ended
        up trying to take it apart and cracked the screen :(.
      </TimelineStep>
    </List>
    <Divider my={2}/>
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2000
    </Heading>
    <List>
      <TimelineStep title="Born" />
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <Heading as="h1" lineHeight={1}>
        What I've Been Up To
      </Heading>
      <Heading as="h3" size="lg" fontWeight="bold" letterSpacing="tighter">
        2020
      </Heading>
      <List>
        <TimelineStep title="Started Habitle">
          As a collaboration project, my colleague Dev Bhatia and I are
          developing a web app that helps people develop positive habits by
          visualizing their progress.
        </TimelineStep>
        <TimelineStep title="Started my Junior Year">
          Here is where I currently am. I'm looking forward to more challenging
          classes in an even more challenging enviroment.
        </TimelineStep>
        <TimelineStep title="Finished All my Math Classes">
          After years and years of grueling math, I can finally say, I'm done.
        </TimelineStep>
        <TimelineStep title="UC Zoom">
          The COVID-19 Pandemic shifted all of our classes online and we had to
          adapt using video calling and online only platforms.
        </TimelineStep>
        <TimelineStep title="Joined Biohack">
          I took a major role as part of the four-man team to develop the
          website for the Biohack hackathon. (I think you can sense a trend
          here.)
        </TimelineStep>
      </List>
      <Divider my={2}/>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="Joined Citrushack">
          Developed, designed, and launched the Citrushack hackathon website
          which was used by thousands.
        </TimelineStep>
        <TimelineStep title="Joined Cutiehack">
          Attended my very first team meeting to launch the website for the
          Cutiehack hackathon.
        </TimelineStep>
        <TimelineStep title="Started Web Development">
          Around this time, I discovered where my two passions, coding and art,
          collide. I spent days pushing pixels.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          variant="solid"
          onClick={() => showFullTimeline(true)}
        >
          Read More
          <ChevronDownIcon />
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;
