import { Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import useESenseiStore from "../statemanagement/eSenseiStore";

const CreditsLink = () => {
  const { testInProgress } = useESenseiStore();

  if (testInProgress) return null;

  return (
    <>
      <Heading size="sm" m="4">
        <ChakraLink as={ReactRouterLink} to="/about">
          About
        </ChakraLink>
      </Heading>
      <Heading size="sm" m="4">
        <ChakraLink as={ReactRouterLink} to="/credits">
          Credits
        </ChakraLink>
      </Heading>
    </>
  );
};

export default CreditsLink;
