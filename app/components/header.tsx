'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../../lib/utils';

import { Button } from '@/components/ui/button';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-background/90 backdrop-blur-md border-b' 
            : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
        }`}
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
            <MainNav className="hidden md:ml-8 md:flex" />
          </div>
          
          <div className="flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="hidden sm:inline-flex"
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            
            <Button 
              asChild 
              variant="default" 
              size="sm" 
              className="hidden md:inline-flex"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          'md:hidden fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-lg p-4 border-b transition-all duration-200',
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <MobileNav />
        {mounted && (
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="w-full justify-start"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light Mode</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
      
      {/* Overlay when mobile menu is open */}
      <div 
        className={cn(
          'fixed inset-0 z-30 bg-background/80 backdrop-blur-sm transition-opacity duration-200',
          mobileMenuOpen ? 'opacity-100 md:opacity-0 md:pointer-events-none' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
