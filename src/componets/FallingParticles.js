import React, { useEffect, useState } from "react";
import "../styles/base.css";

// Mathematical leaf physics simulation
const generateLeafPath = (leafId, screenHeight, screenWidth) => {
  // Each leaf has unique physics parameters
  const frequency = 0.5 + (leafId * 0.1); // Wave frequency (Hz)
  const amplitude = 40 + (leafId * 10); // Horizontal sway amplitude (px)
  const windSpeed = 0.5 + (leafId * 0.15); // Varies wind effect
  
  // Create keyframes based on leaf trajectory
  const keyframes = [];
  const steps = 20; // More steps = smoother animation
  
  for (let i = 0; i <= steps; i++) {
    const progress = i / steps;
    const time = progress * 2 * Math.PI; // Full sine wave cycle
    
    // Horizontal position: sine wave with wind effect
    const xOffset = amplitude * Math.sin(frequency * time) + (windSpeed * 30 * progress);
    
    // Vertical position: linear fall with slight easing
    const yPercent = progress * 100;
    
    // Rotation: oscillates with horizontal movement
    const rotation = 15 * Math.sin(frequency * time);
    
    keyframes.push({
      percent: progress * 100,
      x: xOffset,
      y: `${yPercent}vh`,
      rotation: rotation
    });
  }
  
  return keyframes;
};

export default function FallingParticles({ theme }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (theme === "fall" || theme === "christmas") {
      // Generate 8 leaves with random properties
      const newLeaves = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        rotationAxis: ['X', 'Y', 'Z'][Math.floor(Math.random() * 3)],
        windMagnitude: Math.random() * 1.2,
        keyframes: generateLeafPath(i, window.innerHeight, window.innerWidth)
      }));
      setLeaves(newLeaves);
    } else {
      setLeaves([]);
    }
  }, [theme]);

  return (
    <div className="falling-particles-container">
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className={`falling-particle ${theme}`}
          style={{
            left: `${leaf.left}%`,
            '--delay': `${leaf.delay}s`,
            '--duration': `${leaf.duration}s`,
            '--rotation-axis': leaf.rotationAxis,
            '--wind-magnitude': leaf.windMagnitude,
          }}
        >
          {theme === 'fall' ? (Math.random() > 0.5 ? '🍂' : '🍁') : '❄️'}
        </div>
      ))}
    </div>
  );
}
