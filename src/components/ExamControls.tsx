import {
  Checkbox,
  Select,
  ButtonGroup,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import levels from "../assets/Levels";

interface ExamControlProps {
  currentLevel: number | undefined;
  currentIncludeLower: boolean;
  updateLevel: (level: number) => void;
  updateIncludeLower: (include: boolean) => void;
  startTest: () => void;
  stopTest: () => void;
  testInProgress: boolean;
}

const ExamControls = ({
  currentLevel,
  currentIncludeLower,
  updateLevel,
  updateIncludeLower,
  startTest,
  stopTest,
  testInProgress,
}: ExamControlProps) => {
  return (
    <Stack spacing={3} justify="center">
      <Select
        placeholder="Select Test Level"
        onChange={(event) => updateLevel(parseInt(event.target.value))}
        value={currentLevel}
        isDisabled={testInProgress}
      >
        {levels.map((level) => (
          <option key={level.Id} value={level.Id}>
            {level.Name}
          </option>
        ))}
      </Select>
      <Checkbox
        checked={currentIncludeLower}
        onChange={(event) => updateIncludeLower(event.target.checked)}
        isDisabled={testInProgress}
      >
        Include Lower Level Techniques
      </Checkbox>
      <Flex justifyContent="center">
        <ButtonGroup alignItems={"center"}>
          <Button
            onClick={startTest}
            isDisabled={testInProgress}
            colorScheme="green"
          >
            Start Test
          </Button>
          <Button
            onClick={stopTest}
            isDisabled={!testInProgress}
            colorScheme="red"
          >
            Stop Test
          </Button>
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};

export default ExamControls;
