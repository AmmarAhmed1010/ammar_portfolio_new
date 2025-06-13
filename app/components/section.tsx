import { forwardRef, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ as: Component = 'section', id, className = '', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        id={id}
        className={`py-20 md:py-32 ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';
