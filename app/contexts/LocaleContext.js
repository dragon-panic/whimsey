'use client';

import { createContext, useContext, useEffect } from 'react';
import { defaultLocale } from '../../i18n/config';

const LocaleContext = createContext(defaultLocale);

export function LocaleProvider({ locale, children }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
