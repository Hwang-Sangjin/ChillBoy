import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ChillGuy(props) {
  const { nodes, materials } = useGLTF("/chillguy.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.301, -2.163, 1.051]}
        rotation={[Math.PI / 2, 0, 0.447]}
        scale={2.09}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_1.geometry}
          material={materials.CustomMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_2.geometry}
          material={materials.shoose1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_3.geometry}
          material={materials.eyebrow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/chillguy.glb");
