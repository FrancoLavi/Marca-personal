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
    image: "/projects/e-commerce-home.png",
    screenshots: [
      { src: "/projects/e-commerce-catalogo.png", alt: "Catálogo de productos del e-commerce ErcLav.", width: 1904, height: 909 },
      { src: "/projects/e-commerce-producto.png", alt: "Detalle de producto con variantes y acción para agregar al carrito.", width: 1908, height: 867 },
      { src: "/projects/e-commerce-checkout.png", alt: "Pantalla de checkout con dirección, envío, pago y resumen de compra.", width: 1917, height: 902 },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
