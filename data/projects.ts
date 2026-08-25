import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "e-commerce-full-stack",
    title: "E-commerce Full Stack",
    shortDescription: "Mi papá, Jorge, vende puertas y ventanas hace 35 años, viajando por la provincia de Buenos Aires y toda la Patagonia hasta Tierra del Fuego. Desarrollé esta tienda para que pueda vender desde casa, sin subirse más al auto.",
    description: "Mi papá, Jorge, hace 35 años que se dedica a vender puertas y ventanas, viajando por la provincia de Buenos Aires y por toda la Patagonia hasta Tierra del Fuego. Pasados los 60, salir de viaje para vender ya no era sostenible. Esta plataforma nació para que pudiera seguir haciendo lo que mejor sabe hacer —vender aberturas de calidad— pero desde casa.",
    category: "E-commerce / Aplicación web",
    problem: "Mi papá conocía el negocio de las aberturas de memoria, pero para vender tenía que viajar constantemente: recorrer la provincia de Buenos Aires y la Patagonia hasta Tierra del Fuego, visitar clientes, cargar catálogos impresos y pasar días enteros en la ruta. Eso significaba viajes agotadores, gastos de nafta y hospedaje, y cada vez menos tiempo en casa. Necesitábamos que los clientes lo encontraran a él, y no al revés.",
    solution: "Desarrollé una tienda online completa donde puede publicar el catálogo actualizado de puertas y ventanas, con fotos, medidas y terminaciones. Los clientes consultan precios, hacen pedidos y coordinan el pago sin que él tenga que viajar, y un panel administrativo le permite cargar productos y seguir sus pedidos sin depender de nadie más, todo desde casa.",
    impact: {
      summary: "Hoy mi papá atiende pedidos desde casa, sin tener que viajar miles de kilómetros para vender. La tienda le permitió llegar a clientes de la Patagonia y de toda la provincia sin subirse al auto, y en el primer año de funcionamiento ya se nota en los números.",
      metrics: [
        { value: "+45%", label: "más ventas mensuales desde el lanzamiento" },
        { value: "-100%", label: "kilómetros recorridos para vender (antes ~2.500 km/mes)" },
        { value: "+70", label: "pedidos gestionados online en el primer año" },
        { value: "24/7", label: "el catálogo queda abierto, sin importar el horario" },
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
      shortDescription: "My dad, Jorge, has sold doors and windows for 35 years, traveling across Buenos Aires province and all of Patagonia down to Tierra del Fuego. I built this store so he can sell from home instead.",
      description: "My dad, Jorge, has spent 35 years selling doors and windows, traveling across Buenos Aires province and all of Patagonia down to Tierra del Fuego. Past 60, hitting the road to sell stopped being sustainable. This platform was built so he could keep doing what he does best —selling quality fixtures— but from home.",
      category: "E-commerce / Web application",
      problem: "My dad knew the fixtures business inside out, but selling meant constant travel: covering Buenos Aires province and all of Patagonia down to Tierra del Fuego, visiting clients, carrying printed catalogs, and spending days on the road. That meant exhausting trips, fuel and lodging costs, and less and less time at home. We needed clients to find him, not the other way around.",
      solution: "I built a full online store where he can publish an up-to-date catalog of doors and windows, with photos, measurements, and finishes. Clients check prices, place orders, and arrange payment without him having to travel, and an admin panel lets him manage products and track orders on his own, all from home.",
      impact: {
        summary: "Today my dad handles orders from home, without having to travel thousands of kilometers to sell. The store let him reach clients across Patagonia and the whole province without getting in the car, and the numbers already show it after the first year.",
        metrics: [
          { value: "+45%", label: "more monthly sales since launch" },
          { value: "-100%", label: "kilometers driven to sell (before ~2,500 km/month)" },
          { value: "+70", label: "orders handled online in the first year" },
          { value: "24/7", label: "the catalog stays open, any time of day" },
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
