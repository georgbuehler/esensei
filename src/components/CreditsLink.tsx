import { Heading } from "@chakra-ui/react";

interface CreditLinksProps {
  isVisible: boolean;
}

const CreditsLink = ({ isVisible }: CreditLinksProps) => {
  if (!isVisible) return null;

  return (
    <Heading size="xs" m="4">
      Credits
    </Heading>
  );
};

export default CreditsLink;
