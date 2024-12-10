import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  hue: number;
}

const ParticleEcosystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      size: Math.random() * 15 + 5,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 4 - 2,
      hue: Math.random() * 60 + 100, // Green to blue hues
    });

    const initParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.current.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 20, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 50%, 0.8)`;
        ctx.fill();

        // Connect particles
        particles.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `hsla(${particle.hue}, 70%, 50%, ${
                1 - distance / 150
              })`;
              ctx.lineWidth = 2;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      onMouseMove={(e) => {
        mousePosition.current = { x: e.clientX, y: e.clientY };
      }}
    />
  );
};

export default ParticleEcosystem;