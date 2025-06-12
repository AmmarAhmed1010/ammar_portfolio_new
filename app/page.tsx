'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { ProjectCard } from '@/components/project-card';
import { ArrowRight, Code, Cpu, Github, LayoutDashboard, Linkedin, Mail } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

// Define types locally
type AnimationState = {
  opacity: number;
  y?: number;
  x?: number;
  scale?: number;
  [key: string]: any;
};

type AnimationVariant = {
  from: AnimationState;
  to: AnimationState;
};

// Constants
const TECHNOLOGIES = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'] as const;

const SERVICES = [
  {
    icon: <LayoutDashboard className="w-10 h-10 mb-4 text-primary" />,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.'
  },
  {
    icon: <Cpu className="w-10 h-10 mb-4 text-primary" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that enhance user experience.'
  },
  {
    icon: <Code className="w-10 h-10 mb-4 text-primary" />,
    title: 'Code Review',
    description: 'Improving performance and maintainability of existing codebases.'
  },
] as const;

export default function Home() {
  // Animation variants
  const fadeInUp: AnimationVariant = {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 }
  };
  
  const scaleIn: AnimationVariant = {
    from: { scale: 0.9, opacity: 0 },
    to: { scale: 1, opacity: 1 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-1/4 right-1/3 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimateOnScroll 
              {...scaleIn} 
              duration={0.5} 
              delay={0.2}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary/90 backdrop-blur-sm">
                Welcome to my portfolio
              </span>
            </AnimateOnScroll>
            
            <AnimateOnScroll 
              {...fadeInUp} 
              duration={0.8} 
              delay={0.3}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
            >
              Hi, I'm <span className="text-primary">Ammar Ahmed</span>
            </AnimateOnScroll>
            
            <AnimateOnScroll 
              {...fadeInUp} 
              duration={0.8} 
              delay={0.4}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              I'm a passionate <span className="font-medium text-foreground">Frontend Developer</span> with expertise in building exceptional digital experiences. 
              I specialize in <span className="font-medium text-foreground">React</span>, <span className="font-medium text-foreground">Next.js</span>, and modern web technologies.
            </AnimateOnScroll>
            
            <AnimateOnScroll 
              {...fadeInUp} 
              duration={0.8} 
              delay={0.5}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Button asChild size="lg" className="group px-8 h-12 text-base">
                <Link href="/projects" className="relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-primary/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group px-8 h-12 text-base">
                <Link href="/contact" className="relative overflow-hidden">
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-muted/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </AnimateOnScroll>
            
            <AnimateOnScroll 
              {...fadeInUp} 
              duration={0.8} 
              delay={0.6}
              className="flex justify-center gap-6 mt-12"
            >
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:-translate-y-1 hover:scale-105 active:scale-95"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:-translate-y-1 hover:scale-105 active:scale-95"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:-translate-y-1 hover:scale-105 active:scale-95"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll 
              {...fadeInUp} 
              duration={0.8} 
              delay={0.7}
              className="mt-20 md:mt-32 text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">TECHNOLOGIES I WORK WITH</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {TECHNOLOGIES.map((tech, i) => (
                  <AnimateOnScroll
                    key={tech}
                    {...fadeInUp}
                    duration={0.5}
                    delay={0.9 + (i * 0.05)}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground/90">
                      {tech}
                    </span>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" className="bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll 
              {...fadeInUp} 
              duration={0.8} 
              delay={0.1}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I offer a range of services to help bring your digital ideas to life.
              </p>
            </AnimateOnScroll>
            
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <AnimateOnScroll
                  key={service.title}
                  {...fadeInUp}
                  duration={0.5}
                  delay={0.2 + index * 0.1}
                  className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-colors hover:bg-background/90"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Featured Projects Section */}
        <Section>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <p className="text-muted-foreground">A selection of my recent work</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
                  tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
                  image: '/project-1.jpg',
                  github: '#',
                  live: '#',
                },
                {
                  title: 'Task Management App',
                  description: 'A collaborative task management application with real-time updates using WebSockets.',
                  tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
                  image: '/project-2.jpg',
                  github: '#',
                  live: '#',
                },
              ].map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work. Let's discuss how I can help bring your ideas to life.
            </p>
            <Button asChild size="lg" className="mx-auto">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
}
