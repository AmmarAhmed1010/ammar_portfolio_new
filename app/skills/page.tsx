import { Metadata } from 'next';
import { Section } from '../../components/section';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technologies and tools I work with.',
};

const skills = {
  'Frontend': [
    { name: 'React', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML5', level: 'Expert' },
    { name: 'CSS3', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Advanced' },
  ],
  'Backend': [
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'RESTful APIs', level: 'Advanced' },
    { name: 'GraphQL', level: 'Intermediate' },
  ],
  'Tools & Libraries': [
    { name: 'Git', level: 'Advanced' },
    { name: 'GitHub', level: 'Advanced' },
    { name: 'VS Code', level: 'Expert' },
    { name: 'Figma', level: 'Intermediate' },
    { name: 'GSAP', level: 'Intermediate' },
    { name: 'Framer Motion', level: 'Advanced' },
  ],
};

export default function SkillsPage() {
  return (
    <Section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">My Skills</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-muted/50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{
                          width: 
                            skill.level === 'Expert' ? '95%' :
                            skill.level === 'Advanced' ? '85%' :
                            skill.level === 'Intermediate' ? '70%' : '50%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Experience Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />
            
            {[
              {
                title: 'Frontend Developer at Company',
                period: '2022 - Present',
                description: 'Building modern web applications using React and Next.js.'
              },
              {
                title: 'Junior Frontend Developer',
                period: '2020 - 2022',
                description: 'Developed responsive UIs and collaborated with design teams.'
              },
              {
                title: 'Web Development Intern',
                period: '2019 - 2020',
                description: 'Assisted in building and maintaining client websites.'
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-8 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:pl-0 pl-10' : 'md:ml-auto md:pl-8 md:pr-0 pl-10'}`}
                style={{ maxWidth: 'calc(50% - 1rem)' }}
              >
                <div className="absolute w-4 h-4 rounded-full bg-primary left-0 top-2 -ml-2 md:left-auto md:right-0 md:mr-0" />
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
