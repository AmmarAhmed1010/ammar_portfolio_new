'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { ProjectCard } from '@/components/project-card';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Github, LayoutDashboard, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Hi, I'm <span className="text-primary">Anas Irfan</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                    A passionate Frontend Developer creating beautiful, responsive, and user-friendly web experiences with modern technologies like React, Next.js, and TypeScript.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="group">
                      <Link href="/projects">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/contact">
                        Get In Touch
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                
                <motion.div className="mt-8 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                      <div
                        key={tech}
                        className="h-10 w-10 rounded-full bg-secondary p-1.5 shadow-md"
                        style={{ zIndex: 10 - index }}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-xs font-medium">
                          {tech.charAt(0)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">+ more</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" className="bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I offer a range of services to help bring your digital ideas to life.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <LayoutDashboard className="h-10 w-10 mb-4 text-primary" />,
                  title: 'Web Development',
                  description: 'Building responsive and interactive websites using modern technologies like React, Next.js, and TypeScript.'
                },
                {
                  icon: <Cpu className="h-10 w-10 mb-4 text-primary" />,
                  title: 'UI/UX Design',
                  description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.'
                },
                {
                  icon: <Code className="h-10 w-10 mb-4 text-primary" />,
                  title: 'Code Optimization',
                  description: 'Improving performance and maintainability of existing codebases.'
                },
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 
                  }}
                  className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
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
      
      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="fixed bottom-8 right-8 hidden flex-col space-y-4 md:flex"
      >
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:your.email@example.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
