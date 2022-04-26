import Container from "../container";

import { Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import useInterval from "hooks/useInterval";

export default function () {
  const [background, setBackground] = useState(0);

  useInterval(() => {
    setBackground((background + 1) % 10);
  }, 3000);

  return (
    <Container
      h="100vh"
      backgroundImage={`/hero/${background}.png`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="top"
      transition="background-image 1s ease"
    >
      {(() => {
        const imgs = [];
        for (let i = 0; i < 10; i++) {
          imgs.push(<Image src={`/hero/${i}.png`} display="none" />);
        }
        return imgs;
      })()}
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
