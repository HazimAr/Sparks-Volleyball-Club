import { Container as ChakraContainer } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
  return (
    <ChakraContainer {...props} w="100vw">
      {children}
    </ChakraContainer>
  );
}
