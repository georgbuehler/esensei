import { Stack, Heading, Text, Link as HTMLLink } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const CreditsPage = () => {
  return (
    <Stack spacing={3} justify="center">
      <Heading>eSensei</Heading>
      <Heading size="md" m={2}>
        Aikido Test Simulator
      </Heading>

      <Heading size="sm" m={2}>
        by Georg Buehler
        <br />
        <HTMLLink href="https://www.openskymartialarts.com/" color="teal.500">
          Open Sky Martial Arts
        </HTMLLink>
        , Hillsborough, NC
      </Heading>

      <Text>
        Special thanks to <b>Des Weighill</b> for the original idea, and{" "}
        <i>lots</i> of practice tests. <FontAwesomeIcon icon={faHeart} />
      </Text>

      <UnorderedList listStylePosition="inside" textAlign="left" maxWidth="90%">
        <ListItem>
          <HTMLLink
            href="https://en.wikipedia.org/wiki/File:Enso.svg"
            color="teal.500"
          >
            Enso image
          </HTMLLink>{" "}
          by Kendrick Shaw
        </ListItem>
        <ListItem>
          Visual framework by{" "}
          <HTMLLink href="https://chakra-ui.com/">Chakra UI</HTMLLink>
        </ListItem>
        <ListItem>
          Timer icons by{" "}
          <HTMLLink href="https://fontawesome.com/">FontAwesome</HTMLLink>
        </ListItem>
        <ListItem>
          Audio playback library by{" "}
          <HTMLLink href="https://howlerjs.com/">Howler</HTMLLink>
        </ListItem>
      </UnorderedList>

      <Link to="/">Back</Link>
    </Stack>
  );
};

export default CreditsPage;
