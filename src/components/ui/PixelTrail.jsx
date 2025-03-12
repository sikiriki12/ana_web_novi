import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { motion as Motion, useAnimationControls } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { cn } from "../../lib/utils";
import { useDimensions } from "../../hooks/use-debounced-dimensions";

/**
 * PixelTrail - Creates a grid of pixels that animate when the mouse moves over them
 * with FIFO (first in, first out) animation pattern
 * 
 * @param {Object} props
 * @param {number} [props.pixelSize=20] - Size of each pixel in pixels
 * @param {number} [props.fadeDuration=500] - Duration of the fade animation in ms
 * @param {number} [props.delay=0] - Delay before fade animation starts in ms
 * @param {string} [props.className] - Additional class names for the container
 * @param {string} [props.pixelClassName] - Additional class names for the individual pixels
 */
const PixelTrail = ({
  pixelSize = 20,
  className,
  pixelClassName,
}) => {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);
  const trailId = useRef(uuidv4());
  
  // Queue to track activated pixels in order (for FIFO animation)
  const [activePixels, setActivePixels] = useState([]);
  
  // Process the queue for FIFO animations
  useEffect(() => {
    if (activePixels.length === 0) return;
    
    const animationInterval = setInterval(() => {
      setActivePixels(prev => {
        if (prev.length === 0) return prev;
        
        // Pop the oldest pixel from the queue
        const [oldestPixel, ...rest] = prev;
        
        // Fade out the oldest pixel
        const pixelElement = document.getElementById(oldestPixel);
        if (pixelElement && pixelElement.__fadeOut) {
          pixelElement.__fadeOut();
        }
        
        return rest;
      });
    }, 100); // Interval for popping pixels
    
    return () => clearInterval(animationInterval);
  }, [activePixels.length]);

  // Handle mouse movement to activate pixels
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / pixelSize);
    const y = Math.floor((e.clientY - rect.top) / pixelSize);
    
    const pixelId = `${trailId.current}-pixel-${x}-${y}`;
    const pixelElement = document.getElementById(pixelId);
    
    if (pixelElement) {
      const activatePixel = pixelElement.__activatePixel;
      if (activatePixel) {
        activatePixel();
        // Add this pixel to our queue
        setActivePixels(prev => [...prev, pixelId]);
      }
    }
  }, [pixelSize]);

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize]
  );
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize]
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-auto",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * PixelDot - Individual pixel in the grid
 */
const PixelDot = React.memo(
  ({ id, size, className }) => {
    const controls = useAnimationControls();
    
    // Function to show the pixel
    const activatePixel = useCallback(() => {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2 }
      });
    }, [controls]);
    
    // Function to hide the pixel with animation (called in FIFO order)
    const fadeOutPixel = useCallback(() => {
      controls.start({
        opacity: 0,
        transition: { 
          opacity: { duration: 0.3 } // Much faster fade out (300ms)
        }
      });
    }, [controls]);

    // Attach functions to the DOM element
    const ref = useCallback(
      (node) => {
        if (node) {
          node.__activatePixel = activatePixel;
          node.__fadeOut = fadeOutPixel;
        }
      },
      [activatePixel, fadeOutPixel]
    );

    return (
      <Motion.div
        id={id}
        ref={ref}
        className={cn("cursor-pointer-none", className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
      />
    );
  }
);

PixelDot.displayName = "PixelDot";
export default PixelTrail;
