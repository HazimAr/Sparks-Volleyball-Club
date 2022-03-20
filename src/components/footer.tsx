import { Box, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Container as="footer" bg="accent" color="white">
      <ContainerInside>
        <HStack>
          <VStack spacing={4}>
            <Icon as={FaPhoneAlt} bg="primary" fontSize={30} />
            <Heading fontSize="sm">(702) 502-9462</Heading>
          </VStack>
        </HStack>
      </ContainerInside>
    </Container>
  );
}
