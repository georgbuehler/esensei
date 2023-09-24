import { Heading, Stack, Button } from "@chakra-ui/react";
import useESenseiStore from "../statemanagement/eSenseiStore";

const ExamComplete = () => {
  const { testComplete, clearTestComplete } = useESenseiStore();

  if (!testComplete) return null;

  return (
    <Stack>
      <Heading>Exam Complete!</Heading>
      <Button colorScheme="green" onClick={clearTestComplete}>
        OK
      </Button>
    </Stack>
  );
};

export default ExamComplete;
