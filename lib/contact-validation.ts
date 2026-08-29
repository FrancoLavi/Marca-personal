import { budgetOptions, projectTypes, type ContactFormErrors, type ContactFormValues } from "@/types/contact";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeContactValues(values: ContactFormValues): ContactFormValues {
  return {
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    organization: values.organization.trim(),
    projectType: values.projectType.trim(),
    budget: values.budget.trim(),
    message: values.message.trim(),
    website: values.website.trim(),
  };
}

export function validateContactValues(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name) errors.name = "Ingresa tu nombre.";
  else if (values.name.length > 100) errors.name = "El nombre es demasiado largo.";
  if (!values.email) errors.email = "Ingresa tu email.";
  else if (values.email.length > 254 || !emailPattern.test(values.email)) errors.email = "Ingresa un email válido.";
  if (values.organization.length > 150) errors.organization = "El nombre es demasiado largo.";
  if (!projectTypes.includes(values.projectType as (typeof projectTypes)[number])) errors.projectType = "Selecciona el tipo de proyecto.";
  if (values.budget && !budgetOptions.includes(values.budget as (typeof budgetOptions)[number])) errors.budget = "Selecciona una opción de presupuesto válida.";
  if (!values.message) errors.message = "Contame brevemente sobre tu proyecto.";
  else if (values.message.length < 20) errors.message = "Contame un poco más sobre tu proyecto.";
  else if (values.message.length > 4000) errors.message = "El mensaje es demasiado largo.";
  return errors;
}
