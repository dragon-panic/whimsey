'use client';

import { useLocale } from '../app/contexts/LocaleContext';
import en from './ui/en.json';
import es from './ui/es.json';

const dictionaries = { en, es };

export function useT() {
  const locale = useLocale();
  return dictionaries[locale] || dictionaries.en;
}
