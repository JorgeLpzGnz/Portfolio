// components/ParticleBackground.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArrayRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const animationFrameRef = useRef<number>(1);

  const MAX_PARTICLES = 400;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    console.log('Particle system initialized!');

    // Colores que van con tu paleta
    const colors = [
      'rgba(96, 165, 250, ', // blue-400
      'rgba(167, 139, 250, ', // purple-400
      'rgba(244, 114, 182, ', // pink-400
      'rgba(34, 211, 238, ', // cyan-400
    ];

    // Crear partícula
    const createParticle = (x: number, y: number, explosion = false): Particle => {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const baseSize = explosion ? Math.random() * 4 + 2 : Math.random() * 3 + 1;
      const speed = explosion ? 6 : 2;
      
      return {
        x,
        y,
        size: baseSize,
        baseSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: colorBase,
        opacity: 1,
        life: 100,
        maxLife: 100,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    };

    // Eventos del mouse
    const handleMouseMove = (event: MouseEvent) => {
        mouseRef.current.x = event.clientX;
        mouseRef.current.y = event.clientY;
        mouseRef.current.isMoving = true;

        let lastTime = 0;
        const now = Date.now();
        if (now - lastTime < 30) return; // solo cada 30 ms
        lastTime = now;

        if (particlesArrayRef.current.length < MAX_PARTICLES) {
        for (let i = 0; i < 2; i++) {
        particlesArrayRef.current.push(createParticle(event.clientX, event.clientY));
        }
        }   

      else {
        particlesArrayRef.current.splice(0, 20)
      }
    };

    const handleClick = (event: MouseEvent) => {
      console.log('Click detected, creating explosion!');
      // Explosión de partículas al hacer clic
      for (let i = 0; i < 25; i++) {
        particlesArrayRef.current.push(createParticle(event.clientX, event.clientY, true));
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    // Animación
    const animate = () => {
      if (!ctx) return;

      // Limpiar canvas con transparencia (NO fondo negro)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesArrayRef.current;

      // Actualizar y dibujar partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Actualizar posición
        p.x += p.speedX;
        p.y += p.speedY;

        // Efecto de pulsación
        p.pulsePhase += p.pulseSpeed;
        p.size = p.baseSize + Math.sin(p.pulsePhase) * (p.baseSize * 0.3);

        // Reducir vida
        p.life--;
        p.opacity = p.life / p.maxLife;

        // Fricción
        p.speedX *= 0.98;
        p.speedY *= 0.98;

        // Dibujar partícula con glow
        ctx.save();
        ctx.globalAlpha = p.opacity;

        // Glow exterior más intenso
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color + '1)';
        
        // Círculo principal
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo brillante
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, p.color + '1)');
        gradient.addColorStop(1, p.color + '0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Eliminar partículas muertas
        if (p.life <= 0 || p.size <= 0.1) {
          particles.splice(i, 1);
          continue;
        }

        // Conectar partículas cercanas
        for (let j = i - 1; j >= 0; j--) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            const opacity = (1 - distance / 100) * 0.4 * Math.min(p.opacity, p2.opacity);
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = p.color + opacity + ')';
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 5;
            ctx.shadowColor = p.color + opacity + ')';
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'auto',
        display: 'block'
      }}
    />
  );
};