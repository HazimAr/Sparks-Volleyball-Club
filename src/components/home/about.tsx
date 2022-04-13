import { Heading, HStack, VStack, Text, Image, Center } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function () {
  return (
    <Container background="primary" color="white">
      <ContainerInside>
        <VStack>
          <Heading as="h1" fontSize="7xl">
            About Us
          </Heading>
          <HStack spacing={0} flexDir={{ base: "column", md: "row" }}>
            <VStack w="100%">
              <Heading>Who?</Heading>
              <Text>
                Sparks Volleyball Club is committed to providing an excellent
                volleyball experience that promotes hard work, great attitudes,
                a genuine respect for the game, a “TEAM” concept at all times,
                and leadership development for each athlete. SVBC will provide
                the maximum opportunity for each athlete to train and compete at
                their highest level.
              </Text>
            </VStack>
            <Center w="100%">
              <Image src="/cutouts/2.png" h="300px" />
            </Center>
          </HStack>
          <HStack spacing={0} flexDir={{ base: "column-reverse", md: "row" }}>
            <Center w="100%">
              <Image src="/cutouts/3.png" h="300px" />
            </Center>
            <VStack w="100%">
              <Heading>What?</Heading>
              <Text>
                Champion athletes aren’t just born - they’re selected, trained,
                molded and tested. We hone raw talent to maturity with quality
                coaching, primal workouts and a true love of the sport.
                Teamwork, perseverance, sportsmanship - those are the hallmarks
                of Sparks VBC. No more hoping for the “good coach” or following
                coaches from club to club.
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={0} flexDir={{ base: "column", md: "row" }}>
            <VStack w="100%">
              <Heading>Why?</Heading>
              <Text>
                Sparks Volley Ball Club was founded on the core belief of
                teaching life lessons through the sport of volleyball. We have
                some of the most experienced and sought-after coaches in the
                region. Our state of the art 17,000 square foot facility is
                equipped with the latest volleyball training equipment
              </Text>
            </VStack>
            <Center w="100%">
              <Image src="/cutouts/4.png" h="300px" />
            </Center>
          </HStack>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
