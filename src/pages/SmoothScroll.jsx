import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Prevent multiple instances (important in React HMR / strict mode)
    if (!window.__lenis) {
      const lenis = new Lenis({
        duration: 1.2,       // Scroll speed
        smooth: true,        // Enable smooth scroll
        smoothTouch: true,   // Touch devices inertia
        wheelMultiplier: 1.1, // Adjust mouse wheel sensitivity
        syncTouch: false,    // Disable touch sync (prevents jitter)
        touchMultiplier: 1.5 // Better touch feel
      });

      // RAF loop with throttling (~60fps)
      let lastTime = 0;
      const raf = (time) => {
        if (time - lastTime > 16) {
          lenis.raf(time);
          lastTime = time;
        }
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      // Store instance globally
      window.__lenis = lenis;
    }

    // Cleanup on unmount
    return () => {
      if (window.__lenis) {
        window.__lenis.destroy();
        window.__lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}