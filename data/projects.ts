import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "e-commerce-full-stack",
    title: "E-commerce Full Stack",
    shortDescription: "Una plataforma de comercio electrónico desarrollada de principio a fin, con catálogo, carrito, pagos online y herramientas de administración.",
    description: "Una solución de comercio electrónico pensada para centralizar la experiencia de compra y las operaciones principales del negocio en una plataforma moderna.",
    category: "E-commerce / Aplicación web",
    problem: "Crear una solución que permita gestionar y vender productos online desde una plataforma moderna y centralizada.",
    solution: "Desarrollo de una aplicación full-stack que integra la experiencia de compra del cliente con las herramientas necesarias para administrar productos, pedidos y pagos.",
    features: ["Catálogo de productos", "Carrito de compras", "Gestión de productos", "Gestión de pedidos", "Pagos online", "Panel administrativo", "Gestión de imágenes", "Diseño responsive"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Mercado Pago", "Cloudinary"],
    image: "/projects/e-commerce-home-current.jpg",
    screenshots: [
      { src: "/projects/e-commerce-catalogo-current.jpg", alt: "Catálogo actualizado de aberturas de ErcLav.", width: 1425, height: 891 },
      { src: "/projects/e-commerce-producto-current.jpg", alt: "Detalle actualizado de una puerta metálica de seguridad con selección de medidas y terminaciones.", width: 1425, height: 891 },
    ],
    liveUrl: "https://erclav-ecommerce.vercel.app/",
    featured: true,
  },
  {
    slug: "sicapsi",
    title: "SICaPSI",
    shortDescription: "Una plataforma educativa para organizar la formación de agentes de seguridad privada de la Provincia de Buenos Aires.",
    description: "Una plataforma full-stack desarrollada para centralizar la capacitación, los contenidos y el seguimiento de estudiantes y equipos docentes del Instituto Superior Juan XXIII.",
    category: "Plataforma educativa / Software a medida",
    problem: "Centralizar la gestión de capacitaciones para que estudiantes, docentes y responsables puedan acceder a contenidos, evaluaciones, progreso y comunicación desde un mismo lugar.",
    solution: "Desarrollo de una plataforma con distintos perfiles de usuario, gestión de cursos y niveles, materiales de estudio, evaluaciones, seguimiento del progreso y mensajería interna.",
    features: ["Gestión de usuarios y roles", "Administración de capacitaciones", "Cursos, niveles y bibliografía", "Evaluaciones y resultados", "Seguimiento del progreso", "Mensajería interna", "Paneles para estudiantes y docentes", "Diseño responsive"],
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
    image: "/projects/sicapsi-home.jpg",
    repositoryUrl: "https://github.com/Instituto-Superior-Juan-XXIII/SICaPSI",
    featured: false,
  },
  {
    slug: "steamquest",
    title: "SteamQuest",
    shortDescription: "Una aplicación web que ayuda a redescubrir una biblioteca de Steam mediante recomendaciones y pequeñas misiones.",
    description: "Una experiencia web para consultar una biblioteca de Steam, entender los hábitos de juego y encontrar qué jugar después mediante recomendaciones explicables.",
    category: "Aplicación web / Integración con API",
    problem: "Una biblioteca extensa puede hacer difícil decidir qué jugar, retomar títulos pendientes o descubrir juegos que quedaron olvidados.",
    solution: "Una aplicación que combina datos de Steam con reglas de recomendación transparentes, filtros de biblioteca, actividad reciente, logros y misiones para convertir la biblioteca en un recorrido más fácil de explorar.",
    features: ["Consulta de perfiles de Steam", "Biblioteca y actividad reciente", "Recomendaciones explicables", "Filtros y ordenamientos", "Ruleta accesible", "Progreso y logros", "Misiones guardadas", "Manejo de perfiles privados"],
    technologies: ["Next.js", "React", "TypeScript", "Steam Web API", "Tailwind CSS"],
    image: "/projects/steamquest-dashboard.png",
    screenshots: [
      { src: "/projects/steamquest-dashboard.png", alt: "Pantalla principal de SteamQuest con recomendaciones y misiones para explorar una biblioteca de Steam.", width: 1729, height: 910 },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
