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
          <Heading as="h1" fontSize="7xl" textAlign="center">
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
                image="/hero.png"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
                image="/hero.png"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
                image="/hero.png"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
                image="/hero.png"
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
      >
        <VStack
          rounded="3xl"
          background="rgba(0,0,0,0.5)"
          py={{ base: 10, md: 20 }}
          px={10}
        >
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Button>Register</Button>
        </VStack>
      </Box>
    </NextChakraLink>
  );
}
