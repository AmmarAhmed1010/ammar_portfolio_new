'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

/**
 * Smoothly scrolls to a target element
 * @param target - The target element or selector to scroll to
 * @param options - Scroll options
 * @returns A GSAP tween instance
 */
export const smoothScrollTo = (
  target: Element | string,
  options: {
    offset?: number;
    duration?: number;
    onComplete?: () => void;
    onStart?: () => void;
  } = {}
) => {
  const {
    offset = 0,
    duration = 1.2,
    onComplete,
    onStart,
  } = options;

  const scrollVars: gsap.TweenVars = {
    duration,
    ease: 'power2.inOut',
    onComplete,
    onStart,
    scrollTo: {
      y: target,
      offsetY: offset,
      autoKill: true,
    },
  };

  return gsap.to(window, scrollVars);
};

/**
 * Creates a scroll trigger for an element with optional animation
 * @param element - The element to animate
 * @param animation - The animation function to apply
 * @param options - Scroll trigger options
 * @returns A GSAP ScrollTrigger instance
 */
export const createScrollTrigger = (
  element: Element,
  animation: (el: gsap.core.Timeline) => void,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
    onEnterBack?: () => void;
    onLeaveBack?: () => void;
  } = {}
) => {
  const {
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    markers = false,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
  } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub,
      markers,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    },
  });

  animation(tl);
  return tl.scrollTrigger;
}

/**
 * Scrolls to the top of the page smoothly
 * @param options - Scroll options
 */
export const scrollToTop = (options: {
  duration?: number;
  onComplete?: () => void;
} = {}) => {
  const { duration = 0.8, onComplete } = options;
  
  return gsap.to(window, {
    duration,
    ease: 'power2.inOut',
    scrollTo: { y: 0, autoKill: true },
    onComplete,
  });
};
