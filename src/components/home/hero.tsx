import Container from "../container";

import { Heading } from "@chakra-ui/react";

export default function () {
  return (
    <Container
      h="100vh"
      backgroundImage="/hero.png"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Container
        w="100%"
        h="100%"
        fontSize="10vw"
        background="rgba(255,255,255,0.8)"
        color="black"
        mixBlendMode="screen"
        textTransform="uppercase"
        textAlign="center"
      >
        <Heading as="h1" fontSize="inherit">
          Train
          <br />
          Champion
          <br />
          Athletes
        </Heading>
      </Container>
    </Container>
  );
}
