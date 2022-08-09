import { useEffect, useState } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";
import NextImage from "next/image";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function () {
  const [background, setBackground] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onscroll = () => {
      if (window.scrollY > 30) {
        setBackground(true);
        return;
      }

      setBackground(false);
    };
  }, []);

  return (
    <Container
      position={location.pathname == "/" ? "fixed" : "sticky"}
      top={0}
      w={location.pathname == "/" ? "100vw" : "auto"}
      transition="all 0.3s ease"
      background={background ? "white" : "transparent"}
      shadow={background ? "md" : null}
      zIndex={100}
      fontSize={22}
      as="header"
    >
      <ContainerInside py={2}>
        <Flex align="center" justify={{ base: "start", md: "center" }}>
          <Flex
            flex={1}
            display={{ base: "flex", md: "none" }}
            justify="center"
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              _hover={{ background: "white" }}
            />
          </Flex>
          <Flex
            w={{ base: "auto", md: "100%" }}
            justify={{ base: "center", md: "space-between" }}
            align="center"
          >
            <NextChakraLink href="/">
              <Flex
                gap={5}
                align="center"
                justify="center"
                flexDir={{ base: "column", sm: "row" }}
              >
                <NextImage
                  src="/logos/transparent_black.png"
                  alt="sparks volleyball club's logo"
                  width="75px"
                  height="75px"
                />
                <Heading
                  display={{ base: "none", sm: "block" }}
                  size="md"
                  textAlign="center"
                >
                  Sparks Volleyball Club
                </Heading>
              </Flex>
            </NextChakraLink>

            <Flex display={{ base: "none", md: "flex" }}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Flex flex={1} justify="center">
            <HeaderLink
              href="/register"
              display={{ base: "none", sm: "block" }}
            >
              <Button ml={8}>Register</Button>
            </HeaderLink>
          </Flex>
        </Flex>
      </ContainerInside>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          display={
            navItem.label.toLowerCase() == "register" && {
              base: "block",
              sm: "none",
            }
          }
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            {/* @ts-ignore */}
            <PopoverTrigger>
              <HeaderLink p={2} href={navItem.href ?? "#"} fontWeight={500}>
                {navItem.label}
              </HeaderLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <HeaderLink
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </HeaderLink>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="white" p={4} display={{ md: "none" }} w="92vw">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={HeaderLink}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <HeaderLink key={child.label} py={2} href={child.href}>
                {child.label}
              </HeaderLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

function HeaderLink({ children, href, ...props }) {
  return (
    <NextChakraLink href={href} {...props}>
      {children}
    </NextChakraLink>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Staff",
    href: "/staff",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Register",
    href: "/register",
  },
];
