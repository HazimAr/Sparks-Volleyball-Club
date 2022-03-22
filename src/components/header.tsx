import { Flex, Image, Link } from "@chakra-ui/react";
import { useState } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";

export default function Header() {
  const [background, setBackground] = useState(false);
  console.log(location.pathname);

  return (
    <Container
      position={location.pathname == "/" ? "fixed" : "sticky"}
      top={0}
      h={100}
      w={location.pathname == "/" ? "100vw" : "auto"}
      background={background ? "white" : "transparent"}
      onScroll={() =>
        window.scrollY == 0 ? setBackground(false) : setBackground(true)
      }
      zIndex={100}
    >
      <ContainerInside>
        <Flex align="center" justify="space-between">
          <Image src="/logo.png" />
          <Flex gap={10}>
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/staff">Staff</Link>
            <Link href="/story">Our Story</Link>
            <Link href="/sponsors">Sponsors</Link>
            <Link href="/contact">Contact</Link>
          </Flex>
        </Flex>
      </ContainerInside>
    </Container>
  );
}
