import { Flex, Image, Heading } from "@chakra-ui/react";

const AppHeader = () => {
  return (
    <>
      <Flex align="center">
        <Image
          src="/Enso_white.svg"
          alt="Enso"
          boxSize="50px"
          objectFit="cover"
          mr="4"
          ml="5"
        />
        <Heading>eSensei</Heading>
      </Flex>
      <Heading size="md" m={2}>
        Aikido Test Simulator
      </Heading>
    </>
  );
};

export default AppHeader;
