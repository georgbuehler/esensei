import { Heading, Stack, Button } from "@chakra-ui/react";
import useESenseiStore from "../statemanagement/eSenseiStore";
import { shallow } from "zustand/shallow";

const ExamComplete = () => {
  const { testComplete, clearTestComplete } = useESenseiStore(
    (state) => ({
      testComplete: state.testComplete,
      clearTestComplete: state.clearTestComplete,
    }),
    shallow
  );

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
