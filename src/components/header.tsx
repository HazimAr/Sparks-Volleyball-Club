import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";

export default function Header() {
  const [background, setBackground] = useState(false);
  console.log(location.pathname);

  useEffect(() => {
    onscroll = () => {
      if (window.scrollY > 50) {
        setBackground(true);
        return;
      }

      setBackground(false);
    };
  }, []);

  return (
    <Container
      position={location.pathname == "/" ? "fixed" : "sticky"}
      top={0}
      h={100}
      w={location.pathname == "/" ? "100vw" : "auto"}
      transition="all 0.5s ease-in-out"
      background={background ? "white" : "transparent"}
      zIndex={100}
    >
      <ContainerInside>
        <Flex align="center" justify="space-between">
          <Image src="/logo.png" alt="sparks volleyball club's logo" />
          <Flex gap={10}>
            <NextChakraLink href="/">Home</NextChakraLink>
            <NextChakraLink href="/register">Register</NextChakraLink>
            <NextChakraLink href="/staff">Staff</NextChakraLink>
            <NextChakraLink href="/story">Our Story</NextChakraLink>
            <NextChakraLink href="/sponsors">Sponsors</NextChakraLink>
            <NextChakraLink href="/contact">Contact</NextChakraLink>
          </Flex>
        </Flex>
      </ContainerInside>
    </Container>
  );
}
