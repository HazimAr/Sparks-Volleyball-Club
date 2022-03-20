import { Center } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
  return (
    <Center as="section" w="100vw" flexDir="column" {...props}>
      {children}
    </Center>
  );
}
