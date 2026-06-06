'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

export default function Bottle({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth rotation
      groupRef.current.rotation.y += delta * 0.4;
      // Lift effect on hover
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        isHovered ? -0.2 : -0.5,
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={groupRef} position={[2.5, -0.5, 0]} scale={[0.7, 0.7, 0.7]}>
        
        {/* Bottle Cap */}
        <mesh position={[0, 2.2, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.5, 32]} />
          <meshStandardMaterial color="#064E3B" roughness={0.2} metalness={0.5} />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 1.85, 0]}>
          <cylinderGeometry args={[0.35, 1.2, 0.5, 32]} />
          <MeshTransmissionMaterial color="#D4AF37" transmission={0.9} roughness={0.1} />
        </mesh>

        {/* Bottle Body */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[1.2, 1.2, 3.5, 32]} />
          <MeshTransmissionMaterial 
            backside
            samples={16}
            thickness={0.5}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#D4AF37"
            transmission={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
      
      <Environment preset="city" environmentIntensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
      <ambientLight intensity={0.5} />
    </Float>
  );
}