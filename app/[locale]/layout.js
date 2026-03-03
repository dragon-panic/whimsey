import { locales, defaultLocale } from '../../i18n/config';
import { LocaleProvider } from '../contexts/LocaleContext';
import { DeckProvider } from '../contexts/DeckContext';
import Navigation from '../components/Navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const { locale } = params;
  const titles = {
    en: 'Whimsey Tarot - Golden Dawn Study',
    es: 'Whimsey Tarot - Estudio de la Golden Dawn',
  };
  const descriptions = {
    en: 'Study the Golden Dawn system through tarot, astrology, and planetary correspondences',
    es: 'Estudia el sistema de la Golden Dawn a través del tarot, la astrología y las correspondencias planetarias',
  };
  return {
    title: titles[locale] || titles[defaultLocale],
    description: descriptions[locale] || descriptions[defaultLocale],
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  return (
    <LocaleProvider locale={locale}>
      <DeckProvider>
        <Navigation />
        {children}
      </DeckProvider>
    </LocaleProvider>
  );
}
