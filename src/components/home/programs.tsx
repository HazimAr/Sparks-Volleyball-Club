import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakraLink";
import { motion } from "framer-motion";

const ChakraFramer = chakra(motion.div);

const cardVariants = (index: number) => ({
  offscreen: {
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
});

export default function () {
  return (
    <Container py={20}>
      <ContainerInside>
        <VStack spacing={10}>
          <Heading as="h1" size="2xl" textAlign="center">
            Programs
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="50px" color="white">
            <ChakraFramer
              variants={cardVariants(0)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
            >
              <Card
                title="Boys Club"
                description="Our Boys Volleyball program competes at one of the highest levels. Our coaches will teach our players fundamental volleyball skills as well as essential life-lessons, values, sportsmanship, teamwork, respect, and discipline."
                image="/programs/boys.png"
              />
            </ChakraFramer>
            <ChakraFramer
              variants={cardVariants(1)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
            >
              <Card
                title="Girls Club"
                description="As a family we will excel together, suffer together, learn together, grow together, celebrate together and bear all obstacles that may come up, TOGETHER. We have a program that will match athletes together from each level, enabling us to establish a connection throughout the entire program."
                image="/programs/girls.png"
              />
            </ChakraFramer>
            <ChakraFramer
              variants={cardVariants(2)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
            >
              <Card
                title="Recreational"
                description="Our recreational team focuses on child development on and off the volleyball court. Our motto “Teaching young Athletes life lessons and values through the sport of volleyball” is the foundation in which this program rests on."
                image="/programs/recreational.png"
              />
            </ChakraFramer>
            <ChakraFramer
              variants={cardVariants(3)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
            >
              <Card
                title="Camps / Clinics"
                description="Camps and Clinics are perfect for anyone who is looking to just try out the sport of volleyball.  We have a variety of camps and clinics that are designed to meet the needs of the individual athlete."
                image="/programs/camps_clinics.png"
              />
            </ChakraFramer>
          </SimpleGrid>
        </VStack>
      </ContainerInside>
    </Container>
  );
}

function Card({ title, description, image }) {
  return (
    <NextChakraLink href="/register" _hover={{}}>
      <Box
        background="white"
        backgroundImage={image}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        rounded="3xl"
        transition="transform 0.2s ease-in"
        boxShadow=""
        _hover={{
          transform: "scale(1.05)",
        }}
        h="100%"
      >
        <VStack
          rounded="3xl"
          background="rgba(0,0,0,0.5)"
          py={{ base: 10, md: 20 }}
          px={10}
          h="100%"
        >
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Button>Register</Button>
        </VStack>
      </Box>
    </NextChakraLink>
  );
}
