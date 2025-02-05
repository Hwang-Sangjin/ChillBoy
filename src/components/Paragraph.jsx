import { Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useRecoilState } from "recoil";
import startState from "../recoil/startState";
import title from "../Title";
import fadeState from "../recoil/fadeState";

const Paragraph = () => {
  const groupRef = useRef();
  const textRef = useRef();
  const [opacity, setOpacity] = useState(0); // Start invisible
  const [start, setStart] = useRecoilState(startState);
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useRecoilState(fadeState); // Controls fade direction

  useFrame(() => {
    if (textRef.current) {
      textRef.current.material.opacity = opacity;
    }
  });

  useEffect(() => {
    if (start === false) {
      let interval = setInterval(() => {
        setOpacity((prev) => {
          if (fadeIn) {
            if (prev >= 1) {
              clearInterval(interval);
              setTimeout(() => {
                if (titleIndex < title.length - 1) {
                  setFadeIn(false); // Continue fading out only if not last title
                }
              }, 2000);
              return 1;
            }
            return prev + 0.05; // Fade-in speed
          } else {
            if (prev <= 0) {
              clearInterval(interval);
              setTitleIndex((prevIndex) => (prevIndex + 1) % title.length); // Change title
              setFadeIn(true); // Restart fade-in
              return 0;
            }
            return prev - 0.05; // Fade-out speed
          }
        });
      }, 100); // Adjust speed

      return () => clearInterval(interval);
    }
  }, [start, fadeIn]);

  return (
    <group ref={groupRef} position={[4, 0, -0]}>
      <Text
        ref={textRef}
        maxWidth={5}
        color={"black"}
        anchorX="center"
        fontSize={titleIndex === 4 ? 1 : 0.5}
        font="./SourGummy-Bold.otf"
        transparent={true} // Enables opacity control
        opacity={opacity} // Apply dynamic opacity
      >
        {title[titleIndex]}
      </Text>
    </group>
  );
};

export default Paragraph;
