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
import useESenseiStore from "../statemanagement/eSenseiStore";

const ExamControls = () => {
  const {
    testInProgress,
    testLevel,
    setTestLevel,
    includeLower,
    setIncludeLower,
    timerInterval,
    setTimerInterval,
    startTest,
  } = useESenseiStore();

  if (testInProgress) return null;

  return (
    <Stack spacing={3} justify="center">
      <AppHeader />
      <Select
        id="Level"
        placeholder="Select Test Level"
        onChange={(event) => setTestLevel(parseInt(event.target.value))}
        value={testLevel}
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
        checked={includeLower}
        onChange={(event) => setIncludeLower(event.target.checked)}
        isDisabled={testInProgress}
      >
        Include Lower Level Techniques
      </Checkbox>

      <Flex align="center">
        <NumberInput
          id="TimeInterval"
          defaultValue={timerInterval}
          min={15}
          max={300}
          step={5}
          onChange={setTimerInterval}
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
