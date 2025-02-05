import { useRecoilState } from "recoil";
import startState from "../recoil/startState";
import { useEffect, useRef } from "react";
import ChillMusic from "/ChillMusic.mp3";
import musicState from "../recoil/musicState";

const Audio = () => {
  const [start, setStart] = useRecoilState(startState);
  const [music, setMusic] = useRecoilState(musicState);
  const audioRef = useRef();

  useEffect(() => {
    if (start === false && audioRef.current) {
      audioRef.current.play();
    }
  }, [start]);

  useEffect(() => {
    if (audioRef.current) {
      if (music) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [music]);

  return <audio ref={audioRef} src={ChillMusic} loop />;
};

export default Audio;
