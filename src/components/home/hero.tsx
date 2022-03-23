import Container from "../container";
import ContainerInside from "../containerInside";
import { Center, Flex, Heading, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container h="100vh" w="100%">
      <ContainerInside>
        <Flex align="center">
          <Heading as="h1" w="100%" fontSize={66} textAlign="center">
            We <span>Train</span> 💪 <span className="white-header">and</span>{" "}
            <span className="white-header">Mold</span>
            <span> Champion</span> Athletes 🏆
          </Heading>
          <Center w="100%">
            <Image src="/hero.png" w="500px" transform="scaleX(1)" />
          </Center>
        </Flex>
      </ContainerInside>
      {/* <Link position="absolute" onScroll={() => {}}></Link> */}
    </Container>
  );
}
