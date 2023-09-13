import { Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
  const [currentTrack, setCurrentTrack] = useState(0);
  let tracks = [attackAudioURL, defenseAudioURL];
  if (modeAudioURL != "") tracks.unshift(modeAudioURL);

  useEffect(() => {
    if (currentTrack != 0) setCurrentTrack(0);
  }, [tracks]);

  useEffect(() => {
    if (currentTrack < tracks.length) {
      const sound = new Howl({
        src: [tracks[currentTrack]],
        onend: () => {
          // Once the track ends, play the next one
          setCurrentTrack((prevTrack) => prevTrack + 1);
        },
      });

      sound.play();
    }
  }, [currentTrack]);

  return (
    <Stack spacing="2" margin="4">
      <Heading size="md">{modeName}</Heading>
      <Heading>{`${attackName} ${defenseName}`}</Heading>
    </Stack>
  );
};

export default TestTechnique;
