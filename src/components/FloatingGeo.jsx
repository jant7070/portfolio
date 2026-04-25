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
    renderer.domElement.style.touchAction = "none";
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

    const canvas = renderer.domElement;

    let raf = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    const vel = { x: 0, y: 0 }; // radians/frame momentum
    const deltaRing = [];
    const RING_MAX = 6;

    const AUTO_X = 0.003;
    const AUTO_Y = 0.005;
    const DRAG_SENS = 0.005;
    const MOMENTUM_DECAY = 0.96;
    const MOMENTUM_EPS = 0.00015;

    const setCursor = (c) => {
      canvas.style.cursor = c;
    };

    const pushDelta = (dx, dy) => {
      deltaRing.push({ dx, dy });
      if (deltaRing.length > RING_MAX) deltaRing.shift();
    };

    const seedMomentumFromRing = () => {
      if (!deltaRing.length) return;
      let sx = 0;
      let sy = 0;
      for (const d of deltaRing) {
        sx += d.dx;
        sy += d.dy;
      }
      const n = deltaRing.length;
      // last-movement -> angular velocity (radians/frame), scaled similarly to drag sensitivity
      vel.x = (sy / n) * DRAG_SENS;
      vel.y = (sx / n) * DRAG_SENS;
    };

    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      deltaRing.length = 0;
      vel.x = 0;
      vel.y = 0;
      setCursor("grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      pushDelta(dx, dy);
      group.rotation.y += dx * DRAG_SENS;
      group.rotation.x += dy * DRAG_SENS;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      seedMomentumFromRing();
      deltaRing.length = 0;
      setCursor("grab");
    };

    const onPointerLeave = () => {
      endDrag();
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const tick = () => {
      if (!isDragging) {
        if (Math.abs(vel.x) > MOMENTUM_EPS || Math.abs(vel.y) > MOMENTUM_EPS) {
          group.rotation.x += vel.x;
          group.rotation.y += vel.y;
          vel.x *= MOMENTUM_DECAY;
          vel.y *= MOMENTUM_DECAY;
        } else {
          vel.x = 0;
          vel.y = 0;
          group.rotation.x += AUTO_X;
          group.rotation.y += AUTO_Y;
        }
      }

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(tick);
    };

    setCursor("grab");
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      canvas.removeEventListener("pointerleave", onPointerLeave);

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
      className="hidden md:block"
      role="img"
      aria-label="Interactive 3D icosahedron — drag to rotate"
      style={{ width: 280, height: 280 }}
    />
  );
}
