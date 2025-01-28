import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Experience from "./Experience";

const FiberContainer = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Environment environmentIntensity={0.5} preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <OrbitControls />
      <Experience />
    </Canvas>
  );
};

export default FiberContainer;
