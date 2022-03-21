import { Center } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
  return (
    <Center as="section" flexDir="column" {...props}>
      {children}
    </Center>
  );
}
