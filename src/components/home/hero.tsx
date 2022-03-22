import Container from "../container";
import ContainerInside from "../containerInside";
import { Center, Heading } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container h="100vh">
      <ContainerInside>
        <Center flexDir="column">
          <Heading as="h1" w="50vw" fontSize={98} textAlign="center">
            We <span>Train</span> 💪 and <span>Mold</span> Champion{" "}
            <span>Athletes</span> 🏆
          </Heading>
        </Center>
      </ContainerInside>
      {/* <Link position="absolute" onScroll={() => {}}></Link> */}
    </Container>
  );
}
