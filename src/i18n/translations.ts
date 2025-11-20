export type Locale = 'es' | 'en' | 'it' | 'de';

export const locales: Locale[] = ['es', 'en', 'it', 'de'];

export const defaultLocale: Locale = 'es';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    skipToContent: string;
  };
  
  // Home page
  home: {
    title: string;
    description: string;
    editorTitle: string;
    editorLabel: string;
    previewLabel: string;
  };
  
  // About page
  about: {
    title: string;
    projectPurpose: string;
    projectPurposeText: string;
    learnMore: string;
    developer: string;
    developerText: string;
    technologiesUsed: string;
  };
  
  // Footer
  footer: {
    rights: string;
    visitWebsite: string;
  };
  
  // Language selector
  lang: {
    select: string;
    current: string;
  };
  
  // SEO
  seo: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
  };
}

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      skipToContent: 'Saltar al contenido principal',
    },
    home: {
      title: 'HTML Preview and editor',
      description: 'Editor HTML gratuito con vista previa en tiempo real. Escribe y prueba código HTML, CSS y JavaScript con nuestro editor basado en Monaco.',
      editorTitle: 'Editor HTML con Vista Previa en Tiempo Real - HTML Preview Editor',
      editorLabel: 'Editor de código HTML. Escribe tu código aquí para ver la vista previa en tiempo real.',
      previewLabel: 'Vista previa del código HTML. Muestra el resultado de tu código en tiempo real.',
    },
    about: {
      title: 'Acerca de este proyecto',
      projectPurpose: 'Propósito del Proyecto',
      projectPurposeText: 'Este proyecto fue creado para explorar y demostrar la funcionalidad de Monaco Editor, el poderoso editor de código que impulsa Visual Studio Code de Microsoft. Proporciona una forma de previsualizar código HTML en tiempo real utilizando las robustas capacidades de edición de Monaco Editor.',
      learnMore: 'Aprender más sobre Monaco Editor',
      developer: 'Desarrollador',
      developerText: 'Desarrollador web apasionado por crear aplicaciones web intuitivas y eficientes. Puedes encontrar más de mi trabajo y proyectos en GitHub:',
      technologiesUsed: 'Tecnologías Utilizadas',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      visitWebsite: 'Visitar el sitio web de Eduardo Cortez - educortez.com',
    },
    lang: {
      select: 'Seleccionar idioma',
      current: 'Idioma actual',
    },
    seo: {
      homeTitle: 'Editor HTML con Vista Previa en Tiempo Real - HTML Preview Editor',
      homeDescription: 'Editor HTML gratuito con vista previa en tiempo real. Escribe y prueba código HTML, CSS y JavaScript con nuestro editor basado en Monaco. Perfecto para desarrolladores web y estudiantes.',
      aboutTitle: 'Acerca de - HTML Preview Editor | Información del Proyecto',
      aboutDescription: 'Conoce más sobre HTML Preview Editor, un editor HTML gratuito con vista previa en tiempo real construido con Monaco Editor y Astro. Información sobre el proyecto, tecnologías utilizadas y el desarrollador.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skipToContent: 'Skip to main content',
    },
    home: {
      title: 'HTML Preview and editor',
      description: 'Free HTML editor with real-time preview. Write and test HTML, CSS, and JavaScript code with our Monaco-based editor.',
      editorTitle: 'HTML Preview Editor - Test & Edit HTML Code in Real-time',
      editorLabel: 'HTML code editor. Write your code here to see the real-time preview.',
      previewLabel: 'HTML code preview. Shows the result of your code in real-time.',
    },
    about: {
      title: 'About this project',
      projectPurpose: 'Project Purpose',
      projectPurposeText: 'This project was created to explore and demonstrate the functionality of Monaco Editor, the powerful code editor that powers Microsoft\'s Visual Studio Code. It provides a way to preview HTML code in real-time using the robust editing capabilities of Monaco Editor.',
      learnMore: 'Learn more about Monaco Editor',
      developer: 'Developer',
      developerText: 'Web developer passionate about creating intuitive and efficient web applications. You can find more of my work and projects on GitHub:',
      technologiesUsed: 'Technologies Used',
    },
    footer: {
      rights: 'All rights reserved',
      visitWebsite: 'Visit Eduardo Cortez website - educortez.com',
    },
    lang: {
      select: 'Select language',
      current: 'Current language',
    },
    seo: {
      homeTitle: 'HTML Preview Editor - Test & Edit HTML Code in Real-time',
      homeDescription: 'Free online HTML editor with live preview. Write and test HTML, CSS, and JavaScript code in real-time with our Monaco-powered editor. Perfect for web developers and students.',
      aboutTitle: 'About - HTML Preview Editor | Project Information',
      aboutDescription: 'Learn more about HTML Preview Editor, a free HTML editor with real-time preview built with Monaco Editor and Astro. Information about the project, technologies used, and the developer.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi siamo',
      skipToContent: 'Salta al contenuto principale',
    },
    home: {
      title: 'Editor e anteprima HTML',
      description: 'Editor HTML gratuito con anteprima in tempo reale. Scrivi e testa codice HTML, CSS e JavaScript con il nostro editor basato su Monaco.',
      editorTitle: 'Editor HTML con Anteprima in Tempo Reale - HTML Preview Editor',
      editorLabel: 'Editor di codice HTML. Scrivi il tuo codice qui per vedere l\'anteprima in tempo reale.',
      previewLabel: 'Anteprima del codice HTML. Mostra il risultato del tuo codice in tempo reale.',
    },
    about: {
      title: 'Informazioni su questo progetto',
      projectPurpose: 'Scopo del Progetto',
      projectPurposeText: 'Questo progetto è stato creato per esplorare e dimostrare la funzionalità di Monaco Editor, il potente editor di codice che alimenta Visual Studio Code di Microsoft. Fornisce un modo per visualizzare in anteprima il codice HTML in tempo reale utilizzando le robuste capacità di modifica di Monaco Editor.',
      learnMore: 'Scopri di più su Monaco Editor',
      developer: 'Sviluppatore',
      developerText: 'Sviluppatore web appassionato di creare applicazioni web intuitive ed efficienti. Puoi trovare più del mio lavoro e progetti su GitHub:',
      technologiesUsed: 'Tecnologie Utilizzate',
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      visitWebsite: 'Visita il sito web di Eduardo Cortez - educortez.com',
    },
    lang: {
      select: 'Seleziona lingua',
      current: 'Lingua corrente',
    },
    seo: {
      homeTitle: 'Editor HTML con Anteprima in Tempo Reale - HTML Preview Editor',
      homeDescription: 'Editor HTML gratuito online con anteprima in tempo reale. Scrivi e testa codice HTML, CSS e JavaScript in tempo reale con il nostro editor basato su Monaco. Perfetto per sviluppatori web e studenti.',
      aboutTitle: 'Chi siamo - HTML Preview Editor | Informazioni sul Progetto',
      aboutDescription: 'Scopri di più su HTML Preview Editor, un editor HTML gratuito con anteprima in tempo reale costruito con Monaco Editor e Astro. Informazioni sul progetto, tecnologie utilizzate e lo sviluppatore.',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      skipToContent: 'Zum Hauptinhalt springen',
    },
    home: {
      title: 'HTML-Vorschau und Editor',
      description: 'Kostenloser HTML-Editor mit Echtzeit-Vorschau. Schreiben und testen Sie HTML-, CSS- und JavaScript-Code mit unserem Monaco-basierten Editor.',
      editorTitle: 'HTML-Editor mit Echtzeit-Vorschau - HTML Preview Editor',
      editorLabel: 'HTML-Code-Editor. Schreiben Sie Ihren Code hier, um die Echtzeit-Vorschau zu sehen.',
      previewLabel: 'HTML-Code-Vorschau. Zeigt das Ergebnis Ihres Codes in Echtzeit.',
    },
    about: {
      title: 'Über dieses Projekt',
      projectPurpose: 'Projektzweck',
      projectPurposeText: 'Dieses Projekt wurde erstellt, um die Funktionalität von Monaco Editor zu erkunden und zu demonstrieren, den leistungsstarken Code-Editor, der Microsofts Visual Studio Code antreibt. Es bietet eine Möglichkeit, HTML-Code in Echtzeit mit den robusten Bearbeitungsfunktionen von Monaco Editor in der Vorschau anzuzeigen.',
      learnMore: 'Mehr über Monaco Editor erfahren',
      developer: 'Entwickler',
      developerText: 'Webentwickler, der leidenschaftlich intuitive und effiziente Webanwendungen erstellt. Sie können mehr von meiner Arbeit und Projekten auf GitHub finden:',
      technologiesUsed: 'Verwendete Technologien',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      visitWebsite: 'Eduardo Cortez Website besuchen - educortez.com',
    },
    lang: {
      select: 'Sprache auswählen',
      current: 'Aktuelle Sprache',
    },
    seo: {
      homeTitle: 'HTML-Editor mit Echtzeit-Vorschau - HTML Preview Editor',
      homeDescription: 'Kostenloser Online-HTML-Editor mit Live-Vorschau. Schreiben und testen Sie HTML-, CSS- und JavaScript-Code in Echtzeit mit unserem Monaco-basierten Editor. Perfekt für Webentwickler und Studenten.',
      aboutTitle: 'Über uns - HTML Preview Editor | Projektinformationen',
      aboutDescription: 'Erfahren Sie mehr über HTML Preview Editor, einen kostenlosen HTML-Editor mit Echtzeit-Vorschau, der mit Monaco Editor und Astro erstellt wurde. Informationen über das Projekt, verwendete Technologien und den Entwickler.',
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return path;
  }
  
  // Remove any existing locale prefix
  const pathWithoutLocale = path.replace(/^\/(es|en|it|de)/, '');
  
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}

