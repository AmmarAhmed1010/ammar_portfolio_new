'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import { Moon, Sun, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const mainNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: '🏠',
  },
  {
    title: 'About',
    href: '/about',
    icon: '👨‍💻',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: '🚀',
  },
  {
    title: 'Skills',
    href: '/skills',
    icon: '🛠️',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: '📧',
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  
  // Only show the theme toggle UI after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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
        className="relative z-50 h-10 w-10"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      <div
        className={cn(
          'fixed inset-0 z-40 transform transition-all duration-300 ease-in-out',
          isOpen
            ? 'translate-x-0 opacity-100 backdrop-blur-sm'
            : 'pointer-events-none -translate-x-full opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        <div className="fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-background shadow-xl transition-transform duration-300 ease-in-out">
          <div className="flex h-16 items-center justify-between border-b px-6">
            <Link 
              href="/" 
              className="text-lg font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              onClick={() => setIsOpen(false)}
            >
              Ammar Ahmed
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-9 w-9"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="h-[calc(100%-4rem)] overflow-y-auto p-6">
            <ul className="space-y-1">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground/80 hover:bg-accent/50 hover:text-foreground',
                      item.disabled && 'pointer-events-none opacity-60'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg transition-transform group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              
              <li className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-24 justify-between"
                    disabled={!mounted}
                  >
                    {mounted ? (
                      <>
                        {theme === 'dark' ? (
                          <Moon className="h-3.5 w-3.5" />
                        ) : (
                          <Sun className="h-3.5 w-3.5" />
                        )}
                        <span className="ml-2">
                          {theme === 'dark' ? 'Dark' : 'Light'}
                        </span>
                      </>
                    ) : (
                      <span className="h-3.5 w-6" />
                    )}
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
          
          <div className="absolute bottom-0 left-0 right-0 border-t bg-background/80 p-4 backdrop-blur-sm">
            <p className="text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Ammar Ahmed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
