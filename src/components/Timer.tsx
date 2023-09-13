import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TimerProps {
  startingSeconds: number;
  startImmediately: boolean;
  timesUp: () => void;
}

const Timer = ({ startingSeconds, startImmediately, timesUp }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(startingSeconds);
  const [clocksTicking, setClocksTicking] = useState(startImmediately);

  useEffect(() => {
    const timer = setInterval(() => {
      if (clocksTicking) {
        setTimeRemaining((prevSeconds) => {
          if (prevSeconds == 1) {
            clearInterval(timer);
            //setClocksTicking(false);
            setTimeout(() => {
              setTimeRemaining(startingSeconds);
              timesUp();
            }, 0);
          }

          return prevSeconds - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, clocksTicking]);

  const convertToMinSec = (seconds: number): string => {
    if (seconds < 60) return `0:${seconds.toString().padStart(2, "0")}`;

    const minutes: number = Math.floor(seconds / 60);
    const secs: number = seconds - minutes * 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Heading>{convertToMinSec(timeRemaining)}</Heading>
      <ButtonGroup spacing="3">
        <Button
          colorScheme="green"
          onClick={() => setClocksTicking(true)}
          isDisabled={clocksTicking}
        >
          Start
        </Button>
        <Button
          colorScheme="red"
          onClick={() => setClocksTicking(false)}
          isDisabled={!clocksTicking}
        >
          Stop
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => setTimeRemaining(startingSeconds)}
          isDisabled={clocksTicking}
        >
          Reset
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => {
            setTimeRemaining(startingSeconds);
            timesUp();
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Timer;
