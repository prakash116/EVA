"use client";

import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import { useMemo, type ReactNode } from "react";
import type { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

/* Clay-matte material palette shared by every object. */
export const CLAY = {
  leaf: "#0FA36B",
  pine: "#0B3B2E",
  white: "#F7FBF9",
  mint: "#D9F2E6",
  blue: "#3E7BFA",
} as const;

const clay = { metalness: 0, roughness: 0.62 };

/** drei <Float> that turns into a static group under reduced motion. */
export function MaybeFloat({
  reduced,
  children,
  speed = 1,
  rotationIntensity = 0.35,
  floatIntensity = 0.7,
}: {
  reduced: boolean;
  children: ReactNode;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
}) {
  if (reduced) return <group>{children}</group>;
  return (
    <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
      {children}
    </Float>
  );
}

/** Soft three-point studio lighting for the clay look. */
export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-5, 2, -3]} intensity={0.4} color="#d8f4e6" />
      <hemisphereLight args={["#ffffff", "#cdeadd", 0.5]} />
    </>
  );
}

/**
 * Two-tone pharmacy capsule built from hemisphere + half-cylinder pairs
 * so each half can take its own color. ~2k triangles.
 */
export function FloatingCapsule({
  topColor = CLAY.leaf,
  bottomColor = CLAY.white,
  ...props
}: { topColor?: string; bottomColor?: string } & ThreeElements["group"]) {
  const r = 0.55;
  const h = 0.55;
  return (
    <group {...props}>
      {/* top half */}
      <mesh position={[0, h, 0]}>
        <sphereGeometry args={[r, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={topColor} {...clay} />
      </mesh>
      <mesh position={[0, h / 2, 0]}>
        <cylinderGeometry args={[r, r, h, 32, 1, true]} />
        <meshStandardMaterial color={topColor} {...clay} />
      </mesh>
      {/* bottom half */}
      <mesh position={[0, -h / 2, 0]}>
        <cylinderGeometry args={[r, r, h, 32, 1, true]} />
        <meshStandardMaterial color={bottomColor} {...clay} />
      </mesh>
      <mesh position={[0, -h, 0]}>
        <sphereGeometry args={[r, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshStandardMaterial color={bottomColor} {...clay} />
      </mesh>
      {/* seam */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[r, 0.012, 8, 48]} />
        <meshStandardMaterial color={CLAY.pine} metalness={0} roughness={0.8} />
      </mesh>
    </group>
  );
}

/** Small white delivery box with an emerald band and cross. */
export function PharmacyBox(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <RoundedBox args={[1.15, 0.8, 0.85]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color={CLAY.white} {...clay} />
      </RoundedBox>
      {/* tape band over the top */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.24, 0.84, 0.89]} />
        <meshStandardMaterial color={CLAY.mint} metalness={0} roughness={0.7} />
      </mesh>
      {/* cross on the front face */}
      <mesh position={[0.32, 0.05, 0.445]}>
        <boxGeometry args={[0.3, 0.09, 0.02]} />
        <meshStandardMaterial color={CLAY.leaf} {...clay} />
      </mesh>
      <mesh position={[0.32, 0.05, 0.445]}>
        <boxGeometry args={[0.09, 0.3, 0.02]} />
        <meshStandardMaterial color={CLAY.leaf} {...clay} />
      </mesh>
    </group>
  );
}

/** Rounded emerald medical cross. */
export function MedicalCross({
  color = CLAY.leaf,
  ...props
}: { color?: string } & ThreeElements["group"]) {
  return (
    <group {...props}>
      <RoundedBox args={[1.05, 0.4, 0.32]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color={color} {...clay} />
      </RoundedBox>
      <RoundedBox args={[0.4, 1.05, 0.32]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color={color} {...clay} />
      </RoundedBox>
    </group>
  );
}

/** Heartbeat line extruded as a slim 3D tube. */
export function PulseRibbon({
  color = CLAY.blue,
  ...props
}: { color?: string } & ThreeElements["group"]) {
  const curve = useMemo(() => {
    const pts = [
      [-1.7, 0],
      [-0.8, 0],
      [-0.5, 0.16],
      [-0.25, -0.1],
      [0, 0.55],
      [0.22, -0.38],
      [0.45, 0.12],
      [0.8, 0],
      [1.7, 0],
    ].map(([x, y]) => new THREE.Vector3(x, y, 0));
    return new THREE.CatmullRomCurve3(pts, false, "centripetal", 0.9);
  }, []);

  return (
    <group {...props}>
      <mesh>
        <tubeGeometry args={[curve, 110, 0.032, 8, false]} />
        <meshStandardMaterial color={color} metalness={0} roughness={0.5} />
      </mesh>
    </group>
  );
}

/** Soft ambient particle field. */
export function MedicalParticles({ reduced }: { reduced: boolean }) {
  return (
    <Sparkles
      count={55}
      scale={[7, 4.5, 3.5]}
      size={2.6}
      speed={reduced ? 0 : 0.25}
      opacity={0.45}
      color="#6fcda4"
    />
  );
}

/** Tiny abstract accents: a torus ring and a dot. */
export function AbstractShapes() {
  return (
    <>
      <mesh position={[-2.05, 1.35, -1.1]} rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[0.26, 0.075, 12, 36]} />
        <meshStandardMaterial color={CLAY.mint} metalness={0} roughness={0.7} />
      </mesh>
      <mesh position={[2.15, -0.75, -0.9]}>
        <sphereGeometry args={[0.13, 20, 20]} />
        <meshStandardMaterial color={CLAY.blue} metalness={0} roughness={0.5} />
      </mesh>
      <mesh position={[1.45, 1.7, -1.4]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color={CLAY.leaf} metalness={0} roughness={0.6} />
      </mesh>
    </>
  );
}
