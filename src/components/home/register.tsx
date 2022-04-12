import { Heading, HStack, SimpleGrid, VStack, Button } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function () {
  return (
    <Container>
      <ContainerInside>
        <VStack>
          <Heading as="h1">Why Us?</Heading>
          <Button>Register Now</Button>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
