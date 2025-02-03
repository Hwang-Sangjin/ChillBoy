import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LeftEye(props) {
  const { nodes, materials } = useGLTF("/LE.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere018.geometry}
        material={materials.eye}
        position={[-0.179, 1.06, 1.361]}
        rotation={[0, 0.244, 0]}
        scale={[0.136, 0.093, 0.112]}
      />
    </group>
  );
}

useGLTF.preload("/LE.glb");
