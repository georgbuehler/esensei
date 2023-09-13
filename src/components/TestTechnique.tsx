import { Heading, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Howl } from "howler";

interface TechniqueProps {
  modeName: string;
  modeAudioURL: string;
  attackName: string;
  attackAudioURL: string;
  defenseName: string;
  defenseAudioURL: string;
}

const TestTechnique = ({
  modeName,
  modeAudioURL,
  attackName,
  attackAudioURL,
  defenseName,
  defenseAudioURL,
}: TechniqueProps) => {
  const DefenseSound = new Howl({
    src: defenseAudioURL,
  });

  const AttackSound = new Howl({
    src: attackAudioURL,
    onend: () => DefenseSound.play(),
  });

  const ModeSound = new Howl({
    src: modeAudioURL,
    onend: () => AttackSound.play(),
  });

  useEffect(() => {
    ModeSound.play();
  }, [DefenseSound, AttackSound, ModeSound]);

  return (
    <Stack spacing="2" margin="4">
      <Heading size="md">{modeName}</Heading>
      <Heading>{`${attackName} ${defenseName}`}</Heading>
    </Stack>
  );
};

export default TestTechnique;
