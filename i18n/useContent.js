'use client';

import { useLocale } from '../app/contexts/LocaleContext';

import * as cardsEn from '../utils/cards';
import * as astrologyEn from '../utils/astrology';
import * as planetsEn from '../utils/planets';
import * as signsEn from '../utils/signs';
import * as courtEn from '../utils/court';
import * as mbtiEn from '../utils/mbti';

import * as cardsEs from './content/es/cards';
import * as astrologyEs from './content/es/astrology';
import * as planetsEs from './content/es/planets';
import * as signsEs from './content/es/signs';
import * as courtEs from './content/es/court';
import * as mbtiEs from './content/es/mbti';

const content = {
  en: {
    cards: cardsEn,
    astrology: astrologyEn,
    planets: planetsEn,
    signs: signsEn,
    court: courtEn,
    mbti: mbtiEn,
  },
  es: {
    cards: cardsEs,
    astrology: astrologyEs,
    planets: planetsEs,
    signs: signsEs,
    court: courtEs,
    mbti: mbtiEs,
  },
};

function getContent(locale, key) {
  return content[locale]?.[key] || content.en[key];
}

export function useCards() {
  const locale = useLocale();
  return getContent(locale, 'cards');
}

export function useAstrology() {
  const locale = useLocale();
  return getContent(locale, 'astrology');
}

export function usePlanets() {
  const locale = useLocale();
  return getContent(locale, 'planets');
}

export function useSigns() {
  const locale = useLocale();
  return getContent(locale, 'signs');
}

export function useCourt() {
  const locale = useLocale();
  return getContent(locale, 'court');
}

export function useMbti() {
  const locale = useLocale();
  return getContent(locale, 'mbti');
}
