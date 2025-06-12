import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
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

export function MainNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center space-x-6 text-sm font-medium', className)}>
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
            <span className="relative z-10">
              {item.title}
              {isActive && (
                <motion.span
                  layoutId="activeNavItem"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
