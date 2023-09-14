import {
  Checkbox,
  Select,
  ButtonGroup,
  Button,
  Stack,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import levels from "../assets/Levels";

interface ExamControlProps {
  currentLevel: number | undefined;
  currentIncludeLower: boolean;
  currentTimerInterval: number;
  updateLevel: (level: number) => void;
  updateIncludeLower: (include: boolean) => void;
  updateTimerInterval: (value: string, seconds: number) => void;
  startTest: () => void;
  stopTest: () => void;
  testInProgress: boolean;
}

const ExamControls = ({
  currentLevel,
  currentIncludeLower,
  currentTimerInterval,
  updateLevel,
  updateIncludeLower,
  updateTimerInterval,
  startTest,
  stopTest,
  testInProgress,
}: ExamControlProps) => {
  return (
    <Stack spacing={3} justify="center">
      <Heading>eSensei</Heading>
      <Heading size="md" m={2}>
        Aikido Test Simulator
      </Heading>
      <Select
        placeholder="Select Test Level"
        onChange={(event) => updateLevel(parseInt(event.target.value))}
        value={currentLevel}
        isDisabled={testInProgress}
      >
        {levels.map((level) => (
          <option key={level.Id} value={level.Id}>
            {level.EnglishTranslation}
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
      <FormControl isDisabled={testInProgress}>
        <FormLabel>Seconds per Technique</FormLabel>
        <NumberInput
          defaultValue={currentTimerInterval}
          min={15}
          max={300}
          step={5}
          onChange={updateTimerInterval}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
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
