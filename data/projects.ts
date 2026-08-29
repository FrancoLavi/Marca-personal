import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "e-commerce-full-stack",
    title: "E-commerce Full Stack",
    shortDescription: "Mi padre, Jorge, vende puertas y ventanas desde hace 35 años, viajando por la provincia de Buenos Aires y por toda la Patagonia hasta Tierra del Fuego. Desarrollé esta tienda para que pueda vender desde casa.",
    description: "Mi padre, Jorge, lleva 35 años vendiendo puertas y ventanas. Durante todo ese tiempo viajó por la provincia de Buenos Aires y por la Patagonia, hasta Tierra del Fuego, para visitar clientes y cerrar cada venta en persona. Pasados los 60, esos viajes se volvieron cada vez más pesados. Desarrollé esta tienda para que pudiera seguir trabajando en lo que conoce, pero desde casa.",
    category: "E-commerce / Aplicación web",
    problem: "Mi padre conoce el negocio de las aberturas de memoria, pero para vender dependía de viajar: recorrer la provincia de Buenos Aires y la Patagonia hasta Tierra del Fuego, visitar clientes uno por uno, cargar catálogos impresos y pasar días fuera de casa. Eso implicaba gastos de combustible y alojamiento, jornadas largas y cada vez menos tiempo en familia. Hacía falta que los clientes pudieran encontrarlo a él, sin que tuviera que salir a buscarlos.",
    solution: "Desarrollé una tienda online donde puede publicar el catálogo de puertas y ventanas actualizado, con fotos, medidas y terminaciones. Los clientes consultan precios, hacen pedidos y coordinan el pago sin que él tenga que viajar. Un panel de administración le permite cargar productos y hacer seguimiento de los pedidos por su cuenta, desde casa.",
    impact: {
      summary: "Hoy mi padre atiende pedidos desde casa. Ya no tiene que viajar miles de kilómetros para vender, y la tienda le permitió llegar a clientes de la Patagonia y de toda la provincia sin subirse al auto. Los números del primer año ya lo reflejan.",
      metrics: [
        { value: "+45%", label: "más ventas mensuales desde el lanzamiento" },
        { value: "-100%", label: "de los kilómetros que recorría para vender (antes, unos 2.500 por mes)" },
        { value: "+70", label: "pedidos gestionados online durante el primer año" },
        { value: "24/7", label: "el catálogo queda disponible, sin depender de un horario de viaje" },
      ],
    },
    features: ["Catálogo de productos", "Carrito de compras", "Gestión de productos", "Gestión de pedidos", "Pagos online", "Panel administrativo", "Gestión de imágenes", "Diseño responsive"],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Mercado Pago", "Cloudinary"],
    image: "/projects/e-commerce-home-current.jpg",
    screenshots: [
      { src: "/projects/e-commerce-catalogo-current.jpg", alt: "Catálogo actualizado de aberturas de ErcLav.", width: 1425, height: 891 },
      { src: "/projects/e-commerce-producto-current.jpg", alt: "Detalle actualizado de una puerta metálica de seguridad con selección de medidas y terminaciones.", width: 1425, height: 891 },
    ],
    liveUrl: "https://erclav-ecommerce.vercel.app/",
    featured: true,
    translations: { en: {
      shortDescription: "My father, Jorge, has sold doors and windows for 35 years, traveling across Buenos Aires province and Patagonia down to Tierra del Fuego. I built this store so he could sell from home.",
      description: "My father, Jorge, has spent 35 years selling doors and windows. For most of that time he traveled across Buenos Aires province and Patagonia, down to Tierra del Fuego, to visit clients and close every sale in person. Past 60, those trips became harder to keep up with. I built this store so he could keep working in what he knows, but from home.",
      category: "E-commerce / Web application",
      problem: "My father knows the fixtures business by heart, but selling depended on travel: covering Buenos Aires province and Patagonia down to Tierra del Fuego, visiting clients one by one, carrying printed catalogs, and spending days away from home. That meant fuel and lodging costs, long days, and less time with family. Clients needed a way to find him without him having to go looking for them.",
      solution: "I built an online store where he can publish an up-to-date catalog of doors and windows, with photos, measurements, and finishes. Clients check prices, place orders, and arrange payment without him having to travel. An admin panel lets him manage products and track orders on his own, from home.",
      impact: {
        summary: "Today my father handles orders from home. He no longer has to travel thousands of kilometers to sell, and the store let him reach clients across Patagonia and the whole province without getting in the car. The numbers from the first year already show it.",
        metrics: [
          { value: "+45%", label: "more monthly sales since launch" },
          { value: "-100%", label: "of the kilometers he used to drive to sell (before, around 2,500 a month)" },
          { value: "+70", label: "orders handled online during the first year" },
          { value: "24/7", label: "the catalog stays available, no longer tied to a travel schedule" },
        ],
      },
      features: ["Product catalog", "Shopping cart", "Product management", "Order management", "Online payments", "Admin dashboard", "Image management", "Responsive design"],
    } },
  },
  {
    slug: "sicapsi",
    title: "SICaPSI",
    shortDescription: "Una plataforma de capacitación para agentes de seguridad privada de la Provincia de Buenos Aires.",
    description: "Un sistema full-stack desarrollado por Franco y su equipo para acompañar la formación de agentes de seguridad privada de la Provincia de Buenos Aires mediante contenidos, simulaciones y seguimiento del desempeño.",
    category: "Plataforma educativa / Software a medida",
    problem: "Crear una herramienta que permita organizar la capacitación y evaluar, de forma clara y consistente, cómo se desenvuelven los agentes en distintos escenarios de seguridad.",
    solution: "Desarrollo de una plataforma con clases magistrales, material bibliográfico, entornos explorables, simulaciones interactivas, reportes de desempeño y herramientas de gestión y comunicación.",
    features: ["Acceso seguro y recuperación de cuenta", "Clases magistrales y material bibliográfico", "Exploración libre de escenarios", "Simulaciones interactivas", "Seguimiento del progreso", "Reportes de desempeño", "Mensajería y notificaciones", "Gestión de usuarios y contenidos"],
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO"],
    image: "/projects/sicapsi-home.jpg",
    repositoryUrl: "https://github.com/Instituto-Superior-Juan-XXIII/SICaPSI",
    featured: false,
    translations: { en: {
      shortDescription: "A training platform for private security agents in the Province of Buenos Aires.",
      description: "A full-stack system developed by Franco and his team to support the training of private security agents through content, simulations, and performance tracking.",
      category: "Education platform / Custom software",
      problem: "Create a tool to organize training and clearly and consistently evaluate how agents perform in different security scenarios.",
      solution: "A platform with lectures, learning materials, explorable environments, interactive simulations, performance reports, and management and communication tools.",
      features: ["Secure access and account recovery", "Lectures and learning materials", "Free exploration of scenarios", "Interactive simulations", "Progress tracking", "Performance reports", "Messaging and notifications", "User and content management"],
    } },
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
    translations: { en: {
      shortDescription: "A web application that helps people rediscover their Steam library through recommendations and small missions.",
      description: "A web experience for exploring a Steam library, understanding gaming habits, and deciding what to play next through explainable recommendations.",
      category: "Web application / API integration",
      problem: "A large library can make it difficult to decide what to play, return to unfinished titles, or discover forgotten games.",
      solution: "An application that combines Steam data with transparent recommendation rules, library filters, recent activity, achievements, and missions to make the library easier to explore.",
      features: ["Steam profile lookup", "Library and recent activity", "Explainable recommendations", "Filters and sorting", "Accessible roulette", "Progress and achievements", "Saved missions", "Private profile handling"],
    } },
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
