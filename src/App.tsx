import "./App.css";
import ExamControls from "./components/ExamControls";
import { useEffect } from "react";
import Exam from "./components/Exam";
import ExamComplete from "./components/ExamComplete";
import CreditsLink from "./components/CreditsLink";
import { useColorMode } from "@chakra-ui/color-mode";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode == "light") toggleColorMode();
  }, []);

  return (
    <>
      <ExamControls />
      <Exam />
      <ExamComplete />
      <CreditsLink />
    </>
  );
}

export default App;
