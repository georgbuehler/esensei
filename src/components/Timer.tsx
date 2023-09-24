import { ButtonGroup, Heading, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faForward,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

interface TimerProps {
  startingSeconds: number;
  startImmediately: boolean;
  timesUp: () => void;
  stopTest: () => void;
}

const Timer = ({
  startingSeconds,
  startImmediately,
  timesUp,
  stopTest,
}: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(startingSeconds);
  const [clocksTicking, setClocksTicking] = useState(startImmediately);

  useEffect(() => {
    const timer = setInterval(() => {
      if (clocksTicking) {
        setTimeRemaining((prevSeconds) => {
          if (prevSeconds == 1) {
            clearInterval(timer);
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
        <IconButton
          colorScheme="green"
          aria-label="Continue"
          icon={<FontAwesomeIcon icon={faPlay} />}
          onClick={() => setClocksTicking(true)}
          isDisabled={clocksTicking}
        />
        <IconButton
          aria-label="Pause"
          colorScheme="red"
          onClick={() => setClocksTicking(false)}
          isDisabled={!clocksTicking}
          icon={<FontAwesomeIcon icon={faPause} />}
        />
        <IconButton
          aria-label="Stop"
          colorScheme="red"
          onClick={stopTest}
          icon={<FontAwesomeIcon icon={faStop} />}
        />
        <IconButton
          aria-label="Restart"
          colorScheme="blue"
          onClick={() => setTimeRemaining(startingSeconds)}
          isDisabled={clocksTicking}
          icon={<FontAwesomeIcon icon={faRedo} transform="flip-y" />}
        />

        <IconButton
          colorScheme="teal"
          onClick={() => {
            setTimeRemaining(startingSeconds);
            timesUp();
          }}
          aria-label="Next"
          icon={<FontAwesomeIcon icon={faForward} />}
        />
      </ButtonGroup>
    </>
  );
};

export default Timer;
