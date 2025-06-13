'use client';

import { useCallback } from 'react';
import { smoothScrollTo } from './smooth-scroll';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((id: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.querySelector(id);
    if (!element) return;

    smoothScrollTo(element, {
      offset: -80, // Adjust this value based on your header height
      duration: 1,
    });
  }, []);

  return { scrollToSection };
};
