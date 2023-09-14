import "./App.css";
import ExamControls from "./components/ExamControls";
import { useState } from "react";
import { Technique } from "./assets/Techniques";
import { getTechniques } from "./assets/Techniques";
import Exam from "./components/Exam";
import ExamComplete from "./components/ExamComplete";
import Settings from "./assets/Settings";

function App() {
  const [testInProgress, setTestInProgress] = useState(false);
  const [testLevel, setTestLevel] = useState<number | undefined>(undefined);
  const [includeLower, setIncludeLower] = useState(false);
  const [currentTechnique, setCurrentTechnique] = useState(0);
  const [testTechniques, setTestTechniques] = useState<Technique[]>([]);
  const [testComplete, setTestComplete] = useState(false);
  const [timerInterval, setTimerInterval] = useState(Settings.defaultSeconds);

  const startTest = () => {
    // Get filtered list of techniques
    setTestTechniques(getTechniques(testLevel, includeLower));
    setTestInProgress(true);
  };

  const nextTechnique = () => {
    setCurrentTechnique((previous) => {
      if (previous == testTechniques.length - 1) {
        setTestComplete(true);
        setTestInProgress(false);
        return previous;
      }
      return previous + 1;
    });
  };

  return (
    <>
      <ExamControls
        currentLevel={testLevel}
        currentIncludeLower={includeLower}
        currentTimerInterval={timerInterval}
        updateLevel={setTestLevel}
        updateIncludeLower={setIncludeLower}
        updateTimerInterval={(_, seconds) => {
          setTimerInterval(seconds);
        }}
        testInProgress={testInProgress}
        startTest={startTest}
        stopTest={() => setTestInProgress(false)}
      />
      {testInProgress && (
        <Exam
          technique={testTechniques[currentTechnique]}
          timerInterval={timerInterval}
          timesUp={nextTechnique}
        />
      )}
      {testComplete && (
        <ExamComplete clearMessage={() => setTestComplete(false)} />
      )}
    </>
  );
}

export default App;
