'use client';

import { ReactNode, forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

type AnimationType = 
  | 'fadeIn'
  | 'fadeInUp'
  | 'scaleIn'
  | 'slideInLeft'
  | 'slideInRight';

interface AnimateProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  scrollTrigger?: boolean | ScrollTrigger.Vars;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  onStart?: () => void;
}

export const Animate = forwardRef<HTMLDivElement, AnimateProps>(({
  children,
  type = 'fadeIn',
  delay = 0,
  duration,
  stagger,
  scrollTrigger = false,
  className = '',
  style,
  onComplete,
  onStart,
}, ref) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  // Set the forwarded ref
  const setRefs = (el: HTMLDivElement | null) => {
    // Update the local ref
    (elementRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    
    // Update the forwarded ref if provided
    if (typeof ref === 'function') {
      ref(el);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    }
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let ctx: gsap.Context;

    const getAnimation = () => {
      const baseVars = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration || 0.8,
        delay,
        onStart,
        onComplete,
        ease: 'power3.out',
      };

      const initialVars: Record<AnimationType, gsap.TweenVars> = {
        fadeIn: { opacity: 0 },
        fadeInUp: { opacity: 0, y: 40 },
        scaleIn: { opacity: 0, scale: 0.9 },
        slideInLeft: { opacity: 0, x: -60 },
        slideInRight: { opacity: 0, x: 60 },
      };

      return gsap.fromTo(
        element,
        { ...initialVars[type] },
        { ...baseVars, ...initialVars[type] }
      );
    };

    // Set initial styles
    gsap.set(element, { opacity: 0 });

    // Create the animation
    if (scrollTrigger) {
      ctx = gsap.context(() => {
        const anim = getAnimation();
        animationRef.current = anim;
        
        ScrollTrigger.create({
          trigger: element,
          animation: anim,
          start: 'top 80%',
          ...(typeof scrollTrigger === 'object' ? scrollTrigger : {}),
          onEnter: () => {
            if (anim.progress() === 0) {
              anim.play(0);
            }
          },
        });
      });
    } else {
      // Immediate animation without scroll trigger
      animationRef.current = getAnimation();
    }

    return () => {
      // Cleanup animations and scroll triggers
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      if (ctx) {
        ctx.revert();
      }
    };
  }, [type, delay, duration, stagger, scrollTrigger, onComplete, onStart]);

  return (
    <div 
      ref={setRefs}
      className={`will-change-transform ${className}`}
      style={{
        opacity: 0, // Start with 0 opacity, will be animated in
        ...style,
      }}
    >
      {children}
    </div>
  );
});

Animate.displayName = 'Animate';

// Staggered animation component for lists
type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delay?: number;
  scrollTrigger?: boolean | ScrollTrigger.Vars;
};

export const StaggerContainer = ({
  children,
  className = '',
  style,
  stagger = 0.1,
  delay = 0,
  scrollTrigger = true,
}: StaggerContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>('[data-stagger]')
    );

    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay,
      });

      elements.forEach((el, i) => {
        const type = el.getAttribute('data-animate') as AnimationType || 'fadeInUp';
        const itemDelay = parseFloat(el.getAttribute('data-delay') || '0') || i * stagger;
        
        const initialVars: Record<AnimationType, gsap.TweenVars> = {
          fadeIn: { opacity: 0 },
          fadeInUp: { opacity: 0, y: 40 },
          scaleIn: { opacity: 0, scale: 0.9 },
          slideInLeft: { opacity: 0, x: -60 },
          slideInRight: { opacity: 0, x: 60 },
        };

        tl.to(
          el,
          {
            ...initialVars[type],
            duration: 0.8,
            ease: 'power3.out',
          },
          0
        );

        tl.to(
          el,
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: itemDelay,
            ease: 'power3.out',
          },
          0
        );
      });

      if (scrollTrigger) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          animation: tl,
          start: 'top 80%',
          ...(typeof scrollTrigger === 'object' ? scrollTrigger : {}),
        });
      }

      return () => tl.kill();
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, delay, scrollTrigger]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  );
};

// Stagger item component to be used with StaggerContainer
type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: AnimationType;
  delay?: number;
};

export const StaggerItem = ({
  children,
  className = '',
  style,
  type = 'fadeInUp',
  delay = 0,
}: StaggerItemProps) => {
  return (
    <div
      className={`opacity-0 ${className}`}
      style={style}
      data-stagger
      data-animate={type}
      data-delay={delay}
    >
      {children}
    </div>
  );
};
