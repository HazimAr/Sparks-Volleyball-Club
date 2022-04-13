import {
  Heading,
  HStack,
  VStack,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function () {
  return (
    <Container>
      <ContainerInside>
        <VStack>
          <Heading as="h1" fontSize="7xl">
            About Us
          </Heading>
          <HStack spacing={0}>
            <VStack w="100%">
              <Heading>Who?</Heading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                sit nam ad delectus tempora vel animi illum doloremque id
                ducimus esse veniam rerum voluptatem nemo, voluptate obcaecati
                aperiam sint quaerat.
              </Text>
            </VStack>
            <Center w="100%">
              <Image src="/cutouts/2.png" h="300px" />
            </Center>
          </HStack>
          <HStack spacing={0}>
            <Center w="100%">
              <Image src="/cutouts/3.png" h="300px" />
            </Center>
            <VStack w="100%">
              <Heading>What?</Heading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                sit nam ad delectus tempora vel animi illum doloremque id
                ducimus esse veniam rerum voluptatem nemo, voluptate obcaecati
                aperiam sint quaerat.
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={0}>
            <VStack w="100%">
              <Heading>Why?</Heading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                sit nam ad delectus tempora vel animi illum doloremque id
                ducimus esse veniam rerum voluptatem nemo, voluptate obcaecati
                aperiam sint quaerat.
              </Text>
            </VStack>
            <Center w="100%">
              <Image src="/cutouts/4.png" h="300px" />
            </Center>
          </HStack>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
