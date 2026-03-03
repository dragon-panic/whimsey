'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from '../contexts/LocaleContext';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    localStorage.setItem('whimsey-locale', newLocale);
    router.push(`/${newLocale}${pathWithoutLocale}${hash}`);
  };

  return (
    <div className="deck-switcher">
      <button
        onClick={() => switchLocale('en')}
        className={`deck-button ${locale === 'en' ? 'deck-button-active' : ''}`}
        title="English"
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`deck-button ${locale === 'es' ? 'deck-button-active' : ''}`}
        title="Español"
      >
        ES
      </button>
    </div>
  );
}
