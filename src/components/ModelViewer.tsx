
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Create a simpler model component without using Box and Torus from drei
const Model = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!boxRef.current || !torusRef.current) return;
    
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.x += 0.005;
    
    torusRef.current.rotation.y += 0.003;
    torusRef.current.rotation.x += 0.003;
  });

  return (
    <group>
      <mesh 
        ref={boxRef} 
        position={[-1, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
      
      <mesh
        ref={torusRef}
        position={[1.5, 0, 0]}
      >
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

const ModelViewer: React.FC = () => {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-white/20 gradient-border">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Model />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
