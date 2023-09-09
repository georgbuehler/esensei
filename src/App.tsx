import "./App.css";
import Technique from "./components/Technique";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Technique
        modeName="Standing"
        modeAudioURL=""
        attackName="Shomenuchi"
        attackAudioURL="/audio/Shomenuchi.mp3"
        defenseName="Shihonage"
        defenseAudioURL="/audio/Shihonage.mp3"
      />
      <Timer
        startingSeconds={20}
        startImmediately={true}
        timesUp={() => console.log("Time's up!")}
      />
    </>
  );
}

export default App;
