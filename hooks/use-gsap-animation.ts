import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGsapAnimation(animateInView = true) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    // Set initial state
    gsap.set(element, { 
      opacity: 0, 
      y: 20,
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: animateInView ? {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      } : {}
    });

    tl.to(element, { 
      opacity: 1, 
      y: 0, 
      duration: 0.5,
      ease: 'power2.out'
    });

    return () => {
      tl.kill();
    };
  }, [animateInView]);

  return elementRef;
}
