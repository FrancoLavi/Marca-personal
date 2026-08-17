export const principles = [
  { number: "01", title: "Entender antes de desarrollar", description: "Primero busco entender el problema, los usuarios y el objetivo real del proyecto." },
  { number: "02", title: "Mantener las cosas simples", description: "Una buena solución no necesita ser innecesariamente compleja. Priorizo software claro, mantenible y fácil de utilizar." },
  { number: "03", title: "Pensar de punta a punta", description: "Considero tanto la experiencia del usuario como la lógica, los datos y las integraciones que hacen funcionar el sistema." },
  { number: "04", title: "Construir para evolucionar", description: "Busco crear una base sólida que permita incorporar mejoras y nuevas funcionalidades con el tiempo." },
] as const;

export const technologyGroups = [
  { name: "Frontend", tools: ["React", "Next.js", "TypeScript"] },
  { name: "Backend", tools: ["Node.js", "APIs REST"] },
  { name: "Datos", tools: ["PostgreSQL", "SQL", "Prisma"] },
  { name: "Herramientas", tools: ["Git", "Docker"] },
] as const;
