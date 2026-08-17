export const projectTypes = [
  "Página web",
  "Aplicación web",
  "Software a medida",
  "E-commerce",
  "Automatización o integración",
  "Mejorar un sistema existente",
  "Todavía no estoy seguro",
] as const;

export const budgetOptions = [
  "Todavía no lo definí",
  "Menos de USD 500",
  "USD 500 – 1.000",
  "USD 1.000 – 2.500",
  "Más de USD 2.500",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetOption = (typeof budgetOptions)[number];

export type ContactFormValues = {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
