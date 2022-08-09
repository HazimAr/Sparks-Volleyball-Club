import {
  Heading,
  HStack,
  VStack,
  Text,
  Center,
  chakra,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextImage from "next/image";

import { motion, Variants } from "framer-motion";

const ChakraFramer = chakra(motion.div);

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function () {
  return (
    <Container background="primary" color="white">
      <ContainerInside>
        <VStack>
          <Heading as="h1" size="2xl" textAlign="center">
            About Us
          </Heading>
          <HStack spacing={0} flexDir={{ base: "column", md: "row" }}>
            <ChakraFramer
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              w="100%"
            >
              <VStack>
                <Heading>Who?</Heading>
                <Text>
                  Sparks Volleyball Club is committed to providing an excellent
                  volleyball experience that promotes hard work, great
                  attitudes, a genuine respect for the game, a “TEAM” concept at
                  all times, and leadership development for every athlete. SVBC
                  will provide the maximum opportunity for every athlete to train
                  and compete at their highest level.
                </Text>
              </VStack>
            </ChakraFramer>
            <ChakraFramer
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              w="100%"
            >
              <Center>
                <NextImage
                  src="/cutouts/2.png"
                  width="300px"
                  height="300px"
                  alt="girl looking up about to serve volleyball"
                />
              </Center>
            </ChakraFramer>
          </HStack>
          <HStack spacing={0} flexDir={{ base: "column-reverse", md: "row" }}>
            <ChakraFramer
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              w="100%"
            >
              <Center>
                <NextImage
                  src="/cutouts/5.png"
                  width="300px"
                  height="300px"
                  alt="girl cheering after scoring a point"
                />
              </Center>
            </ChakraFramer>
            <ChakraFramer
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              w="100%"
            >
              <VStack>
                <Heading>What?</Heading>
                <Text>
                  Champion athletes aren’t just born - they’re selected,
                  trained, molded, and tested. We hone raw talent to maturity
                  with quality coaching, primal workouts, and a true love of the
                  sport. Teamwork, perseverance, sportsmanship - those are the
                  hallmarks of Sparks VBC. No more hoping for the “good coach”
                  or following coaches from club to club.
                </Text>
              </VStack>
            </ChakraFramer>
          </HStack>
          <HStack spacing={0} flexDir={{ base: "column", md: "row" }}>
            <ChakraFramer
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              w="100%"
            >
              <VStack>
                <Heading>Why?</Heading>
                <Text>
                  Sparks Volleyball Club was founded on the core belief of
                  "Teaching life lessons through the sport of volleyball". We
                  have some of the most experienced and sought-after coaches in
                  the region. Our state of the art 17,000 square foot facility
                  is equipped with the latest volleyball training equipment.
                </Text>
              </VStack>
            </ChakraFramer>
            <ChakraFramer
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              w="100%"
            >
              <Center>
                <NextImage
                  src="/cutouts/4.png"
                  width="300px"
                  height="300px"
                  alt="girl ready to pass the ball"
                />
              </Center>
            </ChakraFramer>
          </HStack>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
