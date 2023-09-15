import { Heading, Stack, Button } from "@chakra-ui/react";

interface ExamCompleteProps {
  clearMessage: () => void;
  isVisible: boolean;
}

const ExamComplete = ({ clearMessage, isVisible }: ExamCompleteProps) => {
  if (!isVisible) return null;

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
