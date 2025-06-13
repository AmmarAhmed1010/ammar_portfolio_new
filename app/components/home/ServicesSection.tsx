'use client';

import { Section } from '@/components/section';
import { SERVICES } from './constants';
import { renderIcon } from './icon-utils';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Animation variants
const fadeInUp = {
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 }
};

const scaleIn = {
  from: { opacity: 0, scale: 0.95 },
  to: { opacity: 1, scale: 1 }
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

export function ServicesSection() {
  return (
    <Section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement 
          animation={fadeInUp}
          delay={0.1}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help bring your digital ideas to life.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedElement
              key={service.title}
              animation={fadeInUp}
              delay={0.15 + (index * 0.1)}
              className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-colors hover:bg-background/90"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {renderIcon(service.icon, 'w-10 h-10 mb-4 text-primary')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </Section>
  );
}
