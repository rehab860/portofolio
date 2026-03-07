export interface Project {
  title: string;
  role: string;
  tools: string[];
  description: string;
  status: 'Completed' | 'Currently Working On';
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Soft' | 'Language';
}
