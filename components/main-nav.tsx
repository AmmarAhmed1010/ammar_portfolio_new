'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
              'transition-colors hover:text-primary relative px-2 py-1 group',
              isActive ? 'text-primary' : 'text-muted-foreground',
              item.disabled && 'cursor-not-allowed opacity-80'
            )}
            {...(item.disabled && { 'aria-disabled': true })}
          >
            {item.title}
            <span 
              className={cn(
                'absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full',
                isActive ? 'w-full' : ''
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
