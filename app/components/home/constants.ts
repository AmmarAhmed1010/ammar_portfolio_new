// Icons will be imported and used directly in components
export type IconName = 'LayoutDashboard' | 'Cpu' | 'Code' | 'Mail' | 'MapPin' | 'Phone' | 'Github' | 'Linkedin' | 'GraduationCap' | 'GitBranch' | 'Monitor' | 'Smartphone';

export const TECHNOLOGIES = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'] as const;

export const SERVICES = [
  {
    icon: 'LayoutDashboard' as const,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.'
  },
  {
    icon: 'Cpu' as const,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that enhance user experience.'
  },
  {
    icon: 'Code' as const,
    title: 'Code Review',
    description: 'Improving performance and maintainability of existing codebases.'
  },
] as const;

export const SKILLS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: '95%', color: 'bg-blue-500' },
      { name: 'JavaScript', level: '90%', color: 'bg-yellow-500' },
      { name: 'React', level: '85%', color: 'bg-blue-400' },
      { name: 'Next.js', level: '85%', color: 'bg-black' },
      { name: 'TypeScript', level: '80%', color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: '90%', color: 'bg-cyan-400' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: '85%', color: 'bg-green-500' },
      { name: 'Express', level: '80%', color: 'bg-gray-500' },
      { name: 'MongoDB', level: '75%', color: 'bg-green-600' },
      { name: 'PostgreSQL', level: '70%', color: 'bg-blue-700' },
      { name: 'RESTful APIs', level: '85%', color: 'bg-purple-500' },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: '90%', color: 'bg-orange-600' },
      { name: 'Docker', level: '70%', color: 'bg-blue-500' },
      { name: 'VS Code', level: '95%', color: 'bg-blue-400' },
      { name: 'Figma', level: '75%', color: 'bg-purple-400' },
      { name: 'Postman', level: '85%', color: 'bg-orange-400' },
    ]
  }
];

export const PROJECTS = [
  {
    title: 'Apple Clone',
    description: 'A responsive clone of the Apple website built with Next.js and Tailwind CSS, featuring a modern UI, smooth transitions, and consistent layout across all devices for an authentic feel.',
    tags: [
      { name: 'next', color: 'blue-text-gradient' },
      { name: 'responsive', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: '/apple.JPG',
    github: '#',
    live: 'https://apple-clone-beta.vercel.app/',
  },
  {
    title: 'E Commerce Website',
    description: 'A modern shopping site with product browsing, cart features, and responsive design. Built using Next.js and Tailwind CSS to offer a smooth and intuitive user experience across devices.',
    tags: [
      { name: 'next', color: 'blue-text-gradient' },
      { name: 'responsive', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: '/carrent.png',
    github: '#',
    live: 'https://e-commerce-chi-eight-35.vercel.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'Next.js-based ecommerce frontend with REST API integration, allowing users to browse products, manage cart items, and enjoy a responsive UI designed for all screen sizes.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'rest-api', color: 'green-text-gradient' },
      { name: 'responsive', color: 'pink-text-gradient' },
    ],
    image: '/ecom.png',
    github: '#',
    live: 'https://foreverecommerce-eta.vercel.app/',
  },
  {
    title: 'World Atlas',
    description: 'An interactive world map app built with Next.js and Framer Motion, providing country details and region filters in a responsive UI, ideal for exploring global geography visually.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'rest-api', color: 'green-text-gradient' },
      { name: 'responsive', color: 'pink-text-gradient' },
    ],
    image: '/tripguide.png',
    github: '#',
    live: 'https://worldatlas-dusky.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek and modern personal portfolio site using Next.js and Tailwind CSS. It highlights skills and projects with smooth Framer Motion animations for a professional user experience.',
    tags: [
      { name: 'next', color: 'blue-text-gradient' },
      { name: 'framer-motion', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: '/jobit.png',
    github: '#',
    live: 'https://romeogfx.vercel.app/',
  },
  {
    title: 'Contagious',
    description: 'A web app displaying a global map with country insights and filter options. Developed using Next.js and Tailwind CSS, it delivers a smooth and engaging interface with Framer Motion.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'rest-api', color: 'green-text-gradient' },
      { name: 'responsive', color: 'pink-text-gradient' },
    ],
    image: '/cont.png',
    github: '#',
    live: 'https://contagiouswebsite.vercel.app/',
  },
  {
    title: 'Plumbing Services',
    description: 'A clean and responsive plumbing service site powered by Next.js. Includes region-based service details with a user-friendly layout and animations powered by Framer Motion and Tailwind.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'rest-api', color: 'green-text-gradient' },
      { name: 'responsive', color: 'pink-text-gradient' },
    ],
    image: '/plumbing.JPG',
    github: '#',
    live: 'https://plumbing-nine.vercel.app/',
  },
];

interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
  className?: string;
}

interface ContactInfo {
  icon: IconName;
  title: string;
  value: string;
  className?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    name: 'GitHub', 
    url: 'https://github.com', 
    icon: 'Github',
    className: 'h-5 w-5'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com', 
    icon: 'Linkedin',
    className: 'h-5 w-5'
  },
  { 
    name: 'Email', 
    url: 'mailto:contact@example.com', 
    icon: 'Mail',
    className: 'h-5 w-5'
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'Mail',
    title: 'Email',
    value: 'contact@example.com',
    className: 'h-5 w-5 text-primary'
  },
  {
    icon: 'Phone',
    title: 'Phone',
    value: '+1 (123) 456-7890',
    className: 'h-5 w-5 text-primary'
  },
  {
    icon: 'MapPin',
    title: 'Location',
    value: 'San Francisco, CA',
    className: 'h-5 w-5 text-primary'
  }
];
