import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Your NeuralNetwork Component
function NeuralNetwork() {
  const mountRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const nodeCount = 50;
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x277D76 });

    for (let i = 0; i < nodeCount; i++) {
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

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < threshold) {
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
    for (let i = 0; i < particleCount * 3; i++) {
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
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      nodes.forEach((node, i) => {
        node.position.y += Math.sin(time + i * 0.5) * 0.002;
        node.position.x += Math.cos(time + i * 0.3) * 0.001;
        const scale = 1 + Math.sin(time * 2 + i) * 0.2;
        node.scale.set(scale, scale, scale);
      });

      connections.forEach(conn => {
        const points = [conn.nodeA.position, conn.nodeB.position];
        conn.line.geometry.setFromPoints(points);
      });

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationIdRef.current);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      connections.forEach(conn => conn.line.geometry.dispose());
      if (mountRef.current && renderer.domElement) {
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

// Portfolio Demo with your gradient
export default function PortfolioDemo() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)',
      fontFamily: '"Inter", system-ui, sans-serif',
      position: 'relative'
    }}>
      {/* Neural Network Background */}
      <NeuralNetwork />

      {/* Your Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#111'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 700,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Safir Jameel
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Full Stack Developer
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button style={{
            background: 'rgba(39, 125, 118, 0.9)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s',
            pointerEvents: 'auto'
          }}>
            View Projects
          </button>
          <button style={{
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#277D76',
            border: '2px solid #277D76',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all 0.3s',
            pointerEvents: 'auto'
          }}>
            Contact Me
          </button>
        </div>

        {/* About Section */}
        <div style={{
          marginTop: '4rem',
          maxWidth: '800px',
          background: 'rgba(255, 255, 255, 0.85)',
          padding: '2rem',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          pointerEvents: 'auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#277D76'
          }}>
            About Me
          </h2>
          <p style={{
            lineHeight: 1.6,
            color: '#333'
          }}>
            I'm a Full-Stack .Net Developer skilled in c#, ASP.NET, React and Azure services. Currenly working as full stack developer at Brototype (remote).
          </p>
        </div>

        {/* Skills Section */}
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          pointerEvents: 'auto'
        }}>
          {['React', 'Three.js', 'Node.js', 'TypeScript', 'AI/ML'].map(skill => (
            <span key={skill} style={{
              background: 'rgba(39, 125, 118, 0.2)',
              color: '#277D76',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: '1px solid rgba(39, 125, 118, 0.3)'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}