import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ChillGuy(props) {
  const { nodes, materials } = useGLTF("/chillguy.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-8.121, -0.053, 0.675]} scale={[0.579, 0.135, 0.243]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.nose}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials.clothe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_3.geometry}
          material={materials.clothe2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_4.geometry}
          material={materials.pants}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_5.geometry}
          material={materials.pants2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_6.geometry}
          material={materials.shoose1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_7.geometry}
          material={materials.shoose2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_8.geometry}
          material={materials.eye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_9.geometry}
          material={materials.eyebrow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/chillguy.glb");
