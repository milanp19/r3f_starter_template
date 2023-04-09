import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
