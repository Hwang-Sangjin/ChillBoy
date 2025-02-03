import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { ChillGuy } from "./ChillGuy";
import { LeftEye } from "./LeftEye";
import { RightEye } from "./RightEye";

const Experience = () => {
  return (
    <>
      <ChillGuy />
      <LeftEye />
      <RightEye />
    </>
  );
};

export default Experience;
