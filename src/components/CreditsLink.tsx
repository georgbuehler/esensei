import { Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface CreditLinksProps {
  isVisible: boolean;
}

const CreditsLink = ({ isVisible }: CreditLinksProps) => {
  if (!isVisible) return null;

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
