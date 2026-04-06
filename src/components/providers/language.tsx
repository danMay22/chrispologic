'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';
interface LanguageContextType { language: Language; setLanguage: (l: Language) => void; t: (k: string) => string; }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.aboutUs': 'About Us', 'nav.faq': 'FAQ', 'nav.services': 'Services',
    'home.welcome': 'Welcome to Reality Church Worship',
    'home.subtitle': 'A dynamic multicultural church based in Midrand, South Africa.',
    'home.joinUs': 'Join Us', 'home.learnMore': 'Learn More',
    'banner.message': '🙌 Join us this Sunday at 9:00 AM & 11:00 AM — Reality Church Worship, Midrand.',
    'banner.cta': 'View service times →',
    'footer.description': 'A dynamic multicultural church based in Midrand, South Africa.',
    'footer.rights': '© 2023 designed by', 'footer.terms': 'Terms and Conditions & Privacy Policy',
    'footer.mission': 'Our Mission', 'footer.serviceTimes': 'Service Times',
    'footer.tithe': 'Tithe & Donation', 'footer.invite': 'Invite a friend',
    'common.readMore': 'Read More', 'common.close': 'Close',
  },
  fr: {
    'nav.aboutUs': 'À Propos', 'nav.faq': 'FAQ', 'nav.services': 'Services',
    'home.welcome': 'Bienvenue à Reality Church Worship',
    'home.subtitle': 'Une église multiculturelle dynamique basée à Midrand, Afrique du Sud.',
    'home.joinUs': 'Rejoignez-nous', 'home.learnMore': 'En Savoir Plus',
    'banner.message': '🙌 Rejoignez-nous ce dimanche à 9h00 & 11h00 — Reality Church Worship, Midrand.',
    'banner.cta': 'Voir les horaires →',
    'footer.description': 'Une église multiculturelle dynamique basée à Midrand, Afrique du Sud.',
    'footer.rights': '© 2023 conçu par', 'footer.terms': 'Conditions Générales & Confidentialité',
    'footer.mission': 'Notre Mission', 'footer.serviceTimes': 'Horaires des Services',
    'footer.tithe': 'Dîme & Don', 'footer.invite': 'Inviter un ami',
    'common.readMore': 'Lire Plus', 'common.close': 'Fermer',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('rcw-lang') as Language;
    if (stored === 'en' || stored === 'fr') setLanguageState(stored);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('rcw-lang', lang);
  };

  const t = (key: string) => (translations[language] as Record<string, string>)[key] || key;

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
