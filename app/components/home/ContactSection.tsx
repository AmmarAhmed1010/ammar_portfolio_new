'use client';

import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO, SOCIAL_LINKS } from './constants';
import { renderIcon } from './icon-utils';
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

export function ContactSection() {
  return (
    <Section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedElement 
          animation={fadeInUp} 
          delay={0.1}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedElement 
            animation={slideInLeft} 
            delay={0.2}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    {renderIcon(item.icon, item.className)}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors"
                    aria-label={social.name}
                  >
                    {renderIcon(social.icon, 'w-5 h-5')}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement 
            animation={slideInRight} 
            delay={0.3}
            className="bg-background p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors bg-background"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors bg-background"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors bg-background"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors bg-background"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </AnimatedElement>
        </div>
      </div>
    </Section>
  );
}
