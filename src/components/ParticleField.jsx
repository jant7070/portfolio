import { useEffect, useRef } from "react";
import * as THREE from "three";

const BLUE = 0x1a56db;

export function ParticleField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera.position.set(0, 0, 210);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    resize();

    const sphereGeo = new THREE.SphereGeometry(0.6, 12, 12);
    const sphereMat = new THREE.MeshBasicMaterial({ color: BLUE });

    const bounds = { x: 100, y: 60 };
    const particles = [];

    for (let i = 0; i < 90; i += 1) {
      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      mesh.position.set(
        (Math.random() * 2 - 1) * bounds.x,
        (Math.random() * 2 - 1) * bounds.y,
        (Math.random() * 2 - 1) * 18
      );
      scene.add(mesh);

      particles.push({
        mesh,
        v: new THREE.Vector3(
          (Math.random() * 2 - 1) * 0.35,
          (Math.random() * 2 - 1) * 0.28,
          (Math.random() * 2 - 1) * 0.08
        ),
      });
    }

    const lineMat = new THREE.LineBasicMaterial({ color: BLUE, transparent: true, opacity: 0.35, vertexColors: true });
    const lineGeo = new THREE.BufferGeometry();
    const line = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(line);

    const maxDist = 45;
    const maxDistSq = maxDist * maxDist;

    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX = nx;
      mouseY = ny;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const tick = () => {
      // Parallax camera (max ±8 X, ±5 Y) with lerp factor 0.04
      const targetX = mouseX * 8;
      const targetY = -mouseY * 5;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      for (const p of particles) {
        const pos = p.mesh.position;
        pos.add(p.v);

        if (pos.x > bounds.x || pos.x < -bounds.x) {
          pos.x = THREE.MathUtils.clamp(pos.x, -bounds.x, bounds.x);
          p.v.x *= -1;
        }
        if (pos.y > bounds.y || pos.y < -bounds.y) {
          pos.y = THREE.MathUtils.clamp(pos.y, -bounds.y, bounds.y);
          p.v.y *= -1;
        }
      }

      const positions = [];
      const colors = [];

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i].mesh.position;
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j].mesh.position;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 > maxDistSq) continue;

          const d = Math.sqrt(d2);
          const t = 1 - d / maxDist; // 0..1
          const intensity = Math.max(0, Math.min(1, t));

          positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          colors.push(intensity, intensity, intensity, intensity, intensity, intensity);
        }
      }

      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      lineGeo.computeBoundingSphere();

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);

      scene.remove(line);
      lineGeo.dispose();
      lineMat.dispose();

      for (const p of particles) scene.remove(p.mesh);
      sphereGeo.dispose();
      sphereMat.dispose();

      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    />
  );
}

