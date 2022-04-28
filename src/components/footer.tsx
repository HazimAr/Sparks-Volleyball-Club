import {
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useToken,
  VStack,
} from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaMapPin,
} from "react-icons/fa";
import NextImage from "next/image";
import NextChakraLink from "./nextChakraLink";

export default function Footer() {
  const primary = useToken("colors", "primary");
  return (
    <Container as="footer" bg="accent" color="whiteAlpha.600" mt={200}>
      <ContainerInside as={VStack}>
        <Center
          w="100%"
          bg="gradient"
          py={10}
          pos="relative"
          bottom={100}
          rounded="3xl"
          textAlign="center"
          boxShadow={`0px 0px 65px ${primary}`}
        >
          <VStack maxW="500px" px="25px" color="white">
            <Heading fontSize={{ base: "xl", sm: "3xl", lg: "4xl" }} as="h1">
              Upgrade ☝️ your skills today!
            </Heading>
            <Text fontSize={{ base: "sm", sm: "lg" }}>
              ⚒️ Build up your volleyball knowledge.
            </Text>
            <HStack>
              <NextChakraLink href="/register">
                <Button variant="secondary">Register</Button>
              </NextChakraLink>
            </HStack>
          </VStack>
        </Center>
        <Flex
          justify={{ base: "flex-start", md: "space-between" }}
          flexDir={{ base: "column", lg: "row" }}
          w="100%"
        >
          <VStack>
            <NextChakraLink href="/">
              <NextImage
                src="/logos/transparent_white.png"
                alt="sparks volleyball club's logo"
                width="200px"
                height="200px"
              />
            </NextChakraLink>
            <HStack gap={5} justify="center">
              <FooterIcon icon={<FaInstagram />} href="/instagram" />
              <FooterIcon icon={<FaTiktok />} href="/tiktok" />
              <FooterIcon icon={<FaFacebook />} href="/facebook" />
              <FooterIcon icon={<FaYoutube />} href="/youtube" />
            </HStack>
          </VStack>
          <Flex
            justify={{ base: "flex-start", md: "space-between" }}
            w="100%"
            pt={{ base: 20, lg: 0 }}
            flexDir={{ base: "column", md: "row" }}
            gap={10}
          >
            <Stack>
              <Heading size="sm" color="white">
                Quick Links
              </Heading>
              <NextChakraLink href="/">Home</NextChakraLink>
              <NextChakraLink href="/register">Register</NextChakraLink>
              <NextChakraLink href="/staff">Staff</NextChakraLink>
              {/* <NextChakraLink href="/story">Our Story</NextChakraLink> */}
              {/* <NextChakraLink href="/sponsors">Sponsors</NextChakraLink> */}
              <NextChakraLink href="/contact">Contact</NextChakraLink>
            </Stack>
            <Stack>
              <Heading size="sm" color="white">
                Follow
              </Heading>
              <Link isExternal href="/instagram">
                Instagram
              </Link>
              <Link isExternal href="/tiktok">
                Tiktok
              </Link>
              <Link isExternal href="/facebook">
                Facebook
              </Link>
              <Link isExternal href="/youtube">
                Youtube
              </Link>
            </Stack>
            <Stack>
              <Heading size="sm" color="white">
                Legal
              </Heading>
              <NextChakraLink href="/privacy">Privacy</NextChakraLink>
              <NextChakraLink href="/terms">Terms</NextChakraLink>
              <NextChakraLink href="/policy">Policy</NextChakraLink>
            </Stack>
            <Stack>
              <Heading size="sm" color="white">
                Contact Us
              </Heading>

              <Contact
                icon={<FaPhoneAlt />}
                href="tel:702-502-9462"
                info="(702) 502-9462"
              />
              <Contact
                icon={<FaEnvelope />}
                href="mailto:info@sparksvolleyballclub.com?subject=Contacted From Website"
                info="info@sparksvolleyballclub.com"
              />
              <Contact
                icon={<FaMapPin />}
                href="https://www.google.com/maps/dir/36.2180943,-115.249782/sparks+volleyball+club/@36.2178527,-115.2545354,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c8c1a7459214d1:0xbbbbae1da4ca6fcb!2m2!1d-115.1901779!2d36.2189483"
                info="3778 W. Cheyenne Ave STE 120"
              />
            </Stack>
          </Flex>
        </Flex>
      </ContainerInside>
      <Divider />
      <ContainerInside py={5}>
        <Flex
          textAlign="center"
          justify="space-between"
          flexDir={{ base: "column-reverse", md: "row" }}
          gap={10}
        >
          <Text>
            Copyright ©️ {new Date().getFullYear()} Sparks Volleyball Club LLC.
            All Rights Reserved
          </Text>

          <Link href="https://hazim.tech" isExternal>
            Designed & Developed with<span> ❤ </span>
            by: <span style={{ fontWeight: "bold" }}>Hazim Arafa</span>
          </Link>
        </Flex>
      </ContainerInside>
    </Container>
  );
}

function FooterIcon({ icon, href }) {
  return (
    <Link fontSize={0} href={href} isExternal>
      {href.split("/")[1]}
      <Circle
        transition="all ease .3s"
        _hover={{ background: "white", color: "primary" }}
        fontSize="2xl"
        p={3}
        bg="primary"
        color="white"
      >
        {icon}
      </Circle>
    </Link>
  );
}

function Contact({ icon, href, info }) {
  return (
    <Link href={href} isExternal>
      <HStack>
        <Circle>{icon}</Circle>
        <Text>{info}</Text>
      </HStack>
    </Link>
  );
}
