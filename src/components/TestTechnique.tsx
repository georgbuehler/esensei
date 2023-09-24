import { Heading, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Howl } from "howler";
import useESenseiStore from "../statemanagement/eSenseiStore";
import Settings from "../assets/Settings";

const TestTechnique = () => {
  const { testTechniques, currentTechnique } = useESenseiStore();

  const {
    Mode,
    ModeAudioURL,
    Attack,
    AttackAudioURL,
    Defense,
    DefenseAudioURL,
  } = testTechniques[currentTechnique];

  const currentMode = useRef("");

  const DefenseSound = new Howl({
    src: Settings.audioPath + DefenseAudioURL,
  });

  const AttackSound = new Howl({
    src: Settings.audioPath + AttackAudioURL,
    onend: () => DefenseSound.play(),
  });

  const ModeSound = new Howl({
    src: Settings.audioPath + ModeAudioURL,
    onend: () => AttackSound.play(),
  });

  useEffect(() => {
    if (Mode != currentMode.current) {
      ModeSound.play();
      currentMode.current = Mode;
    } else AttackSound.play();
  }, [DefenseSound, AttackSound, ModeSound]);

  return (
    <Stack spacing="2" margin="4">
      <Heading size="md">{Mode}</Heading>
      <Heading>{`${Attack} ${Defense}`}</Heading>
    </Stack>
  );
};

export default TestTechnique;
