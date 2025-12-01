"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SentientGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    scene.background = null;
    scene.fog = null;

    const globe = new THREE.Group();
    scene.add(globe);

    const latticeGeo = new THREE.IcosahedronGeometry(6, 1);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x7cc7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const lattice = new THREE.Mesh(latticeGeo, latticeMat);
    globe.add(lattice);

    const shieldGeo = new THREE.IcosahedronGeometry(7.5, 1);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x4de1ff,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    globe.add(shield);

    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color(0x6ddcff);
    const colorB = new THREE.Color(0x7b5cff);

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 6.5 + Math.random() * 1.2;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      const i3 = i * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      const mixed = colorA.clone().lerp(colorB, Math.random());
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    globe.add(particles);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 22;

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) / rect.width - 0.5;
      mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    };
    container.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);

    let raf = 0;
    const clock = new THREE.Clock();

    const originalPositions = positions.slice(0);

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // gentle breathing on particles
      const posAttr = particleGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];
        const mag = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const pulse = Math.sin(t * 1.8 + i * 0.15) * 0.1;
        const scale = (mag + pulse) / mag;
        posAttr.array[i3] = ox * scale;
        posAttr.array[i3 + 1] = oy * scale;
        posAttr.array[i3 + 2] = oz * scale;
      }
      posAttr.needsUpdate = true;

      globe.rotation.y += 0.0018;
      shield.rotation.y -= 0.0009;
      globe.rotation.x += (mouseY * 0.6 - globe.rotation.x) * 0.04;
      globe.rotation.y += (mouseX * 0.8 - globe.rotation.y) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      latticeGeo.dispose();
      latticeMat.dispose();
      shieldGeo.dispose();
      shieldMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square overflow-hidden rounded-[24px]"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
