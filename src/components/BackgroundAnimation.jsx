import React, { useEffect } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  useEffect(() => {
    let scene, camera, renderer, particles, animationId;

    const init = () => {    
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      particles = new THREE.Group();
      scene.add(particles);

      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0x00baff,
        transparent: true,
        opacity: 0.7,
      });

      for (let i = 0; i < 500; i++) {
        const particleGeometry = new THREE.SphereGeometry(Math.random() * 1, 32, 32);
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);

        particle.position.set(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
        );
        particles.add(particle);
      }

      camera.position.z = 500;

      const animate = () => {
        animationId = requestAnimationFrame(animate); 
        if (particles) {
          particles.rotation.x += 0.001;
          particles.rotation.y += 0.001;
        }
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      cancelAnimationFrame(animationId); 
      if (renderer) {
        renderer.dispose();
        document.body.removeChild(renderer.domElement); 
      }
      scene = null;
      camera = null;
      renderer = null;
      particles = null;
    };
  }, []);

  return null;
};

export default BackgroundAnimation;