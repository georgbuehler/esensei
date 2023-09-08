import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Timer
        startingSeconds={20}
        startImmediately={true}
        timesUp={() => console.log("Time's up!")}
      />
    </>
  );
}

export default App;
