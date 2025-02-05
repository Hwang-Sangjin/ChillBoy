import Footer from "./Footer";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { HiOutlineVolumeOff } from "react-icons/hi";
import { HiLightningBolt } from "react-icons/hi";
import { useRecoilState } from "recoil";
import musicState from "../recoil/musicState";
import { useEffect } from "react";
import fadeState from "../recoil/fadeState";
const UI = () => {
  const [music, setMusic] = useRecoilState(musicState);
  const [fadeIn, setFadeIn] = useRecoilState(fadeState); // Controls fade direction

  const toggleMusic = () => {
    setMusic((prev) => !prev);
  };

  return (
    <>
      <Footer />
      <div className="absolute flex flex-row bottom-40 right-5 px-5 py-2">
        <HiLightningBolt
          onClick={() => setFadeIn(false)}
          className="m-5"
          size={40}
        />
        {music ? (
          <HiOutlineVolumeUp
            className="m-5"
            onClick={() => toggleMusic()}
            size={40}
          />
        ) : (
          <HiOutlineVolumeOff
            className="m-5"
            onClick={() => toggleMusic()}
            size={40}
          />
        )}
      </div>
    </>
  );
};

export default UI;
