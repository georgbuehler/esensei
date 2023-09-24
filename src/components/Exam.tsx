import TestTechnique from "./TestTechnique";
import Timer from "./Timer";
import useESenseiStore from "../statemanagement/eSenseiStore";

const Exam = () => {
  const {
    timerInterval,
    testInProgress,
    testComplete,
    nextTechnique,
    stopTest,
  } = useESenseiStore();

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
