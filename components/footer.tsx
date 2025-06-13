'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation component
const AnimateOnScroll = ({
  children,
  className = '',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  delay = 0,
  duration = 0.8,
  trigger = null,
  start = 'top 80%',
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  delay?: number;
  duration?: number;
  trigger?: Element | string | null;
  start?: string;
  once?: boolean;
}) => {
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
      defaults: { duration, ease: 'power2.out' },
      delay,
    });

    tl.to(element, {
      ...to,
      duration,
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
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AmmarAhmed1010',
      icon: Github,
      className: 'hover:bg-gray-800 dark:hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ammar-ahmed-461578344/',
      icon: Linkedin,
      className: 'hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'Email',
      url: 'mailto:ammar7298@gmail.com',
      icon: Mail,
      className: 'hover:bg-rose-500 hover:text-white',
    },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { 
      text: 'ammar7298@gmail.com', 
      href: 'mailto:ammar7298@gmail.com',
    },
    { 
      text: 'Available for freelance work',
      className: 'text-green-500 dark:text-green-400'
    },
  ];

  // Initialize animations on component mount
  useEffect(() => {
    // Refresh ScrollTrigger when component mounts to ensure proper calculations
    ScrollTrigger.refresh();
    
    return () => {
      // Clean up all ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-12">
          {/* Brand & Social */}
          <div className="lg:flex-1">
            <AnimateOnScroll from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }}>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Let's Build Something Amazing
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {socialLinks.map((link, index) => (
                    <AnimateOnScroll 
                      key={link.name}
                      from={{ opacity: 0, scale: 0.9 }}
                      to={{ opacity: 1, scale: 1 }}
                      delay={index * 0.1}
                      className="inline-block"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl bg-muted/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12 ${link.className || ''}`}
                        aria-label={link.name}
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Quick Links */}
          <div className="lg:w-48">
            <AnimateOnScroll from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} delay={0.1}>
              <div>
                <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Navigation
                </h4>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Contact Info */}
          <div className="lg:w-64">
            <AnimateOnScroll from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} delay={0.2}>
              <div>
                <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Get In Touch
                </h4>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <li key={index}>
                      
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className={`hover:text-primary transition-colors ${item.className || ''}`}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className={item.className || ''}>
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <AnimateOnScroll from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }}>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Ammar Ahmed. All rights reserved.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} delay={0.1}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <a 
                href="https://nextjs.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                Next.js
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>and</span>
              <a 
                href="https://tailwindcss.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                Tailwind CSS
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </footer>
  );
}
