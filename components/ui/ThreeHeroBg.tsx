"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const count = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities: number[] = [];

    for (let i = 0; i < count; i++) {
      // Position spread
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Random speed vectors
      velocities.push(
        (Math.random() - 0.5) * 0.03, // x speed
        (Math.random() - 0.5) * 0.03, // y speed
        (Math.random() - 0.5) * 0.03  // z speed
      );
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle material (brand secondary pink color)
    const material = new THREE.PointsMaterial({
      color: 0xcb2957,
      size: 0.4,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Connecting lines material (indigo color)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.15,
    });

    let lineSegments = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(lineSegments);

    // Mouse steering variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;
    const pos1 = new THREE.Vector3();
    const pos2 = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Damp camera position towards mouse target for smooth easing/parallax
      targetX = mouseX * 5;
      targetY = mouseY * 5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Update particle positions
      const positionAttr = points.geometry.attributes.position as THREE.BufferAttribute;
      const array = positionAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        array[i * 3] += velocities[i * 3];
        array[i * 3 + 1] += velocities[i * 3 + 1];
        array[i * 3 + 2] += velocities[i * 3 + 2];

        // Bounds wrapping/reversal
        if (Math.abs(array[i * 3]) > 18) velocities[i * 3] *= -1;
        if (Math.abs(array[i * 3 + 1]) > 12) velocities[i * 3 + 1] *= -1;
        if (Math.abs(array[i * 3 + 2]) > 8) velocities[i * 3 + 2] *= -1;
      }
      positionAttr.needsUpdate = true;

      // Compute dynamic connecting lines
      const linePositions: number[] = [];
      for (let i = 0; i < count; i++) {
        pos1.set(array[i * 3], array[i * 3 + 1], array[i * 3 + 2]);
        for (let j = i + 1; j < count; j++) {
          pos2.set(array[j * 3], array[j * 3 + 1], array[j * 3 + 2]);
          const dist = pos1.distanceTo(pos2);
          // Only connect nearby nodes
          if (dist < 6.5) {
            linePositions.push(pos1.x, pos1.y, pos1.z);
            linePositions.push(pos2.x, pos2.y, pos2.z);
          }
        }
      }

      scene.remove(lineSegments);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
      lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSegments);

      // Slow orbital system rotation
      points.rotation.y += 0.0008;
      points.rotation.x += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden"
    />
  );
}
