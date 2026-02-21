import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Capsule() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.6}>
        <capsuleGeometry args={[0.5, 1.2, 16, 32]} />
        <MeshDistortMaterial
          color="#1a9988"
          roughness={0.15}
          metalness={0.3}
          distort={0.05}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function SmallPills() {
  return (
    <>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 1, -1]} scale={0.5}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#e88a2a" roughness={0.2} metalness={0.1} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh position={[2.2, -0.8, -0.5]} scale={0.4}>
          <capsuleGeometry args={[0.2, 0.5, 12, 24]} />
          <meshStandardMaterial color="#2a8fd4" roughness={0.2} metalness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={2.2}>
        <mesh position={[1.5, 1.5, -1.5]} scale={0.35}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#d44a4a" roughness={0.2} metalness={0.1} />
        </mesh>
      </Float>
    </>
  );
}

const PillScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 2, 3]} intensity={0.5} color="#1a9988" />
        <Capsule />
        <SmallPills />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default PillScene;
