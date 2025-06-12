import { Metadata } from 'next';
import { Section } from '../../components/section';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, and experience as a frontend developer.',
};

export default function AboutPage() {
  return (
    <Section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hi, I'm Ammar Ahmed</h2>
            <p className="mb-4">
              I'm a passionate Frontend Developer with expertise in building modern web applications using React, Next.js, and other cutting-edge technologies.
            </p>
            <p className="mb-6">
              With a strong foundation in computer science and years of hands-on experience, I specialize in creating responsive, accessible, and performant user interfaces that deliver exceptional user experiences.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Education</h3>
                <p>Degree in Computer Science</p>
                <p className="text-sm text-muted-foreground">University Name, Year</p>
              </div>
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p>Frontend Developer at Company Name</p>
                <p className="text-sm text-muted-foreground">Year - Present</p>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="space-y-4">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'].map((skill) => (
                <div key={skill} className="space-y-1">
                  <div className="flex justify-between">
                    <span>{skill}</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
