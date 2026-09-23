export type LegalPageKey = "privacy" | "terms" | "cookies";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPage = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const lastUpdated = "23 de septiembre de 2026";

const content: Record<"es" | "en", Record<LegalPageKey, LegalPage>> = {
  es: {
    privacy: {
      eyebrow: "PRIVACIDAD",
      title: "Política de privacidad",
      intro: "Esta política explica qué información puedo recibir cuando utilizás el sitio y cómo la utilizo para responder tus consultas.",
      updated: lastUpdated,
      sections: [
        { title: "Responsable", paragraphs: ["El responsable del tratamiento de los datos enviados a través de este sitio es Franco Lavirgen. Para cualquier consulta relacionada con privacidad, podés escribir a francolavi123@gmail.com."] },
        { title: "Qué datos puedo recibir", paragraphs: ["Si completás el formulario de contacto, puedo recibir tu nombre, email, empresa o proyecto, tipo de proyecto, presupuesto aproximado y el mensaje que decidas enviar.", "No solicito datos sensibles. Evitá incluir en el formulario información que no sea necesaria para analizar tu consulta."] },
        { title: "Para qué se utilizan", paragraphs: ["La información se utiliza para responder tu consulta, entender la necesidad planteada, preparar una posible propuesta y mantener la comunicación relacionada con ese pedido.", "No vendo tus datos ni los utilizo para enviar publicidad no solicitada."] },
        { title: "Proveedores", paragraphs: ["El formulario utiliza Resend para entregar los emails de contacto y el sitio está alojado en Vercel. Estos proveedores pueden procesar información desde otras jurisdicciones conforme a sus propias políticas y condiciones.", "El sitio utiliza Vercel Web Analytics para obtener métricas generales de uso. La configuración actual no envía los datos del formulario a Analytics y no utiliza cookies de seguimiento."] },
        { title: "Conservación y seguridad", paragraphs: ["Conservo la información durante el tiempo necesario para responder y gestionar la consulta, y durante el plazo que pueda resultar necesario para cumplir obligaciones legales o resolver reclamos.", "Se aplican medidas razonables para proteger la información, aunque ningún sistema conectado a internet puede garantizar seguridad absoluta."] },
        { title: "Tus derechos", paragraphs: ["Podés solicitar acceso, rectificación, actualización o supresión de los datos que pueda tener sobre vos escribiendo a francolavi123@gmail.com. También podés consultar información ante la Agencia de Acceso a la Información Pública, autoridad de aplicación de la Ley 25.326."] },
      ],
    },
    terms: {
      eyebrow: "LEGAL",
      title: "Términos de uso",
      intro: "Estos términos establecen las condiciones generales para utilizar este sitio web y consultar los servicios ofrecidos.",
      updated: lastUpdated,
      sections: [
        { title: "Alcance del sitio", paragraphs: ["Este sitio presenta información sobre Franco Lavirgen, sus servicios y algunos proyectos desarrollados. La información publicada es general y no constituye por sí sola una propuesta comercial, presupuesto ni contrato de prestación de servicios."] },
        { title: "Consultas y contratación", paragraphs: ["Una consulta enviada desde el sitio no genera una obligación de contratación. Si ambas partes avanzan con un proyecto, el alcance, precio, plazos, entregables y responsabilidades deberán acordarse por separado."] },
        { title: "Contenido y propiedad intelectual", paragraphs: ["El diseño, textos, código, identidad visual y demás contenidos de este sitio pertenecen a Franco Lavirgen o se utilizan con autorización, salvo que se indique lo contrario. No está permitido copiarlos, modificarlos o reutilizarlos con fines comerciales sin autorización previa."] },
        { title: "Proyectos y enlaces externos", paragraphs: ["Las descripciones de proyectos buscan mostrar ejemplos de trabajo y pueden no representar la versión actual de cada producto. Los enlaces a sitios de terceros se ofrecen como referencia; no controlo sus contenidos, disponibilidad ni políticas."] },
        { title: "Disponibilidad", paragraphs: ["Intento mantener la información actualizada, pero no garantizo que el sitio esté disponible en todo momento ni que todos sus contenidos estén libres de errores. Puedo modificar o retirar contenidos sin aviso previo."] },
        { title: "Contacto", paragraphs: ["Si tenés dudas sobre estos términos, podés escribir a francolavi123@gmail.com."] },
      ],
    },
    cookies: {
      eyebrow: "TRANSPARENCIA",
      title: "Política de cookies",
      intro: "El sitio utiliza una cantidad limitada de tecnologías de almacenamiento y no utiliza cookies publicitarias.",
      updated: lastUpdated,
      sections: [
        { title: "Cookie de idioma", paragraphs: ["La cookie site-locale recuerda si elegiste español o inglés para que el sitio pueda abrirse en tu idioma preferido. Es una cookie funcional, propia del sitio, y se conserva hasta un año.", "Podés eliminarla desde la configuración de tu navegador. Si la eliminás, el sitio volverá a elegir un idioma según tu navegador o la configuración predeterminada."] },
        { title: "Vercel Web Analytics", paragraphs: ["El sitio utiliza Vercel Web Analytics para conocer métricas generales como páginas visitadas, origen de referencia, dispositivo y ubicación aproximada. Según la documentación de Vercel, Web Analytics no utiliza cookies y almacena datos anonimizados.", "No se envían a Analytics tu nombre, email, empresa, teléfono ni el contenido del mensaje del formulario."] },
        { title: "Enlaces externos", paragraphs: ["Los enlaces a WhatsApp, email, GitHub u otros sitios pueden llevarte a servicios con sus propias políticas de privacidad y cookies. Esta política solo describe las tecnologías utilizadas por este sitio."] },
        { title: "Cambios futuros", paragraphs: ["Si se incorporan herramientas publicitarias, de remarketing o analítica que utilicen cookies no esenciales, esta política será actualizada y se implementará el mecanismo de consentimiento que corresponda antes de activarlas."] },
      ],
    },
  },
  en: {
    privacy: {
      eyebrow: "PRIVACY",
      title: "Privacy policy",
      intro: "This policy explains what information I may receive when you use the site and how I use it to respond to your inquiries.",
      updated: "September 23, 2026",
      sections: [
        { title: "Data controller", paragraphs: ["The person responsible for the data submitted through this site is Franco Lavirgen. For privacy-related questions, write to francolavi123@gmail.com."] },
        { title: "Information I may receive", paragraphs: ["If you complete the contact form, I may receive your name, email, company or project, project type, approximate budget, and the message you choose to send.", "I do not request sensitive data. Please avoid including information that is not necessary to discuss your inquiry."] },
        { title: "How it is used", paragraphs: ["The information is used to answer your inquiry, understand the need you describe, prepare a possible proposal, and continue communication related to that request.", "I do not sell your data or use it to send unsolicited advertising."] },
        { title: "Service providers", paragraphs: ["The contact form uses Resend to deliver contact emails and the site is hosted on Vercel. These providers may process information from other jurisdictions under their own policies and terms.", "The site uses Vercel Web Analytics for general usage metrics. The current setup does not send form data to Analytics and does not use tracking cookies."] },
        { title: "Retention and security", paragraphs: ["I keep information for as long as needed to answer and manage the inquiry, and for any period that may be necessary to comply with legal obligations or resolve claims.", "Reasonable measures are applied to protect the information, although no internet-connected system can guarantee absolute security."] },
        { title: "Your rights", paragraphs: ["You may request access, correction, update, or deletion of the data I may hold about you by writing to francolavi123@gmail.com. You may also consult the Argentine Agency for Access to Public Information, the authority responsible for Law 25.326."] },
      ],
    },
    terms: {
      eyebrow: "LEGAL",
      title: "Terms of use",
      intro: "These terms establish the general conditions for using this website and inquiring about the services offered.",
      updated: "September 23, 2026",
      sections: [
        { title: "Scope of this site", paragraphs: ["This site presents information about Franco Lavirgen, his services, and selected projects. The published information is general and does not by itself constitute a commercial offer, quote, or service agreement."] },
        { title: "Inquiries and engagement", paragraphs: ["Submitting an inquiry through the site does not create an obligation to engage. If both parties move forward with a project, scope, price, timeline, deliverables, and responsibilities must be agreed separately."] },
        { title: "Content and intellectual property", paragraphs: ["The design, text, code, visual identity, and other content on this site belong to Franco Lavirgen or are used with permission, unless stated otherwise. They may not be copied, modified, or reused commercially without prior permission."] },
        { title: "Projects and external links", paragraphs: ["Project descriptions are intended to show examples of work and may not represent the current version of each product. Links to third-party sites are provided for reference; I do not control their content, availability, or policies."] },
        { title: "Availability", paragraphs: ["I try to keep the information current, but I do not guarantee that the site will always be available or that all content will be error-free. Content may be changed or removed without prior notice."] },
        { title: "Contact", paragraphs: ["If you have questions about these terms, write to francolavi123@gmail.com."] },
      ],
    },
    cookies: {
      eyebrow: "TRANSPARENCY",
      title: "Cookie policy",
      intro: "The site uses a limited amount of storage technology and does not use advertising cookies.",
      updated: "September 23, 2026",
      sections: [
        { title: "Language cookie", paragraphs: ["The site-locale cookie remembers whether you selected Spanish or English so the site can open in your preferred language. It is a functional first-party cookie and is kept for up to one year.", "You can delete it from your browser settings. If you do, the site will choose a language again based on your browser or the default configuration."] },
        { title: "Vercel Web Analytics", paragraphs: ["The site uses Vercel Web Analytics for general metrics such as pages viewed, referrer, device, and approximate location. According to Vercel's documentation, Web Analytics does not use cookies and stores anonymized data.", "Your name, email, company, phone number, and message content are not sent to Analytics."] },
        { title: "External links", paragraphs: ["Links to WhatsApp, email, GitHub, or other sites may take you to services with their own privacy and cookie policies. This policy only describes technologies used by this site."] },
        { title: "Future changes", paragraphs: ["If advertising, remarketing, or analytics tools that use non-essential cookies are added, this policy will be updated and the appropriate consent mechanism will be implemented before they are activated."] },
      ],
    },
  },
};

export function getLegalPage(locale: "en" | "es", page: LegalPageKey) {
  return content[locale][page];
}
