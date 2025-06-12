import 'framer-motion';

declare module 'framer-motion' {
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
    layout?: any;
    style?: any;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export interface MotionComponentProps extends MotionProps {
    as?: React.ElementType;
  }

  export const motion: {
    [key: string]: React.ForwardRefExoticComponent<MotionComponentProps>;
  };
}
