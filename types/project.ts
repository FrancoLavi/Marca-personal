export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectImpact = {
  summary: string;
  metrics: ProjectMetric[];
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  problem: string;
  solution: string;
  impact?: ProjectImpact;
  features: string[];
  technologies: string[];
  image: string;
  screenshots?: ProjectScreenshot[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  translations?: Partial<Record<"en" | "es", ProjectTranslation>>;
};

export type ProjectTranslation = {
  shortDescription?: string;
  description?: string;
  category?: string;
  problem?: string;
  solution?: string;
  impact?: ProjectImpact;
  features?: string[];
};
