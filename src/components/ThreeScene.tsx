"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface AnimatedSphereProps {
  position?: [number, number, number]
  color?: string
  size?: number
}

interface FloatingParticlesProps {
  count?: number
  size?: number
}

// Animated sphere component with gradient texture
const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ 
  position = [0, 0, 0], 
  color = '#5662f6', 
  size = 1.5 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Create a gradient shader material
  const materialProps = useMemo(() => ({
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        float intensity = 1.0 - (1.5 * distance(vUv, vec2(0.5)));
        vec3 gradientColor = mix(color, vec3(0.1, 0.1, 0.3), distance(vUv, vec2(0.5)));
        gl_FragColor = vec4(gradientColor * intensity, 0.7);
      }
    `,
    uniforms: {
      color: { value: new THREE.Color(color) },
      time: { value: 0 }
    },
    transparent: true,
    side: THREE.DoubleSide
  }), [color])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    
    // Update shader time
    materialProps.uniforms.time.value += delta
    
    // Slow breathing animation
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1, 0.1)
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1, 0.1)
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1, 0.1)
    
    // Slow rotation
    meshRef.current.rotation.x += delta * 0.05
    meshRef.current.rotation.y += delta * 0.07
  })

  return (
    <mesh ref={meshRef} position={new THREE.Vector3(...position)}>
      <sphereGeometry args={[size, 64, 64]} />
      <shaderMaterial attach="material" {...materialProps} />
    </mesh>
  )
}

// Floating particles component
const FloatingParticles: React.FC<FloatingParticlesProps> = ({ count = 20, size = 0.02 }) => {
  const particlesRef = useRef<THREE.Points>(null)
  
  // Generate random positions for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 7
      positions[i3 + 1] = (Math.random() - 0.5) * 7
      positions[i3 + 2] = (Math.random() - 0.5) * 7
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (!particlesRef.current) return
    
    // Gentle rotation of the entire particle system
    particlesRef.current.rotation.x += delta * 0.03
    particlesRef.current.rotation.y += delta * 0.05
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={size}
        sizeAttenuation={true}
        color="#ffffff"
        transparent
        opacity={0.7}
      />
    </points>
  )
}

// Main ThreeScene component
const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <fog attach="fog" args={['#030014', 5, 15]} />
        <AnimatedSphere position={[0, 0, 0]} color="#5662f6" size={2} />
        <FloatingParticles count={100} size={0.03} />
      </Canvas>
    </div>
  )
}

export default ThreeScene 