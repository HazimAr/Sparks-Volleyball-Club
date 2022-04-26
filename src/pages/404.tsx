import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakraLink";

export default function () {
  return (
    <Container>
      <ContainerInside>
        <Flex align="center" justify="center">
          <VStack w="100%" textAlign="center">
            <Heading as="h1">OOF!</Heading>
            <Heading size="md">404 - Page not found</Heading>
            <Text>
              We know it hurts when you <span>JUST</span> miss the line and it
              hits out. We have our IT guy{" "}
              <span>
                <Link href="https://hazim.tech" isExternal>(thats me)</Link>
              </span>{" "}
              to fix this issue.
            </Text>
            <Text>
              Please navigate{" "}
              <span>
                <Link href="/">home</Link>
              </span>{" "}
              in the meantime.
            </Text>
            <Button>
              <NextChakraLink href="/">Click Here</NextChakraLink>
            </Button>
          </VStack>
          <Center w="100%">
            <Image
              src="/404.png"
              alt="deflated volleyball"
              w={400}
              rounded="3xl"
            />
          </Center>
        </Flex>
      </ContainerInside>
    </Container>
  );
}
