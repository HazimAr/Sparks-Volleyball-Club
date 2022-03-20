import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#D42B2B",
    secondary: "white",
    accent: "#1f1f1f",
    gradient:
      "linear-gradient(90deg, hsla(0, 66%, 50%, 1) 0%, hsla(0, 100%, 50%, 1) 100%); hsla(0, 66%, 50%, 1);",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
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
