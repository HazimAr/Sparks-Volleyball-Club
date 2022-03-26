import { extendTheme } from "@chakra-ui/react";
import { Button, Link } from "./components";

const theme = extendTheme({
  colors: {
    primary: "hsla(0, 60%, 50%, 1)",
    secondary: "white",
    accent: "#1f1f1f",
    gradient:
      "linear-gradient(90deg, hsla(0, 60%, 50%, 1) 0%, hsla(0, 100%, 25%, 1) 100%); hsla(0, 66%, 50%, 1);",
  },
  components: {
    Button,
    Link,
  },
  styles: {
    global: () => ({
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        color: "black",
        scrollBehavior: "smooth",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      ul: {
        listStyle: "none",
      },
      span: {
        color: "primary",
        fontWeight: "bold",
        background: "gradient",
        backgroundClip: "text",
      },
      ".white-header": {
        color: "#fff",
        textShadow: "#000 0px 0px 3px",
        background: "transparent",
      },
      "&::-webkit-scrollbar": {
        width: "0.6em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
