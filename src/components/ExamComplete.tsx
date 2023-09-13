import { Heading, Stack, Button } from "@chakra-ui/react";

interface ExamCompleteProps {
  clearMessage: () => void;
}

const ExamComplete = ({ clearMessage }: ExamCompleteProps) => {
  return (
    <Stack>
      <Heading>Exam Complete!</Heading>
      <Button colorScheme="green" onClick={clearMessage}>
        OK
      </Button>
    </Stack>
  );
};

export default ExamComplete;
