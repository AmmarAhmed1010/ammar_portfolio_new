'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation variants
const fadeInUp = {
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 }
};

const scaleIn = {
  from: { opacity: 0, scale: 0.95 },
  to: { opacity: 1, scale: 1 }
};

// Helper component for animated elements
export const AnimatedElement = ({
  children,
  animation,
  className = '',
  delay = 0,
  duration = 0.8,
  ...props
}: {
  children: React.ReactNode;
  animation: { from: gsap.TweenVars; to: gsap.TweenVars };
  className?: string;
  delay?: number;
  duration?: number;
  [key: string]: unknown;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    // Set initial state
    gsap.set(element, animation.from);
    
    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      },
      defaults: { duration, ease: 'power3.out' },
      delay,
    });
    
    tl.to(element, {
      ...animation.to,
      duration,
      ease: 'power3.out',
    });
    
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  // Animate blobs on mouse move
  useEffect(() => {
    if (!heroRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !blob1Ref.current || !blob2Ref.current || !blob3Ref.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Normalize values between -1 and 1
      const xNorm = (x / width - 0.5) * 2;
      const yNorm = (y / height - 0.5) * 2;
      
      // Animate blobs with different intensities and directions
      gsap.to(blob1Ref.current, {
        x: xNorm * 40,
        y: yNorm * 20,
        duration: 2,
        ease: 'power2.out',
      });
      
      gsap.to(blob2Ref.current, {
        x: -xNorm * 30,
        y: -yNorm * 15,
        duration: 2.5,
        ease: 'power2.out',
      });
      
      gsap.to(blob3Ref.current, {
        x: xNorm * 20,
        y: -yNorm * 30,
        duration: 3,
        ease: 'power2.out',
      });
    };

    heroRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      heroRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/5">
      {/* Animated blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={blob1Ref}
          className="absolute -top-1/2 left-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
        />
        <div 
          ref={blob2Ref}
          className="absolute -bottom-1/3 right-1/4 w-[35rem] h-[35rem] bg-secondary/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"
        />
        <div 
          ref={blob3Ref}
          className="absolute -top-1/4 right-1/3 w-[25rem] h-[25rem] bg-accent/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedElement 
          animation={scaleIn}
          delay={0.2}
          className="inline-block"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary/90 backdrop-blur-sm">
            Welcome to my portfolio
          </span>
        </AnimatedElement>
        
        <AnimatedElement
          animation={fadeInUp}
          delay={0.3}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Hi, I'm <span className="text-primary">Ammar Ahmed</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A passionate Full Stack Developer creating beautiful, responsive, and user-friendly web applications
          </p>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInUp}
          delay={0.4}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button asChild size="lg" className="gap-2 group">
            <Link href="#contact">
              Get In Touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">
              View My Work
            </Link>
          </Button>
        </AnimatedElement>

        <AnimatedElement
          animation={fadeInUp}
          delay={0.5}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
}
