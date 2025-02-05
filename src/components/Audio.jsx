import { useRecoilState } from "recoil";
import startState from "../recoil/startState";
import { useEffect, useRef } from "react";
import ChillMusic from "/ChillMusic.mp3";

const Audio = () => {
  const [start, setStart] = useRecoilState(startState);
  const audioRef = useRef();

  useEffect(() => {
    if (start === false) {
      audioRef.current.play();
    }
  }, [start]);

  return <audio ref={audioRef} src={ChillMusic} loop />;
};

export default Audio;
