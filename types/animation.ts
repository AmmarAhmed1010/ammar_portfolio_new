export interface AnimationState {
  opacity: number;
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
  [key: string]: any;
}

export interface AnimationVariant {
  from: AnimationState;
  to: AnimationState;
}

export interface AnimationProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  from?: AnimationState;
  to?: AnimationState;
  style?: React.CSSProperties;
  [key: string]: any;
}
