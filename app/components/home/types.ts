export type AnimationState = {
  opacity: number;
  y?: number;
  x?: number;
  scale?: number;
  [key: string]: any;
};

export type AnimationVariant = {
  from: AnimationState;
  to: AnimationState;
};

export type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type Skill = {
  name: string;
  level: string;
  color: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  github: string;
  live: string;
};
