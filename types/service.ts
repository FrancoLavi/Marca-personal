export type ServiceIconName = "web" | "software" | "commerce" | "automation";

export type Service = {
  title: string;
  description: string;
  examples: string[];
  icon: ServiceIconName;
};
