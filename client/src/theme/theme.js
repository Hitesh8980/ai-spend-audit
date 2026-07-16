import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#EBF8FF",
      100: "#BEE3F8",
      200: "#90CDF4",
      300: "#63B3ED",
      400: "#4299E1",
      500: "#3182CE",
      600: "#2563EB",
      700: "#2B6CB0",
      800: "#2C5282",
      900: "#1A365D",
    },
  },

  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },

  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

export default theme;