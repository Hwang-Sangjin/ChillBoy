import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import eyeVertexShader from "../shader/vertex.glsl";
import eyeFragmentShader from "../shader/fragment.glsl";
import * as THREE from "three";

export function RightEye(props) {
  const { nodes, materials } = useGLTF("/RE.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere019.geometry}
        material={materials.eye}
        position={[0.197, 1.058, 1.26]}
        rotation={[-0.275, 0.414, 0]}
        scale={[0.152, 0.098, 0.122]}
      >
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthTest={false}
          attach="material"
          transparent={true}
          vertexShader={eyeVertexShader}
          fragmentShader={eyeFragmentShader}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/RE.glb");
