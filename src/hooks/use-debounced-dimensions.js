import { useState, useEffect, useCallback } from 'react';

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [ref]);

  useEffect(() => {
    // Initialize dimensions
    updateDimensions();

    // Set up resize observer
    const observer = new ResizeObserver(() => {
      // Debounce the resize updates
      const timeout = setTimeout(updateDimensions, 100);
      return () => clearTimeout(timeout);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [ref, updateDimensions]);

  return dimensions;
}
