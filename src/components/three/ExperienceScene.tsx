"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useReducedMotion, type MotionValue } from "framer-motion";
import { Suspense, useRef } from "react";
import type { Group } from "three";
import {
  FloatingCapsule,
  MaybeFloat,
  MedicalCross,
  MedicalParticles,
  PharmacyBox,
  SceneLights,
} from "./MedicalObjects";

interface CompositionProps {
  reduced: boolean;
  /** 0 → 1 as the section scrolls through the viewport. */
  progress: MotionValue<number>;
}

function ExperienceComposition({ reduced, progress }: CompositionProps) {
  const group = useRef<Group>(null);
  const orbit = useRef<Group>(null);

  useFrame((state, delta) => {
    if (reduced) return;
    const p = progress.get();
    if (group.current) {
      // scroll-linked rotation + subtle vertical drift
      group.current.rotation.y = p * 1.1 - 0.3;
      group.current.position.y = (0.5 - p) * 0.35;
    }
    if (orbit.current) {
      orbit.current.rotation.y += delta * 0.25;
    }
    // subtle camera dolly on scroll
    state.camera.position.z = 7.6 - p * 0.5;
    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <SceneLights />
      <group ref={group}>
        <MaybeFloat reduced={reduced} speed={1} floatIntensity={0.6}>
          <FloatingCapsule position={[0, 0.35, 0]} rotation={[0.45, 0, -0.5]} scale={1.05} />
        </MaybeFloat>
        {/* satellites orbiting the capsule */}
        <group ref={orbit}>
          <MaybeFloat reduced={reduced} speed={0.8} floatIntensity={0.4}>
            <PharmacyBox position={[-1.9, -0.6, 0.3]} rotation={[0.1, 0.6, 0]} scale={0.8} />
          </MaybeFloat>
          <MaybeFloat reduced={reduced} speed={0.9} floatIntensity={0.5}>
            <MedicalCross position={[1.95, 0.7, -0.3]} rotation={[0.2, -0.4, 0.15]} scale={0.55} />
          </MaybeFloat>
        </group>
      </group>
      <MedicalParticles reduced={reduced} />
      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.28}
        scale={9}
        blur={2.8}
        far={4}
        resolution={256}
        color="#0b3b2e"
      />
    </>
  );
}

/**
 * Scene for the "3D healthcare experience" band. Rotation and camera
 * respond to the section's scroll progress.
 */
export default function ExperienceScene({
  active = true,
  progress,
}: {
  active?: boolean;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.6], fov: 40 }}
      frameloop={active && !reduced ? "always" : "demand"}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
      className="touch-pan-y!"
    >
      <Suspense fallback={null}>
        <ExperienceComposition reduced={reduced} progress={progress} />
      </Suspense>
    </Canvas>
  );
}
