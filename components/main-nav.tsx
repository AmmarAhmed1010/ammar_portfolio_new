'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

const mainNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'transition-colors hover:text-primary relative px-2 py-1',
              isActive ? 'text-primary' : 'text-muted-foreground',
              item.disabled && 'cursor-not-allowed opacity-60'
            )}
          >
            {isActive && (
              <motion.span
                layoutId="activeNavItem"
                className="absolute inset-0 bg-secondary rounded-md z-[-1]"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
