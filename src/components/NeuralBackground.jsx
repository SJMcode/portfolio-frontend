import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// NeuralNetwork Background Component
export default function NeuralNetwork()
{
  const mountRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() =>
  {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    let renderer;
    try
    {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);
    } catch (e)
    {
      console.warn("WebGL not supported, falling back to static background.");
      return;
    }

    const nodeCount = 50;
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x277D76 });

    for (let i = 0; i < nodeCount; i++)
    {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 6;
      node.position.set(x, y, z);
      scene.add(node);
      nodes.push(node);
    }

    const connections = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x277D76,
      transparent: true,
      opacity: 0.4
    });

    const threshold = 2;

    for (let i = 0; i < nodes.length; i++)
    {
      for (let j = i + 1; j < nodes.length; j++)
      {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < threshold)
        {
          const points = [nodes[i].position, nodes[j].position];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
          connections.push({ line, nodeA: nodes[i], nodeB: nodes[j] });
        }
      }
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++)
    {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.4
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let time = 0;
    const animate = () =>
    {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      nodes.forEach((node, i) =>
      {
        node.position.y += Math.sin(time + i * 0.5) * 0.002;
        node.position.x += Math.cos(time + i * 0.3) * 0.001;
        const scale = 1 + Math.sin(time * 2 + i) * 0.2;
        node.scale.set(scale, scale, scale);
      });

      connections.forEach(conn =>
      {
        const points = [conn.nodeA.position, conn.nodeB.position];
        conn.line.geometry.setFromPoints(points);
      });

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () =>
    {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () =>
    {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationIdRef.current);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      connections.forEach(conn => conn.line.geometry.dispose());
      if (mountRef.current && renderer.domElement)
      {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
      }}
    />
  );
}