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
  Text,
  Box,
} from "@chakra-ui/react";
import levels from "../assets/Levels";
import AppHeader from "./AppHeader";

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
  testInProgress,
}: ExamControlProps) => {
  if (testInProgress) return null;

  return (
    <Stack spacing={3} justify="center">
      <AppHeader />
      <Select
        id="Level"
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
        id="IncludeLower"
        checked={currentIncludeLower}
        onChange={(event) => updateIncludeLower(event.target.checked)}
        isDisabled={testInProgress}
      >
        Include Lower Level Techniques
      </Checkbox>

      <Flex align="center">
        <NumberInput
          id="TimeInterval"
          defaultValue={currentTimerInterval}
          min={15}
          max={300}
          step={5}
          onChange={updateTimerInterval}
          width="75px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Box ml={2}>
          <Text display="inline">seconds per technique</Text>
        </Box>
      </Flex>

      <Flex justifyContent="center">
        <ButtonGroup alignItems={"center"}>
          <Button
            onClick={startTest}
            isDisabled={testInProgress}
            colorScheme="green"
          >
            Start Test
          </Button>
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};

export default ExamControls;
