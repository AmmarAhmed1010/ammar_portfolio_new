'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../../lib/utils';
import { Button } from '@/components/ui/button';

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

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Only show the theme toggle UI after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 border-b',
          scrolled 
            ? 'bg-background/90 backdrop-blur-md border-border/50 shadow-sm' 
            : 'bg-background/80 backdrop-blur-sm border-transparent'
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Ammar Ahmed
              </span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 ml-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                    'relative overflow-hidden group',
                    'hover:text-foreground',
                    'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5',
                    'after:bg-primary after:transition-all after:duration-300',
                    'hover:after:w-4/5 hover:after:left-[10%]',
                    pathname === item.href 
                      ? 'text-foreground font-semibold after:w-4/5 after:left-[10%]' 
                      : 'text-muted-foreground',
                    'hover:bg-accent/20'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-px h-6 bg-border mx-2"></div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )
              ) : (
                <div className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 relative z-50"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-30 transform transition-all duration-300 ease-in-out md:hidden',
          mobileMenuOpen
            ? 'translate-x-0 opacity-100 backdrop-blur-sm'
            : 'pointer-events-none -translate-x-full opacity-0'
        )}
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div className="fixed inset-y-0 left-0 z-40 w-4/5 max-w-xs bg-background shadow-xl transition-transform duration-300 ease-in-out">
          <div className="flex h-16 items-center justify-between border-b px-6">
            <Link 
              href="/" 
              className="text-lg font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ammar Ahmed
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
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
                      'group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200',
                      'relative overflow-hidden',
                      'hover:bg-accent/20 hover:text-foreground',
                      'active:bg-accent/30',
                      pathname === item.href 
                        ? 'text-foreground font-semibold before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-md' 
                        : 'text-foreground/80',
                      'pl-5' // Add padding to account for the indicator
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
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
    </>
  );
}
