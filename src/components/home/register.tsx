import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakraLink";

export default function () {
  return (
    <Container>
      <ContainerInside>
        <VStack>
          <Heading as="h1" fontSize="7xl">
            Programs
          </Heading>
          <SimpleGrid columns={2} gap="50px" color="white" pt={10}>
            <Card
              title="Boys Club"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
              image="/hero.png"
            />
            <Card
              title="Girls Club"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
              image="/hero.png"
            />
            <Card
              title="Recreational"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
              image="/hero.png"
            />
            <Card
              title="Camps / Clinics"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ullam illo eaque, magnam porro veniam voluptatum et tempora nostrum hic beatae modi. Atque, sequi quaerat suscipit sit corrupti saepe."
              image="/hero.png"
            />
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
        <VStack rounded="3xl" background="rgba(0,0,0,0.5)" py={20} px={10}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Button>Register</Button>
        </VStack>
      </Box>
    </NextChakraLink>
  );
}
