import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FloatingGeo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(280, 280, false);
    container.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1.4, 1);

    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x1a56db,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const outer = new THREE.Mesh(geo, outerMat);

    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: false,
      transparent: true,
      opacity: 0.04,
    });
    const inner = new THREE.Mesh(geo, innerMat);

    const group = new THREE.Group();
    group.add(inner);
    group.add(outer);
    scene.add(group);

    let raf = 0;
    const tick = () => {
      group.rotation.x += 0.003;
      group.rotation.y += 0.005;
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      scene.remove(group);
      outerMat.dispose();
      innerMat.dispose();
      geo.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:block pointer-events-none"
      aria-hidden="true"
      style={{ width: 280, height: 280 }}
    />
  );
}

