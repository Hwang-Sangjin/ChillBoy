import Footer from "./Footer";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { HiOutlineVolumeOff } from "react-icons/hi";
import { useRecoilState } from "recoil";
import musicState from "../recoil/musicState";
import { useEffect } from "react";
const UI = () => {
  const [music, setMusic] = useRecoilState(musicState);

  const toggleMusic = () => {
    setMusic((prev) => !prev);
  };

  return (
    <>
      <Footer />
      <div className="absolute  bottom-40 right-5 px-5 py-2">
        {music ? (
          <HiOutlineVolumeUp onClick={() => toggleMusic()} size={40} />
        ) : (
          <HiOutlineVolumeOff onClick={() => toggleMusic()} size={40} />
        )}
      </div>
    </>
  );
};

export default UI;
