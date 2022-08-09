import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function NextChakraLink({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
}
