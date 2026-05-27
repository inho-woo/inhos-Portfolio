import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Edges, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const AVATAR_URL = "/avatar.png";

const AvatarCharacter = () => {
  const texture = useLoader(THREE.TextureLoader, AVATAR_URL);
  texture.colorSpace = THREE.SRGBColorSpace;

  const groupRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 3) * 0.08;
      groupRef.current.rotation.z = Math.sin(t * 3) * 0.04;
      groupRef.current.rotation.y = Math.sin(t * 0.8) * 0.25;
    }
    if (haloRef.current) {
      haloRef.current.rotation.z = t * 0.6;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -t * 0.9;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.2, 0]}>
      <mesh ref={haloRef} position={[0, 0, -0.05]}>
        <ringGeometry args={[1.05, 1.18, 64]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.55} />
      </mesh>
      <mesh ref={innerRingRef} position={[0, 0, -0.04]}>
        <ringGeometry args={[1.22, 1.27, 64]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.45} />
      </mesh>

      <mesh>
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive="#1e1b4b"
          emissiveIntensity={0.25}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      <mesh scale={1.04} position={[0, 0, -0.01]}>
        <ringGeometry args={[0.99, 1.04, 64]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

const Shadow = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.08;
    ref.current.scale.set(s, s, 1);
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.45, 0]}>
      <circleGeometry args={[0.8, 32]} />
      <meshBasicMaterial color="#0f172a" transparent opacity={0.55} />
    </mesh>
  );
};

const FloatingCubes = () => {
  const cubes = useMemo(() => {
    const palette = ["#818cf8", "#22d3ee", "#ec4899", "#34d399"];
    return Array.from({ length: 10 }).map((_, i) => {
      const radius = 2.6 + Math.random() * 1.2;
      const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.3;
      const y = (Math.random() - 0.5) * 2.2;
      return {
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius - 0.6,
        ] as [number, number, number],
        scale: 0.14 + Math.random() * 0.14,
        color: palette[i % palette.length],
        speed: 0.6 + Math.random() * 1,
      };
    });
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <Float
          key={i}
          speed={cube.speed}
          rotationIntensity={0.9}
          floatIntensity={0.7}
        >
          <mesh position={cube.position} scale={cube.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.55}
              roughness={0.3}
              metalness={0.7}
            />
            <Edges color={cube.color} threshold={15} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const GridFloor = () => (
  <gridHelper
    args={[16, 32, "#4338ca", "#1e1b4b"]}
    position={[0, -1.5, 0]}
  />
);

const FallbackBlob = () => (
  <mesh>
    <icosahedronGeometry args={[1, 2]} />
    <meshStandardMaterial
      color="#6366f1"
      emissive="#312e81"
      emissiveIntensity={0.4}
      wireframe
    />
  </mesh>
);

const Animation = () => {
  return (
    <div className="h-[320px] w-full sm:h-[400px] lg:h-[460px]">
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 4]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-4, 2, -2]} intensity={1.2} color="#ec4899" />
        <pointLight position={[3, -1, 3]} intensity={1.1} color="#22d3ee" />
        <Suspense fallback={<FallbackBlob />}>
          <AvatarCharacter />
        </Suspense>
        <Shadow />
        <FloatingCubes />
        <GridFloor />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.4}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  );
};

export default Animation;
