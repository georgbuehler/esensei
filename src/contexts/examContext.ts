import React from "react";

interface ExamContextType {
  testInProgress: Boolean;
  setTestInProgress: (inProgress: boolean) => void;
  testComplete: Boolean;
  setTestComplete: (testComplete: boolean) => void;
}

const ExamContext = React.createContext<ExamContextType>({} as ExamContextType);

export default ExamContext;
