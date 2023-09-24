import TestTechnique from "./TestTechnique";
import Timer from "./Timer";
import useESenseiStore from "../statemanagement/eSenseiStore";
import { shallow } from "zustand/shallow";

const Exam = () => {
  const {
    timerInterval,
    testInProgress,
    testComplete,
    nextTechnique,
    stopTest,
  } = useESenseiStore(
    (state) => ({
      timerInterval: state.timerInterval,
      testInProgress: state.testInProgress,
      testComplete: state.testComplete,
      nextTechnique: state.nextTechnique,
      stopTest: state.stopTest,
    }),
    shallow
  );

  if (!testInProgress || testComplete) return null;

  return (
    <>
      <TestTechnique />
      <Timer
        startingSeconds={timerInterval}
        startImmediately={true}
        timesUp={nextTechnique}
        stopTest={stopTest}
      />
    </>
  );
};

export default Exam;
