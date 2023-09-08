import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Timer
        startingSeconds={90}
        startImmediately={true}
        timesUp={() => console.log("Time's up!")}
      />
    </>
  );
}

export default App;
