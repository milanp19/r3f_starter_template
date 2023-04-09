import { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
// import { GLTFLoader } from "three/src/loaders/GLTFLoader";
import { BackSide, DoubleSide, TextureLoader } from "three";

function App() {
  const texture = useLoader(TextureLoader, "room.jpg");
  return (
    <>
      <Canvas>
        <mesh rotation-y={89.9}>
          <sphereGeometry args={[500, 60, 40]} />
          <meshBasicMaterial map={texture} side={BackSide} />
        </mesh>

        <OrbitControls dampingFactor={1} />
      </Canvas>
    </>
  );
}

export default App;
