import { Flex, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";

export default function Header() {
  const [background, setBackground] = useState(false);
  console.log(location.pathname);

  useEffect(() => {
    onscroll = () => {
      if (window.scrollY > 30) {
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
      w={location.pathname == "/" ? "100vw" : "auto"}
      transition="all 0.3s ease"
      background={background ? "white" : "transparent"}
      shadow={background ? "md" : null}
      zIndex={100}
      // color={background ? "black" :  "white"}
      fontSize={22}
    >
      <ContainerInside py={2}>
        <Flex align="center" justify="space-between">
          <NextChakraLink href="/">
            <Flex align="center" gap={5}>
              <Image
                src="/logos/transparent.png"
                alt="sparks volleyball club's logo"
                w="75px"
              />
              <Heading size="md">Sparks Volleyball Club</Heading>
            </Flex>
          </NextChakraLink>
          <Flex gap={10}>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/register">Register</HeaderLink>
            <HeaderLink href="/staff">Staff</HeaderLink>
            {/* <HeaderLink href="/story">Our Story</HeaderLink> */}
            {/* <HeaderLink href="/sponsors">Sponsors</HeaderLink> */}
            <HeaderLink href="/contact">Contact</HeaderLink>
          </Flex>
        </Flex>
      </ContainerInside>
    </Container>
  );
}

function HeaderLink({ children, href, ...props }) {
  return (
    <NextChakraLink href={href} {...props}>
      {children}
    </NextChakraLink>
  );
}
