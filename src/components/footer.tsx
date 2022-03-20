import {
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
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
} from "react-icons/fa";
import NextImage from "next/image";
import NextChakraLink from "./nextChakraLink";

export default function Footer() {
  return (
    <Container as="footer" bg="accent" color="whiteAlpha.600">
      <ContainerInside>
        <Flex justify="space-between">
          <Stack>
            <NextImage
              src="/logo.png"
              // layout="responsive"
              width="50px"
              height="50px"
            />
            <Text maxW="60ch">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              ad est reprehenderit omnis doloribus iusto quae pariatur eum.
              Explicabo minus atque ullam pariatur eius quas magni perferendis
              neque esse aliquid.
            </Text>
            <HStack gap={5} justify="center">
              <FooterIcon icon={<FaInstagram />} href="/instagram" />
              <FooterIcon icon={<FaTiktok />} href="/tiktok" />
              <FooterIcon icon={<FaFacebook />} href="/facebook" />
              <FooterIcon icon={<FaYoutube />} href="/youtube" />
            </HStack>
          </Stack>
          <Stack spacing={2}>
            <Heading size="sm" color="white">
              Quick Links
            </Heading>
            <NextChakraLink href="/home">Home</NextChakraLink>
            <NextChakraLink href="/register">Register</NextChakraLink>
            <NextChakraLink href="/about">About</NextChakraLink>
            <NextChakraLink href="/staff">Staff</NextChakraLink>
          </Stack>
          <Stack spacing={2}>
            <Heading size="sm" color="white">
              Follow
            </Heading>
            <NextChakraLink href="https://www.instagram.com/sparks_vbc_lv/">
              Instagram
            </NextChakraLink>
            <NextChakraLink href="/tiktok">Tiktok</NextChakraLink>
            <NextChakraLink href="https://www.facebook.com/SparksVBCLV">
              Facebook
            </NextChakraLink>
            <NextChakraLink href="https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A">
              Youtube
            </NextChakraLink>
          </Stack>
          <Stack spacing={2}>
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
              href="mailto:sparksvolleyballclub@gmail.com?subject=Contacted From Website"
              info="SparksVolleyballClub@gmail.com"
            />
          </Stack>
        </Flex>
      </ContainerInside>
      <Divider />
      <ContainerInside py={5}>
        <Flex justify="space-between">
          <Text>
            Copyright ©️ {new Date().getFullYear()} Sparks Volleyball Club LLC.
            All Rights Reserved
          </Text>

          <HStack>
            <NextChakraLink href="/privacy">Privacy Policy</NextChakraLink>
            <NextChakraLink href="/terms">Terms Of Use</NextChakraLink>
          </HStack>
        </Flex>
      </ContainerInside>
    </Container>
  );
}

function FooterIcon({ icon, href }) {
  return (
    <Link href={href} isExternal>
      <Circle fontSize="xl" p={3} bg="primary" color="white">
        {icon}
      </Circle>
    </Link>
  );
}

function Contact({ icon, href, info }) {
  return (
    <NextChakraLink href={href}>
      <HStack>
        <Circle>{icon}</Circle>
        <Text>{info}</Text>
      </HStack>
    </NextChakraLink>
  );
}
