export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  screenshots?: ProjectScreenshot[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
};
