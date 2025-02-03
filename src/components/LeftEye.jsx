import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import eyeVertexShader from "../shader/vertex.glsl";
import eyeFragmentShader from "../shader/fragment.glsl";
import * as THREE from "three";

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
      >
        <shaderMaterial
          attach="material"
          vertexShader={eyeVertexShader}
          fragmentShader={eyeFragmentShader}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/LE.glb");
