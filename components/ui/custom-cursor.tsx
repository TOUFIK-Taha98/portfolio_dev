'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const velocityX = e.clientX - lastX;
      const velocityY = e.clientY - lastY;
      
      setVelocity({ x: velocityX, y: velocityY });
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Show custom cursor ONLY on body, html, main container elements
      // Hide on everything else
      const allowedTags = ['BODY', 'HTML', 'MAIN', 'SECTION', 'NAV'];
      
      // If it's a basic container element with no text content of its own
      if (allowedTags.includes(target.tagName)) {
        // Check if this element has direct text content (not in children)
        const directText = Array.from(target.childNodes).some(
          node => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
        );
        
        if (!directText) {
          setIsHovering(false);
          return;
        }
      }
      
      // Hide custom cursor on everything else
      setIsHovering(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Calculate blob deformation based on velocity
  const getBlobStyle = () => {
    const baseSize = isHovering ? 32 : 20;
    const stretchX = Math.min(Math.abs(velocity.x) * 0.5, 15);
    const stretchY = Math.min(Math.abs(velocity.y) * 0.5, 15);
    
    return {
      width: baseSize + stretchX,
      height: baseSize + stretchY,
      borderRadius: `${50 - stretchX}% ${50 + stretchX}% ${50 - stretchY}% ${50 + stretchY}%`,
    };
  };

  const blobStyle = getBlobStyle();

  return (
    <>
      {/* Blob cursor - always visible, behind everything */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.15) 100%)',
          filter: 'blur(8px)',
          mixBlendMode: 'screen',
          ...blobStyle,
        }}
        animate={{
          x: mousePosition.x - blobStyle.width / 2,
          y: mousePosition.y - blobStyle.height / 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* Inner core - also behind everything */}
      <motion.div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-0"
        style={{
          background: '#6366f1',
          boxShadow: '0 0 8px rgba(99, 102, 241, 0.4)',
          mixBlendMode: 'screen',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.3,
        }}
      />
    </>
  );
}
