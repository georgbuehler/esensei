import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
          opacity: 0.8,
        },
      },
    },
  },
});

export default theme;
