'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Extend Window interface to include Lenis
declare global {
  interface Window {
    lenis: any;
  }
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function initSmoothScroll() {
      const Lenis = (await import('@studio-freight/lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      // Make lenis available globally for programmatic access
      window.lenis = lenis;

      function onScroll() {
        lenis.raf(performance.now());
      }

      // Handle anchor links
      function onAnchorClick(e: MouseEvent) {
        const target = e.target as HTMLAnchorElement;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const href = target.getAttribute('href');
          if (href) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              lenis.scrollTo(targetElement, {
                offset: -80, // Adjust based on your header height
                duration: 1.2,
              });
            }
          }
        }
      }


      // Add event listeners
      window.addEventListener('scroll', onScroll, { passive: false });
      document.addEventListener('click', onAnchorClick);

      // Start the animation loop
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', onScroll);
        document.removeEventListener('click', onAnchorClick);
        lenis.destroy();
        window.lenis = undefined;
      };
    }

    initSmoothScroll();
  }, [pathname, searchParams]);

  return <>{children}</>;
}
