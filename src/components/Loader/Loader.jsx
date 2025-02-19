import * as React from "react";
import { useProgress } from "@react-three/drei";
import "./Loader.css";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import startState from "../../recoil/startState";
import { useRecoilState } from "recoil";

export function Loader() {
  const loadingRef = useRef();
  const { active, progress } = useProgress();
  const [start, setStart] = useRecoilState(startState);

  useEffect(() => {
    if (progress === 100) {
      if (loadingRef.current) {
        loadingRef.current.classList.add("ended");
        loadingRef.current.style.transform = "";
      }
    } else if (loadingRef.current) {
      loadingRef.current.style.transform = `scaleX(${progress / 100})`;
    }
  }, [progress]);

  return (
    <>
      {start ? (
        <div className="absolute text-center w-full h-full bg-[#8b8c74] z-50">
          <button
            onClick={() => {
              setStart(false);
            }}
            className="font-display z-100 relative top-1/3 m-auto cursor-pointer text-6xl text-neutral-300"
            disabled={progress < 100}
          >
            Ready to Chill?
          </button>
          <div ref={loadingRef} className="loading-bar"></div>
        </div>
      ) : null}
    </>
  );
}
