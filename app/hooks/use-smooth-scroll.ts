'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

/**
 * Hook for smooth scrolling functionality using GSAP
 */
export function useSmoothScroll() {
  const pathname = usePathname();

  const scrollToSection = useCallback((id: string) => {
    const element = document.querySelector(id);
    if (!element) return;

    gsap.to(window, {
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTo: {
        y: element,
        offsetY: -80, // Adjust this value based on your header height
        autoKill: true,
      },
    });
  }, []);

  // Handle anchor clicks
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
          scrollToSection(targetId);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname, scrollToSection]);

  return { scrollToSection };
}
