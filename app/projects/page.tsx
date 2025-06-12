import { Metadata } from 'next';
import { ProjectCard } from '../../components/project-card';
import { Section } from '../../components/section';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my recent projects and work.',
};

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
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
  {
    title: 'Portfolio Website',
    description: 'A modern and responsive portfolio website built with Next.js and Framer Motion.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    image: '/project-3.jpg',
    github: '#',
    live: '#',
  },
];

export default function ProjectsPage() {
  return (
    <Section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
