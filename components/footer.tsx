'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <AnimateOnScroll from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }}>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <AnimateOnScroll 
                    key={link.name}
                    from={{ opacity: 0, scale: 0.9 }}
                    to={{ opacity: 1, scale: 1 }}
                    delay={index * 0.1}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:-translate-y-0.5"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          <div>
            <AnimateOnScroll from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} delay={0.1}>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          <div>
            <AnimateOnScroll from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} delay={0.2}>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="mailto:your.email@example.com" className="hover:text-foreground transition-colors">
                    your.email@example.com
                  </a>
                </li>
                <li>Based in [Your Location]</li>
                <li>Available for freelance work</li>
              </ul>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <AnimateOnScroll from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }}>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} delay={0.1}>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Built with <span className="text-primary">Next.js</span> and <span className="text-primary">Tailwind CSS</span>
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </footer>
  );
}
