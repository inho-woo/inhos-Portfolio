import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RingCluster = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.3;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[i * 0.6, i * 0.4, i * 0.3]}>
          <torusGeometry args={[1 + i * 0.35, 0.02, 16, 120]} />
          <meshBasicMaterial
            color={["#818cf8", "#22d3ee", "#ec4899"][i]}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </group>
  );
};

const SkillDecor = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <RingCluster />
      </Canvas>
    </div>
  );
};

export default SkillDecor;
