import { Stack, Heading, Text, Link as ChakraLink } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import AppHeader from "./AppHeader";

const CreditsPage = () => {
  return (
    <Stack spacing={3} justify="center" alignItems="center">
      <AppHeader />

      <Heading size="sm" m={2}>
        by Georg Buehler
        <br />
        <ChakraLink
          href="https://www.openskymartialarts.com/"
          color="teal.500"
          target="_blank"
        >
          Open Sky Martial Arts
        </ChakraLink>
        , Hillsborough, NC
      </Heading>

      <Text>
        Special thanks to <b>Des Weighill</b> for the original idea, and{" "}
        <i>lots</i> of practice tests. <FontAwesomeIcon icon={faHeart} />
      </Text>

      <UnorderedList
        listStylePosition="inside"
        textAlign="left"
        maxWidth="content-max"
        mx="auto"
      >
        <ListItem>
          <ChakraLink
            href="https://en.wikipedia.org/wiki/File:Enso.svg"
            color="teal.500"
            target="_blank"
          >
            Enso image
          </ChakraLink>{" "}
          by Kendrick Shaw
        </ListItem>
        <ListItem>
          Visual framework by{" "}
          <ChakraLink href="https://chakra-ui.com/" target="_blank">
            Chakra UI
          </ChakraLink>
        </ListItem>
        <ListItem>
          Timer icons by{" "}
          <ChakraLink href="https://fontawesome.com/" target="_blank">
            FontAwesome
          </ChakraLink>
        </ListItem>
        <ListItem>
          Audio playback library by{" "}
          <ChakraLink href="https://howlerjs.com/" target="_blank">
            Howler
          </ChakraLink>
        </ListItem>
        <ListItem>
          State management by{" "}
          <ChakraLink href="https://github.com/pmndrs/zustand" target="_blank">
            Zustand
          </ChakraLink>
        </ListItem>
      </UnorderedList>

      <ChakraLink as={ReactRouterLink} to="/">
        Back
      </ChakraLink>
    </Stack>
  );
};

export default CreditsPage;
