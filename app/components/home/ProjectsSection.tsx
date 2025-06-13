'use client';

import { Section } from '@/components/section';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from './constants';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Animation variants
const fadeInUp = {
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 }
};

// Animation component
const AnimatedElement = ({
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

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsSection() {
  return (
    <Section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement 
          animation={fadeInUp}
          delay={0.1}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedElement
              key={index}
              animation={fadeInUp}
              delay={0.15 + (index * 0.1)}
            >
              <ProjectCard project={project} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </Section>
  );
}
