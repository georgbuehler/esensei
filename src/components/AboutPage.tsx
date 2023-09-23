import { Stack, Heading, Text, Link as ChakraLink } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from "react-router-dom";
import AppHeader from "./AppHeader";

const AboutPage = () => {
  return (
    <Stack spacing={3} justify="center" alignItems="center">
      <AppHeader />
      <Text fontSize="xs">Version {import.meta.env.VITE_APP_VERSION}</Text>
      <Text>
        This simulator is based on the kyu and dan{" "}
        <ChakraLink
          href="http://www.aikido-yamada.eu/wp-content/uploads/USAF.2018.test_.req_._FINAL.pdf"
          target="_blank"
        >
          testing requirements
        </ChakraLink>{" "}
        for the{" "}
        <ChakraLink href="https://www.usaikifed.com/" target="_blank">
          United States Aikido Federation
        </ChakraLink>{" "}
        (USAF). Test requirements may vary between organizations and dojos.
      </Text>
      <Text>
        eSensei defaults to only including the specific techniques that are
        required for the test. However, your sensei always may ask you to
        demonstrate techniques from lower levels as well. Check the{" "}
        <b>"Include Lower Level Techniques"</b> checkbox to include those
        techniques in the test.
      </Text>
      <Text>
        eSensei defaults to allowing one minute per technique, but you can vary
        that default time as needed. You can also use the <b>Reset</b> button to
        start the timer over if you want to stay on a particular technique, or
        click the <b>Next</b> button to move on to the next technique.
      </Text>
      <Text>
        The techniques are ordered by "mode" (e.g. standing, suwari waza, hanmi
        handachi, randori, etc.) but are otherwise presented in random order
        (just like a real test!){" "}
      </Text>
      <ChakraLink as={ReactRouterLink} to="/">
        Back
      </ChakraLink>
    </Stack>
  );
};

export default AboutPage;
