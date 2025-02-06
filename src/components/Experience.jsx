import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { ChillGuy } from "./ChillGuy";
import { LeftEye } from "./LeftEye";
import { RightEye } from "./RightEye";
import Paragraph from "./Paragraph";

const Experience = () => {
  return (
    <>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.5, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        >
        <Float rotationIntensity={0.4}>
          <ChillGuy />
          {/* <LeftEye />
          <RightEye /> */}
          <Paragraph />
        </Float>
      </PresentationControls>
    </>
  );
};

export default Experience;
