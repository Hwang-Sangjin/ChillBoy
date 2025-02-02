import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ChillGuy(props) {
  const { nodes, materials } = useGLTF("/chillguy.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        material={materials.CustomMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/chillguy.glb");
