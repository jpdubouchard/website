export const languages = { en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

export const ui = {
  en: {
    'site.name': 'JP DuBouchard',
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.label': 'Main',
    'lang.switch': 'Français',
    'lang.switchLabel': 'Lire cette page en français',
    'theme.toDark': 'Switch to dark mode',
    'theme.toLight': 'Switch to light mode',
    'footer.links': 'Elsewhere',
    'home.title': 'Résumé',
    'home.contact': 'Contact me',
    'home.download': 'Download résumé (PDF)',
    'home.about': 'About',
    'home.experience': 'Experience',
    'home.skills': 'Skills',
    'home.education': 'Education and certifications',
    'home.certifications': 'Certifications',
    'home.present': 'Present',
    'contact.title': 'Contact',
    'contact.placeholder': "A contact form is coming soon. In the meantime, you can reach me on LinkedIn.",
  },
  fr: {
    'site.name': 'JP DuBouchard',
    'nav.home': 'Accueil',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.label': 'Principal',
    'lang.switch': 'English',
    'lang.switchLabel': 'Read this page in English',
    'theme.toDark': 'Passer au mode sombre',
    'theme.toLight': 'Passer au mode clair',
    'footer.links': 'Ailleurs',
    'home.title': 'CV',
    'home.contact': 'Me contacter',
    'home.download': 'Télécharger le CV (PDF)',
    'home.about': 'À propos',
    'home.experience': 'Expérience',
    'home.skills': 'Compétences',
    'home.education': 'Formation et certifications',
    'home.certifications': 'Certifications',
    'home.present': 'Aujourd’hui',
    'contact.title': 'Contact',
    'contact.placeholder': "Un formulaire de contact arrive bientôt. D’ici là, vous pouvez me joindre sur LinkedIn.",
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

/** Résumé PDF per language, built from the same content by scripts/build-pdfs.mjs */
export const pdfs = {
  en: '/en/JP-DuBouchard-Resume.pdf',
  fr: '/fr/JP-DuBouchard-CV.pdf',
} as const;

export const links = {
  linkedin: 'https://www.linkedin.com/in/jpdubouchard/',
  github: 'https://github.com/jpdubouchard',
};

/** Same page in the other language: /en/contact/ -> /fr/contact/ */
export function swapLang(pathname: string, to: Lang): string {
  return pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${to}`);
}
