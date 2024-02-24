import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 4], near: 0.01, far: 100, fov: 75 }}>
        <OrbitControls />
        <ambientLight intensity={10} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
