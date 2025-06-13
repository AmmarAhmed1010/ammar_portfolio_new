'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  title: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  github: string;
  live: string;
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    // Set initial state
    gsap.set(card, { 
      opacity: 0, 
      y: 20,
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      }
    });

    tl.to(card, { 
      opacity: 1, 
      y: 0, 
      duration: 0.5,
      ease: 'power2.out'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn('group relative overflow-hidden rounded-xl border bg-card', className)}
    >
      <div className="aspect-video overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-muted-foreground">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`rounded-full px-3 py-1 text-xs ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          {project.live ? (
            <Link 
              href={project.live} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Live Demo →
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">Coming Soon</span>
          )}
          
          {project.github && (
            <Link 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
