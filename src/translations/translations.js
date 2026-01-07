export const translations = {
  en: {
    // Navbar
    nav: {
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
    },
    // Profile
    profile: {
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      aboutMe: 'About Me',
      aboutText: "I'm a Full-Stack .NET Developer passionate about building scalable and reliable web applications. My skill set includes C#, ASP.NET, React, TypeScript, Tailwind CSS, and Azure services. I currently work remotely at Brototype, contributing to end-to-end web solutions. I hold a Master of Science in Computer and Systems Sciences and am based in Sweden.",
      getInTouch: 'Get in Touch',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      searchingFor: 'Searching for remote | Hybrid opportunities.',
    },
    // Experience
    experience: {
      title: 'Experience',
      loading: 'Loading...',
    },
    // Skills
    skills: {
      title: 'Tech Stack',
    },
    // Projects
    projects: {
      title: 'Projects',
      publications: 'Publications',
      viewLive: 'View Live',
      viewCode: 'View Code',
      viewPublication: 'View Publication',
    },
    // Footer
    footer: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      rights: 'All rights reserved.',
      views: 'VIEWS',
    },
  },
  swe: {
    // Navbar
    nav: {
      experience: 'Erfarenhet',
      skills: 'Kompetenser',
      projects: 'Projekt',
    },
    // Profile
    profile: {
      viewProjects: 'Visa Projekt',
      contactMe: 'Kontakta Mig',
      aboutMe: 'Om Mig',
      aboutText: 'Jag är en Full-Stack .NET-utvecklare med passion för att bygga skalbara och pålitliga webbapplikationer. Mina kompetenser inkluderar C#, ASP.NET, React, TypeScript, Tailwind CSS och Azure-tjänster. Jag arbetar för närvarande på distans på Brototype och bidrar till end-to-end webblösningar. Jag har en Master of Science i Data- och Systemvetenskap och är baserad i Sverige.',
      getInTouch: 'Kontakta',
      email: 'E-post',
      phone: 'Telefon',
      location: 'Plats',
      searchingFor: 'Söker distans- eller hybridmöjligheter.',
    },
    // Experience
    experience: {
      title: 'Erfarenhet',
      loading: 'Laddar...',
    },
    // Skills
    skills: {
      title: 'Teknisk Stack',
    },
    // Projects
    projects: {
      title: 'Projekt',
      publications: 'Publikationer',
      viewLive: 'Visa Live',
      viewCode: 'Visa Kod',
      viewPublication: 'Visa Publikation',
    },
    // Footer
    footer: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-post',
      rights: 'Alla rättigheter förbehållna.',
      views: 'VISNINGAR',
    },
  },
  de: {
    // Navbar
    nav: {
      experience: 'Erfahrung',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
    },
    // Profile
    profile: {
      viewProjects: 'Projekte Ansehen',
      contactMe: 'Kontaktiere Mich',
      aboutMe: 'Über Mich',
      aboutText: 'Ich bin ein Full-Stack .NET-Entwickler mit Leidenschaft für den Aufbau skalierbarer und zuverlässiger Webanwendungen. Meine Fähigkeiten umfassen C#, ASP.NET, React, TypeScript, Tailwind CSS und Azure-Dienste. Ich arbeite derzeit remote bei Brototype und trage zu End-to-End-Weblösungen bei. Ich habe einen Master of Science in Computer- und Systemwissenschaften und lebe in Schweden.',
      getInTouch: 'Kontakt Aufnehmen',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      searchingFor: 'Suche nach Remote- oder Hybrid-Möglichkeiten.',
    },
    // Experience
    experience: {
      title: 'Erfahrung',
      loading: 'Lädt...',
    },
    // Skills
    skills: {
      title: 'Tech Stack',
    },
    // Projects
    projects: {
      title: 'Projekte',
      publications: 'Veröffentlichungen',
      viewLive: 'Live Ansehen',
      viewCode: 'Code Ansehen',
      viewPublication: 'Publikation Ansehen',
    },
    // Footer
    footer: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-Mail',
      rights: 'Alle Rechte vorbehalten.',
      views: 'AUFRUFE',
    },
  },
};

export function useTranslation(language) {
  return (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}
