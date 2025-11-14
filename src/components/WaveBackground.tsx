// components/WaveBackground.tsx
'use client';
import React, { useRef, useEffect } from 'react';

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  active: boolean;
}

export const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999, radius: 160, active: false });
  const shockwaves = useRef<Shockwave[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      buildWaves();
    };

    window.addEventListener('resize', handleResize);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };

    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
      mouse.current.active = false;
    };

    // 💥 Crear shockwave al hacer click
    const onClick = (e: MouseEvent) => {
      shockwaves.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 400, // Radio máximo de expansión
        strength: 80, // Fuerza inicial de vibración
        active: true
      });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('click', onClick);

    const waveCount = 9;
    const segmentCount = 160;
    let waves: { baseY: number; points: { x: number; y: number; baseY: number }[] }[] = [];

    const buildWaves = () => {
      waves = Array.from({ length: waveCount }, (_, wi) => {
        const baseOffset = (wi - (waveCount - 1) / 2) * 28;
        const baseY = h / 2 + baseOffset;
        const points = Array.from({ length: segmentCount + 1 }, (_, i) => {
          const x = (i / segmentCount) * w;
          return { x, y: baseY, baseY };
        });
        return { baseY, points };
      });
    };

    buildWaves();

    let lastTime = performance.now();

    const draw = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(7,10,13,0.02)';
      ctx.fillRect(0, 0, w, h);

      // Actualizar shockwaves
      shockwaves.current = shockwaves.current.filter(sw => {
        if (!sw.active) return false;
        
        // Expandir el radio
        sw.radius += dt * 0.8; // Velocidad de expansión
        
        // Reducir la fuerza conforme se expande con curva suave
        const decayFactor = 1; // Más cerca de 1 = más suave
        sw.strength *= decayFactor;
        
        // Aplicar easing suave en los últimos momentos
        const remainingRatio = (sw.maxRadius - sw.radius) / sw.maxRadius;
        if (remainingRatio < 0.3) {
          // Fade out más suave en el último 30%
          sw.strength *= 1;
        }
        
        // Desactivar cuando llegue al máximo o sea muy débil
        if (sw.radius >= sw.maxRadius || sw.strength < 0.5) {
          sw.active = false;
          return false;
        }
        
        return true;
      });

      waves.forEach((wave, wi) => {
        const t = time * 0.002 + wi * 0.25;

        for (let i = 0; i < wave.points.length; i++) {
          const p = wave.points[i];
          const nx = i / segmentCount;

          // 🌊 Ondas base
          const baseOsc = Math.sin(nx * Math.PI * 2 * 0.7 + t) * (20 + Math.cos(t + wi) * 8);
          const ripple = Math.sin(nx * 5 + t * (1 + wi * 0.05)) * (2.2 + wi * 0.4);

          // 🖱️ Repulsión del mouse
          const dx = p.x - mouse.current.x;
          const dy = p.baseY - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const r = mouse.current.radius;
          const repulsion = Math.max(0, 1 - dist / r);
          const repelStrength = repulsion * repulsion * 160;
          const dirY = dist === 0 ? 0 : dy / dist;
          const repelY = dirY * repelStrength;

          // 💥 Efecto de shockwave (vibración)
          let shockwaveEffect = 0;
          shockwaves.current.forEach(sw => {
            const swDx = p.x - sw.x;
            const swDy = p.baseY - sw.y;
            const swDist = Math.sqrt(swDx * swDx + swDy * swDy);
            
            // Solo afectar puntos cerca del frente de la onda
            const distFromWavefront = Math.abs(swDist - sw.radius);
            const waveWidth = 60; // Ancho del frente de onda
            
            if (distFromWavefront < waveWidth) {
              // Intensidad basada en qué tan cerca está del frente
              const intensity = 1 - (distFromWavefront / waveWidth);
              
              // Aplicar curva de easing suave (ease-out cubic)
              const smoothIntensity = 1 - Math.pow(1 - intensity, 3);
              
              // Factor de fade basado en la fuerza restante
              const fadeFactor = Math.min(1, sw.strength / 40); // Normalizar fuerza
              const easedFade = fadeFactor * fadeFactor * (3 - 2 * fadeFactor); // Smoothstep
              
              // Vibración: combinación de dirección radial + oscilación
              const angle = Math.atan2(swDy, swDx);
              const radialPush = Math.sin(angle * 8) * smoothIntensity * sw.strength * easedFade;
              
              // Vibración perpendicular (crea el efecto de temblor)
              const perpVibration = Math.sin(time * 0.02 + swDist * 0.05) * smoothIntensity * sw.strength * 0.6 * easedFade;
              
              shockwaveEffect += radialPush + perpVibration;
            }
          });

          p.y = p.baseY + baseOsc + ripple + repelY + shockwaveEffect;
        }

        ctx.beginPath();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        const grad = ctx.createLinearGradient(0, wave.baseY - 200, w, wave.baseY + 200);
        grad.addColorStop(0, 'rgba(120, 150, 255, 0.08)');
        grad.addColorStop(0.5, 'rgba(200, 140, 255, 0.12)');
        grad.addColorStop(1, 'rgba(255, 120, 170, 0.08)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.3 + (1 + Math.cos(time * 0.001 + wi)) * 0.6;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(120,120,255,0.06)';

        const pts = wave.points;
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
          const xc = (pts[i].x + pts[i + 1].x) / 2;
          const yc = (pts[i].y + pts[i + 1].y) / 2;
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
        }
        const last = pts[pts.length - 1];
        ctx.lineTo(last.x, last.y);
        ctx.stroke();
        ctx.closePath();
      });

      // Dibujar área oscura del mouse
      if (mouse.current.active) {
        const darkR = mouse.current.radius * 1.05;
        const g = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, darkR);
        g.addColorStop(0, 'rgba(0, 0, 0, 0.6)');
        g.addColorStop(0.35, 'rgba(0,0,0,0.35)');
        g.addColorStop(0.7, 'rgba(0,0,0,0.12)');
        g.addColorStop(1, 'transparent');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, darkR, 0, Math.PI * 2);
        ctx.fill();
      }

      // 🎨 Visualizar shockwaves (opcional - para debug)
      // Comenta esto si no quieres ver los anillos
      shockwaves.current.forEach(sw => {
        const alpha = (sw.strength / 80) * 0.3;
        ctx.strokeStyle = `rgba(120, 150, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto', // Cambiado a 'auto' para capturar clicks
        display: 'block',
      }}
      className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
    />
  );
};