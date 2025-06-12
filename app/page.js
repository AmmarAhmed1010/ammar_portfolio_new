'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
          <div className="container relative z-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Anas Irfan
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Frontend Developer passionate about creating beautiful, responsive, and user-friendly web applications with
                modern technologies like React, Next.js, and TypeScript.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/projects" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-16 flex items-center space-x-6"
            >
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
          </div>

          {/* Background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </section>

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
      </main>
    </div>
  );
}
