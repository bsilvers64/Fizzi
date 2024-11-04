"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan"

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{
        fov: 30,
      }}
    >
     
      <FloatingCan/>
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />

      <ambientLight intensity={2} />
      <spotLight intensity={3} position={[1, 1, 1]} />
    </Canvas>
  );
}
