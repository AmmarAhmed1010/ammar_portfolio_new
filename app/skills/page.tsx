'use client';

import { useEffect, useRef } from 'react';
import { Section } from '../../components/section';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { Code, Cpu, GitBranch, LayoutDashboard, Monitor, Smartphone, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: 'Frontend',
    icon: <LayoutDashboard className="w-6 h-6" />,
    items: [
      { name: 'React', level: 'Advanced', color: 'from-blue-500 to-cyan-400' },
      { name: 'Next.js', level: 'Advanced', color: 'from-black to-gray-700' },
      { name: 'TypeScript', level: 'Advanced', color: 'from-blue-600 to-blue-400' },
      { name: 'JavaScript', level: 'Expert', color: 'from-yellow-400 to-yellow-200' },
      { name: 'HTML5', level: 'Expert', color: 'from-orange-500 to-pink-500' },
      { name: 'CSS3', level: 'Expert', color: 'from-blue-500 to-indigo-600' },
      { name: 'Tailwind CSS', level: 'Advanced', color: 'from-cyan-400 to-blue-500' },
    ]
  },
  {
    category: 'Backend',
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { name: 'Node.js', level: 'Intermediate', color: 'from-green-500 to-emerald-400' },
      { name: 'Express', level: 'Intermediate', color: 'from-gray-500 to-gray-300' },
      { name: 'RESTful APIs', level: 'Advanced', color: 'from-red-500 to-orange-400' },
      { name: 'GraphQL', level: 'Intermediate', color: 'from-pink-600 to-purple-600' },
      { name: 'MongoDB', level: 'Intermediate', color: 'from-green-600 to-emerald-400' },
      { name: 'PostgreSQL', level: 'Basic', color: 'from-blue-700 to-blue-400' },
    ]
  },
  {
    category: 'Tools & Design',
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: 'Git', level: 'Advanced', color: 'from-orange-600 to-red-500' },
      { name: 'GitHub', level: 'Advanced', color: 'from-gray-800 to-gray-600' },
      { name: 'VS Code', level: 'Expert', color: 'from-blue-500 to-cyan-400' },
      { name: 'Figma', level: 'Intermediate', color: 'from-purple-500 to-pink-500' },
      { name: 'GSAP', level: 'Intermediate', color: 'from-green-600 to-emerald-400' },
      { name: 'Responsive Design', level: 'Advanced', color: 'from-indigo-500 to-purple-500' },
    ]
  }
];

const SkillBar = ({ name, level, color }: { name: string; level: string; color: string }) => {
  const width = 
    level === 'Expert' ? '95%' :
    level === 'Advanced' ? '85%' :
    level === 'Intermediate' ? '70%' : '50%';

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: '0%' }}
          data-width={width}
        />
      </div>
    </div>
  );
};

export default function SkillsPage() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsRef.current) return;

    // Animate skill bars on scroll
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
    <Section>
      <div className="container mx-auto px-4" ref={skillsRef}>
        <AnimateOnScroll 
          from={{ opacity: 0, y: 30 }} 
          to={{ opacity: 1, y: 0 }}
          duration={0.8}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((category, index) => (
            <AnimateOnScroll
              key={category.category}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              duration={0.6}
              delay={index * 0.1}
              className="group"
            >
              <div className="h-full bg-muted/30 backdrop-blur-sm p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            duration={0.8}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-4">
              Professional Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones and experiences that shaped my career
            </p>
          </AnimateOnScroll>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            {/* Timeline items */}
            {[
              {
                title: 'Senior Frontend Developer',
                company: 'Tech Innovators Inc.',
                period: '2022 - Present',
                description: 'Leading frontend development of enterprise applications using React, TypeScript, and modern web technologies. Mentoring junior developers and implementing best practices.',
                icon: <Code className="w-4 h-4" />
              },
              {
                title: 'Frontend Developer',
                company: 'Digital Solutions Ltd.',
                period: '2020 - 2022',
                description: 'Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality user experiences.',
                icon: <Monitor className="w-4 h-4" />
              },
              {
                title: 'UI/UX Designer & Developer',
                company: 'Creative Agency',
                period: '2018 - 2020',
                description: 'Designed and implemented user interfaces for various clients, focusing on usability and visual appeal.',
                icon: <Smartphone className="w-4 h-4" />
              },
              {
                title: 'Freelance Developer',
                company: 'Self-Employed',
                period: '2016 - 2018',
                description: 'Worked with various clients to build custom websites and web applications, honing my skills in both design and development.',
                icon: <GitBranch className="w-4 h-4" />
              },
              {
                title: 'Computer Science Degree',
                company: 'University of Technology',
                period: '2012 - 2016',
                description: 'Bachelor of Science in Computer Science with a focus on Web Technologies and Human-Computer Interaction.',
                icon: <GraduationCap className="w-4 h-4" />
              }
            ].map((item, index) => (
              <AnimateOnScroll
                key={index}
                from={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                to={{ opacity: 1, x: 0 }}
                duration={0.6}
                delay={index * 0.1}
                className={`relative mb-10 pl-12 md:pl-0 md:flex ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div 
                  className={`w-full md:w-5/12 p-6 rounded-xl bg-muted/30 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary -translate-x-1/2 border-2 border-background z-10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                    <span className="text-sm text-muted-foreground">{item.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                  <p className="text-foreground/90 text-sm">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
