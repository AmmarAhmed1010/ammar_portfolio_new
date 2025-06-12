'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  delay?: number;
  duration?: number;
  trigger?: Element | string | null;
  start?: string;
  once?: boolean;
};

export function AnimateOnScroll({
  children,
  className = '',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  delay = 0,
  duration = 0.8,
  trigger = null,
  start = 'top 80%',
  once = true,
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const actualTrigger = trigger || element;

    // Set initial state
    gsap.set(element, from);

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: actualTrigger,
        start,
        toggleActions: 'play none none none',
        once,
      },
    });

    tl.to(element, {
      ...to,
      duration,
      delay,
      ease: 'power2.out',
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [from, to, delay, duration, trigger, start, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
