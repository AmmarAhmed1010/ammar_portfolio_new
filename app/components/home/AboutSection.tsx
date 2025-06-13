'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Code, Cpu, LayoutDashboard, Paintbrush, Palette } from 'lucide-react';
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

const slideInLeft = {
  from: { opacity: 0, x: -40 },
  to: { opacity: 1, x: 0 }
};

// Helper component for animated elements
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

const SKILLS = [
  { name: 'Frameworks', icon: LayoutDashboard, items: ['React', 'Next.js', 'Gatsby', 'Remix'] },
  { name: 'Styling', icon: Palette, items: ['Tailwind CSS', 'CSS-in-JS', 'SASS/SCSS', 'CSS Modules'] },
  { name: 'UI/UX', icon: Paintbrush, items: ['Responsive Design', 'Accessibility', 'Animation', 'Design Systems'] },
  { name: 'Dev Tools', icon: Code, items: ['TypeScript', 'VS Code', 'Chrome DevTools', 'Figma'] },
];

export function AboutSection() {
  return (
    <Section id="about" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <AnimatedElement animation={fadeInUp} delay={0.1}>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary/90 backdrop-blur-sm">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Crafting <span className="text-primary">Pixel-Perfect</span> Web Experiences
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          </AnimatedElement>
        </div>

        <div className="grid gap-12">
          <AnimatedElement animation={fadeInUp} delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate <span className="font-medium text-foreground">Frontend Developer</span> with a keen eye for design and a love for creating 
                beautiful, responsive, and accessible web experiences. I specialize in turning complex 
                problems into intuitive, performant, and scalable solutions.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With expertise in modern JavaScript frameworks and a strong focus on user experience, 
                I bring designs to life while ensuring fast load times, smooth animations, and 
                cross-browser compatibility.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {SKILLS.map((skill, index) => (
              <AnimatedElement 
                key={skill.name}
                animation={slideInLeft} 
                delay={0.2 + (index * 0.1)}
                className="group"
              >
                <div className="h-full p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animation={fadeInUp} delay={0.6} className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group px-8 py-6 text-base">
                <Link href="#contact">
                  Get In Touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Section>
  );
}
