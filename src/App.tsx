import "./App.css";
import TestTechnique from "./components/TestTechnique";
import Timer from "./components/Timer";
import ExamControls from "./components/ExamControls";
import { useState } from "react";
import { Technique } from "./assets/Techniques";
import techniques from "./assets/Techniques";
import Exam from "./components/Exam";

function App() {
  const [testInProgress, setTestInProgress] = useState(false);
  const [testLevel, setTestLevel] = useState<number | undefined>(undefined);
  const [includeLower, setIncludeLower] = useState(false);
  const [currentTechnique, setCurrentTechnique] = useState(0);
  const [testTechniques, setTestTechniques] = useState<Technique[]>([]);

  return (
    <>
      <ExamControls
        currentLevel={testLevel}
        currentIncludeLower={includeLower}
        updateLevel={setTestLevel}
        updateIncludeLower={setIncludeLower}
        testInProgress={testInProgress}
        startTest={() => setTestInProgress(true)}
        stopTest={() => setTestInProgress(false)}
      />
      {testInProgress && (
        <Exam
          technique={techniques[0]}
          timesUp={() => console.log("Times up!")}
        />
      )}
    </>
  );
}

export default App;
