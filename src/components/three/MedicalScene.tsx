"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { Suspense, useRef } from "react";
import type { Group } from "three";
import {
  AbstractShapes,
  FloatingCapsule,
  MaybeFloat,
  MedicalCross,
  MedicalParticles,
  PharmacyBox,
  PulseRibbon,
  SceneLights,
} from "./MedicalObjects";

function HeroComposition({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (reduced || !group.current) return;
    // slow idle spin + gentle pointer parallax
    group.current.rotation.y += delta * 0.1;
    const targetX = state.pointer.y * -0.05;
    const targetZ = state.pointer.x * 0.04;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04;
  });

  return (
    <>
      <SceneLights />
      <group ref={group}>
        <MaybeFloat reduced={reduced} speed={1.1} floatIntensity={0.8}>
          <FloatingCapsule position={[-0.25, 0.2, 0]} rotation={[0.5, 0.2, -0.55]} scale={1.15} />
        </MaybeFloat>
        <MaybeFloat reduced={reduced} speed={0.8} floatIntensity={0.5}>
          <PharmacyBox position={[-1.8, -1.15, 0.2]} rotation={[0.12, -0.4, 0]} scale={0.9} />
        </MaybeFloat>
        <MaybeFloat reduced={reduced} speed={0.9} floatIntensity={0.6}>
          <MedicalCross position={[1.95, 1.35, -0.4]} rotation={[0.25, -0.35, 0.25]} scale={0.62} />
        </MaybeFloat>
        <MaybeFloat reduced={reduced} speed={0.7} floatIntensity={0.4}>
          <PulseRibbon position={[0.1, -1.6, -0.7]} rotation={[0.15, 0, 0]} scale={0.95} />
        </MaybeFloat>
        <AbstractShapes />
      </group>
      <MedicalParticles reduced={reduced} />
      <ContactShadows
        position={[0, -2.3, 0]}
        opacity={0.3}
        scale={9}
        blur={2.8}
        far={4.5}
        resolution={256}
        color="#0b3b2e"
      />
    </>
  );
}

/**
 * <MedicalScene /> — the floating pharmacy world beside the hero copy.
 * Renders continuously only while visible; drops to a static frame
 * under reduced motion.
 */
export default function MedicalScene({ active = true }: { active?: boolean }) {
  const reduced = useReducedMotion() ?? false;

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      frameloop={active && !reduced ? "always" : "demand"}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
      className="touch-pan-y!"
    >
      <Suspense fallback={null}>
        <HeroComposition reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
