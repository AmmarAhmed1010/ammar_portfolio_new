'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';

import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div 
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-2xl font-medium transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
                {...(item.disabled && { 'aria-disabled': true })}
              >
                {item.title}
              </Link>
            );
          })}
          <Button asChild className="mt-4" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
