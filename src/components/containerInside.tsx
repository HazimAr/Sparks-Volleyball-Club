import { Container as ChakraContainer } from "@chakra-ui/react";

export default function ContainerInside({ children, ...props }) {
  return <ChakraContainer {...props}>{children}</ChakraContainer>;
}
