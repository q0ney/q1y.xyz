'use client';

import { useEffect, useRef, useState } from 'react';
import LaserFlow from './react-bits/LaserFlow';

export default function HeroLight() {
  const surfaceRef = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const surface = document.getElementById('featured-project');
    if (!surface) return;
    surfaceRef.current = surface;
    const measure = () => {
      const bounds = surface.getBoundingClientRect();
      setHeight(Math.ceil(bounds.bottom + window.scrollY + 120));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    observer.observe(surface);
    measure();
    window.addEventListener('resize', measure);
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, []);

  return height > 0 ? <div className="page-laser" style={{ height }} aria-hidden="true">
    <LaserFlow surfaceRef={surfaceRef} color="#9ed8ff" beamPosition={0.76}
      intensity={0.85} beamWidth={0.7} flare={0.65} spread={0.7}
      spill={0.4} fog={0.07} dust={0.35} streaks={0.6} dots={0.15}
      pulse={0.45} speed={0.65} dpr={1.5} mouseInteraction />
  </div> : null;
}

