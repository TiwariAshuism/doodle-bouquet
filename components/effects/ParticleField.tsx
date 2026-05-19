"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const particleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: { value: 90, density: { enable: true, width: 1200, height: 800 } },
    color: { value: ["#ffb59c", "#ff7f50", "#00fbfb", "#d2bbff", "#ffffff"] },
    opacity: {
      value: { min: 0.2, max: 0.75 },
      animation: { enable: true, speed: 1.2, sync: false },
    },
    size: {
      value: { min: 0.6, max: 3.2 },
      animation: { enable: true, speed: 2.5, sync: false },
    },
    move: {
      enable: true,
      speed: { min: 0.3, max: 1.2 },
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
    shape: { type: "circle" },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: ["repulse", "bubble"] },
      onClick: { enable: true, mode: "push" },
      resize: { enable: true },
    },
    modes: {
      repulse: { distance: 140, duration: 0.5 },
      bubble: { distance: 180, size: 6, duration: 0.4, opacity: 0.6 },
      push: { quantity: 6 },
    },
  },
};

export function ParticleField() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const options = useMemo(
    () =>
      reduced
        ? { ...particleOptions, particles: { ...particleOptions.particles, number: { value: 25 } } }
        : particleOptions,
    [reduced],
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="fireflies"
      className="pointer-events-none fixed inset-0 z-0"
      options={options}
    />
  );
}
