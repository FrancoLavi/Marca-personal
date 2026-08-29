import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y adaptados a cualquier dispositivo, pensados para comunicar tu propuesta y convertir visitantes en clientes.",
    examples: ["Sitios institucionales", "Landing pages", "Webs para profesionales", "Portales y aplicaciones web"],
    icon: "web",
  },
  {
    title: "Software a medida",
    description: "Sistemas diseñados específicamente para digitalizar procesos y resolver necesidades particulares de un negocio.",
    examples: ["Sistemas de gestión", "Gestión de clientes", "Control de stock", "Gestión de ventas", "Paneles administrativos", "Herramientas internas"],
    icon: "software",
  },
  {
    title: "E-commerce",
    description: "Tiendas online preparadas para vender productos y administrar las principales operaciones del negocio.",
    examples: ["Catálogo de productos", "Carrito de compras", "Pagos online", "Gestión de pedidos", "Administración de productos", "Integraciones con servicios externos"],
    icon: "commerce",
  },
  {
    title: "Automatizaciones e integraciones",
    description: "Automatización de tareas repetitivas e integración entre herramientas para reducir trabajo manual y mejorar procesos.",
    examples: ["Integraciones mediante APIs", "Automatización de procesos", "Notificaciones automáticas", "Procesamiento de información", "Integraciones con herramientas externas"],
    icon: "automation",
  },
  {
    title: "Mejora de software existente",
    description: "También puedo trabajar sobre aplicaciones existentes para incorporar funcionalidades, solucionar problemas o modernizar partes del sistema.",
    examples: ["Nuevas funcionalidades", "Corrección de errores", "Integraciones", "Mejoras de interfaz", "Optimización y mantenimiento"],
    icon: "software",
  },
];

export const technologies = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "SQL", "APIs REST"];
