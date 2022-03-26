import Container from "../container";
import ContainerInside from "../containerInside";
import { Button, Center, Flex, Heading, VStack, Text } from "@chakra-ui/react";

import Image from "next/image";

export default function Hero() {
  return (
    <Container h="100vh" >
      <ContainerInside>
        <Flex align="center">
          <VStack>
            <Heading as="h1" w="100%" fontSize={50} textAlign="center">
              We <span>Train</span> 💪 <span className="white-header">and</span>{" "}
              <span className="white-header">Mold</span>
              <span> Champion</span> Athletes 🏆
            </Heading>
            <Text fontSize={25}>
              Take your volleyball skills to the next level.
            </Text>
            <Button>Register Now</Button>
          </VStack>
          <Center w="100%">
            <Image
              src="/cutouts/set.png"
              width="500px"
              height="500px"
            />
          </Center>
        </Flex>
      </ContainerInside>
      {/* <Link position="absolute" onScroll={() => {}}></Link> */}
    </Container>
  );
}
