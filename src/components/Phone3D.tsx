"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default function Phone3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobileView = window.innerWidth < 768;
    const canvasW = isMobileView ? 160 : 260;
    const canvasH = isMobileView ? 220 : 320;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, canvasW / canvasH, 0.01, 100);
    camera.position.set(0, 0.5, 2.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobileView });
    renderer.setSize(canvasW, canvasH);
    renderer.setPixelRatio(isMobileView ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Lights — brand colors
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xF0AC22, 1.5);
    keyLight.position.set(3, 5, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x8EAF2C, 1);
    rimLight.position.set(0, 3, -5);
    scene.add(rimLight);

    // Load GLB
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    let pivot: THREE.Group | null = null;

    loader.load("/models/phone-opt.glb", (gltf) => {
      const model = gltf.scene;

      pivot = new THREE.Group();
      pivot.add(model);
      scene.add(pivot);

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());

      const targetHeight = 0.25;
      const scale = targetHeight / size.y;
      model.scale.setScalar(scale);

      const box2 = new THREE.Box3().setFromObject(model);
      const center2 = box2.getCenter(new THREE.Vector3());
      model.position.x = -center2.x;
      model.position.z = -center2.z;
      model.position.y = -box2.min.y;

      pivot.position.y = -0.2;
      (pivot as any).baseY = pivot.position.y;
    }, undefined, (error) => {
      console.error("Error loading phone.glb:", error);
    });

    // Scroll + mouse
    let targetRotationY = 0;
    let currentRotationY = 0;
    let mouseX = 0, mouseY = 0, parX = 0, parY = 0;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetRotationY = max > 0 ? (window.scrollY / max) * Math.PI * 3 : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      parX += (mouseX - parX) * 0.05;
      parY += (mouseY - parY) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      if (pivot) {
        pivot.rotation.y = currentRotationY + parX * 0.3;
        pivot.position.y = (pivot as any).baseY + Math.sin(time * 1.2) * 0.05;
      }

      camera.position.x = parX * 0.3;
      camera.position.y = 0.6 - parY * 0.2;
      camera.lookAt(0, 0.5, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div className="fixed bottom-0 right-0 z-40 pointer-events-none">
      <div
        ref={mountRef}
        className="w-[160px] h-[220px] md:w-[260px] md:h-[320px] relative"
        style={{ opacity: 0.9 }}
      >
        {/* Speech bubble */}
        <div className="absolute top-[100px] md:top-[140px] left-1/2 -translate-x-1/2 bg-white rounded-2xl px-3 py-2 md:px-5 md:py-3 shadow-2xl z-10 whitespace-nowrap">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
          <p className="font-display text-xs md:text-sm text-green-dark font-semibold text-center">
            Înscriere telefonică
          </p>
          <a
            href="tel:0740467056"
            className="text-green-dark text-sm md:text-lg font-bold block text-center pointer-events-auto hover:text-orange-dark transition-colors"
          >
            0740 467 056
          </a>
        </div>
      </div>
    </div>
  );
}
