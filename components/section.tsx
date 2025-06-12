import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn('py-10 md:py-16', className)}
    >
      {children}
    </section>
  );
}
