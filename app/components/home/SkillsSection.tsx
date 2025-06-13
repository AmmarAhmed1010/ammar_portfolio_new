'use client';

import { Section } from '@/components/section';
import { SKILLS } from './constants';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Animation variants
const fadeInUp = {
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 }
};

const slideInLeft = {
  from: { opacity: 0, x: -40 },
  to: { opacity: 1, x: 0 }
};

const slideInRight = {
  from: { opacity: 0, x: 40 },
  to: { opacity: 1, x: 0 }
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

export function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP animations for skill bars
  useEffect(() => {
    if (!skillsRef.current) return;

    const skillBars = skillsRef.current.querySelectorAll('[data-width]');
    
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width') || '0%';
      gsap.to(bar, {
        width: width as gsap.TweenValue,
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        duration: 1.5,
        ease: 'power3.out'
      });
    });
  }, []);

  return (
    <Section id="skills" className="py-20 bg-muted/30">
      <div ref={skillsRef} className="container mx-auto px-4">
        <AnimatedElement 
          animation={fadeInUp}
          delay={0.1}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <AnimatedElement
              key={category.category}
              animation={fadeInUp}
              delay={0.1 + (index * 0.1)}
              className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-full rounded-full ${skill.color}`}
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </Section>
  );
}
