import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "3xl",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    primary: {
      bg: "primary",
      color: "secondary",
    },
    secondary: {
      bg: "secondary",
      color: "primary",
    },
    accent: {
      bg: "accent",
      color: "white",
    },
  },

  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecoration: {},
    },
    _active: {},
    _focus: {},
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
