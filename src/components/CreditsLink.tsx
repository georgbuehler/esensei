import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CreditLinksProps {
  isVisible: boolean;
}

const CreditsLink = ({ isVisible }: CreditLinksProps) => {
  if (!isVisible) return null;

  return (
    <Heading size="sm" m="4">
      <Link to="/credits">Credits</Link>
    </Heading>
  );
};

export default CreditsLink;
