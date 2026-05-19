"use client";

import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { ParticleField } from "@/components/effects/ParticleField";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

export function MotionLayer() {
  return (
    <>
      <AmbientOrbs />
      <ParticleField />
      <ScrollProgress />
    </>
  );
}
