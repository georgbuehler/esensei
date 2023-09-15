import React from "react";

interface ExamContextType {
  testInProgress: Boolean;
  setTestInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  testComplete: Boolean;
  setTestComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExamContext = React.createContext<ExamContextType>({} as ExamContextType);

export default ExamContext;
