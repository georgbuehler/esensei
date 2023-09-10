import { Technique } from "../assets/Techniques";
import TestTechnique from "./TestTechnique";
import Timer from "./Timer";
import Settings from "../assets/Settings";

interface ExamProps {
  technique: Technique;
  timesUp: () => void;
}

const Exam = ({ technique, timesUp }: ExamProps) => {
  const {
    Mode,
    ModeAudioURL,
    Attack,
    AttackAudioURL,
    Defense,
    DefenseAudioURL,
  } = technique;
  return (
    <>
      <TestTechnique
        modeName={Mode}
        modeAudioURL={Settings.audioPath + ModeAudioURL}
        attackName={Attack}
        attackAudioURL={Settings.audioPath + AttackAudioURL}
        defenseName={Defense}
        defenseAudioURL={Settings.audioPath + DefenseAudioURL}
      />
      <Timer
        startingSeconds={Settings.defaultSeconds}
        startImmediately={true}
        timesUp={timesUp}
      />
    </>
  );
};

export default Exam;
