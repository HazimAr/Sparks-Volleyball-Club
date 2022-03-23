import { Button, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack>
      <Heading as="h1">OOF!</Heading>
      <Heading size="md">404 - Page not found</Heading>
      <Text>
        We know it hurts when you <span>JUST</span> miss the line and it hits
        out. We have our IT guy,{" "}
        <span>
          <Link href="https://hazim.tech">(thats me)</Link>
        </span>
        , to fix this issue.
      </Text>
      <Text>
        Please navigate{" "}
        <span>
          <Link href="/">home</Link>
        </span>{" "}
        in the meantime.
      </Text>
      <Button>
        <Link href="/">Click Here</Link>
      </Button>
      <Image src="/404.png" alt="deflated volleyball" />
    </VStack>
  );
}
