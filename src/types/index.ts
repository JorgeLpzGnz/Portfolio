// types/index.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  highlights: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}