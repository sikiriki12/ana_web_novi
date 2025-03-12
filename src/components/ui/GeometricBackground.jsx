import { useEffect, useRef } from 'react';

export default function GeometricBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mousePosition = { x: 0, y: 0 };
    let mouseMoving = false;
    let mouseTimeout;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Track mouse position
    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
      mouseMoving = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouseMoving = false;
      }, 100);
    };
    
    // Create particles
    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Adjust density
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: getRandomColor(),
        });
      }
    };
    
    // Get random blue/light blue color
    const getRandomColor = () => {
      const colors = [
        'rgba(59, 130, 246, 0.7)', // primary-500
        'rgba(26, 86, 219, 0.5)',  // primary-600
        'rgba(30, 64, 175, 0.3)',  // primary-800
        'rgba(147, 197, 253, 0.7)', // primary-300
        'rgba(96, 165, 250, 0.6)',  // primary-400
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    // Draw the scene
    const drawScene = () => {
      // Clear canvas with a very subtle blue gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(239, 246, 255, 0.97)'); // primary-50
      gradient.addColorStop(1, 'rgba(219, 234, 254, 0.97)'); // primary-100
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between particles
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)'; // Very subtle connection lines
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw connections between nearby particles
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.globalAlpha = 1 - (distance / 150); // Fade based on distance
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Apply subtle mouse influence when mouse is moving
        if (mouseMoving) {
          const dx = mousePosition.x - p.x;
          const dy = mousePosition.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = 0.2 * (1 - distance / 200);
            p.speedX -= (dx / distance) * force;
            p.speedY -= (dy / distance) * force;
          }
        }
        
        // Apply speed limit
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY);
        if (speed > 1) {
          p.speedX = (p.speedX / speed) * 1;
          p.speedY = (p.speedY / speed) * 1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      
      animationFrameId = window.requestAnimationFrame(drawScene);
    };
    
    // Initialize
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    drawScene();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
