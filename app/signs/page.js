'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { zodiacSymbols, zodiacDescriptions, zodiacElements, elements } from '../../utils/astrology';
import { planetSymbols, planetsData } from '../../utils/planets';
import { signsCardData, signsModality, modalityDescriptions, signsRulingPlanet, signsDates, numerologyMeanings } from '../../utils/signs';

function reduceNumber(n) {
  while (n > 9) {
    n = String(n).split('').reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}
import styles from '../tarot-sprites.module.scss';

const signsList = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

function getCurrentSign() {
  const today = new Date();
  const month = today.getMonth() + 1; // 1-12
  const day = today.getDate();
  const md = month * 100 + day;

  if (md >= 321 && md <= 419) return 'Aries';
  if (md >= 420 && md <= 520) return 'Taurus';
  if (md >= 521 && md <= 620) return 'Gemini';
  if (md >= 621 && md <= 722) return 'Cancer';
  if (md >= 723 && md <= 822) return 'Leo';
  if (md >= 823 && md <= 922) return 'Virgo';
  if (md >= 923 && md <= 1022) return 'Libra';
  if (md >= 1023 && md <= 1121) return 'Scorpio';
  if (md >= 1122 && md <= 1221) return 'Sagittarius';
  if (md >= 1222 || md <= 119) return 'Capricorn';
  if (md >= 120 && md <= 218) return 'Aquarius';
  return 'Pisces';
}

const elementStyles = {
  'Fire': {
    borderColor: 'border-red-400',
    headerBg: 'bg-red-100',
    textColor: 'text-red-800',
    icon: '🔥',
    selectedBg: 'bg-red-500',
    hoverBg: 'hover:bg-red-100/20',
    ringColor: 'ring-red-400',
    glowBg: 'bg-red-400/20'
  },
  'Earth': {
    borderColor: 'border-green-400',
    headerBg: 'bg-green-100',
    textColor: 'text-green-800',
    icon: '🌱',
    selectedBg: 'bg-green-500',
    hoverBg: 'hover:bg-green-100/20',
    ringColor: 'ring-green-400',
    glowBg: 'bg-green-400/20'
  },
  'Air': {
    borderColor: 'border-yellow-400',
    headerBg: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    icon: '💨',
    selectedBg: 'bg-yellow-500',
    hoverBg: 'hover:bg-yellow-100/20',
    ringColor: 'ring-yellow-400',
    glowBg: 'bg-yellow-400/20'
  },
  'Water': {
    borderColor: 'border-blue-400',
    headerBg: 'bg-blue-100',
    textColor: 'text-blue-800',
    icon: '💧',
    selectedBg: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-100/20',
    ringColor: 'ring-blue-400',
    glowBg: 'bg-blue-400/20'
  }
};

export default function SignsPage() {
  const [selectedSign, setSelectedSign] = useState(null);
  const cardDescriptionRef = useRef(null);

  const getSignFromHash = () => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash.slice(1);
    if (!hash) return null;
    const normalized = hash.charAt(0).toUpperCase() + hash.slice(1).toLowerCase();
    return signsList.includes(normalized) ? normalized : null;
  };

  const updateUrlHash = (sign) => {
    if (typeof window === 'undefined') return;
    window.history.pushState(null, '', `#${sign.toLowerCase()}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const signFromHash = getSignFromHash();
      if (signFromHash) {
        setSelectedSign(signFromHash);
        cardDescriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const signFromHash = getSignFromHash();
    if (signFromHash) {
      setSelectedSign(signFromHash);
    } else {
      const current = getCurrentSign();
      setSelectedSign(current);
      updateUrlHash(current);
    }
  }, []);

  const handleSignClick = (sign) => {
    setSelectedSign(sign);
    updateUrlHash(sign);
    setTimeout(() => {
      cardDescriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (!selectedSign) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const cardData = signsCardData[selectedSign];
  const element = zodiacElements[selectedSign].element;
  const rulingPlanet = signsRulingPlanet[selectedSign];
  const modality = signsModality[selectedSign];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl font-bold text-center accent-text">
            Whimsey Tarot
          </h1>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Major Arcana by Zodiac Sign</h2>
            <p className="text-sm opacity-80">
              Each of the twelve zodiac signs is attributed a Major Arcana card in the Golden Dawn system.
              These trump cards embody the archetypal qualities of their corresponding signs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(elements).map(([el, data]) => (
              <div
                key={el}
                className={`border-2 ${elementStyles[el].borderColor} rounded-lg p-4 shadow-md transition-all hover:shadow-lg`}
              >
                <div className={`text-center mb-4 ${elementStyles[el].headerBg} -m-4 p-4 rounded-t-lg border-b ${elementStyles[el].borderColor}`}>
                  <h2 className={`text-xl font-bold ${elementStyles[el].textColor} flex items-center justify-center gap-2`}>
                    <span>{elementStyles[el].icon}</span>
                    {el}
                    <span>{elementStyles[el].icon}</span>
                  </h2>
                  <p className={`text-xs ${elementStyles[el].textColor} mt-1 opacity-70`}>
                    {data.description}
                  </p>
                </div>
                <div className="space-y-3 mt-6">
                  {data.signs.map(sign => {
                    const sd = signsCardData[sign];
                    const isSelected = selectedSign === sign;
                    return (
                      <button
                        key={sign}
                        onClick={() => handleSignClick(sign)}
                        className={`w-full sign-button p-3 rounded-lg transition-all duration-300 relative text-left ${
                          isSelected
                            ? `${elementStyles[el].selectedBg} text-white shadow-lg ring-2 ${elementStyles[el].ringColor} ring-offset-2`
                            : `${elementStyles[el].hoverBg}`
                        }`}
                      >
                        {isSelected && (
                          <div className={`absolute -inset-0.5 ${elementStyles[el].glowBg} rounded-lg blur-sm -z-10`} />
                        )}
                        <div className="flex items-center gap-3">
                          <span className="symbol text-2xl" title={sign}>
                            {zodiacSymbols[sign]}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">{sign}</div>
                            <div className={`text-xs truncate ${isSelected ? 'opacity-80' : 'opacity-60'}`}>
                              {sd.romanNumeral} · {sd.majorArcana}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedSign && (
          <div className="text-center" ref={cardDescriptionRef}>
            <div className="card-container rounded-xl p-8 inline-block max-w-4xl">

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl">
                    <div className={styles['tarot-card-container']}>
                      <div className={`${styles['tarot-card']} ${styles[`card-${cardData.cardKey}`]}`} />
                    </div>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Names</p>
                    <h3 className="text-2xl font-medium accent-text mt-2">
                      {cardData.romanNumeral} — {cardData.majorArcana}
                    </h3>
                    <p className="text-xl mt-2 opacity-90">{cardData.title}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Card Meaning</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {cardData.description}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Jungian Interpretation</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {cardData.jungian}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Power Gods (Red)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {cardData.powerGods}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Traditional (Amber)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {cardData.traditional}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Modern (Orange)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {cardData.modern}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Post-Modern (Green)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {cardData.postModern}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Meta-Modern (Teal)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {cardData.metaModern}
                    </p>
                  </div>
                </div>

                <div className="text-left space-y-6">
                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Zodiac Sign</p>
                    <p className="text-xl font-medium flex items-center gap-3 mt-1">
                      <span className="symbol text-3xl" title={selectedSign}>
                        {zodiacSymbols[selectedSign]}
                      </span>
                      {selectedSign}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {zodiacDescriptions[selectedSign]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Dates</p>
                    <p className="text-xl font-medium mt-1">
                      {signsDates[selectedSign]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Numerology</p>
                    <p className="text-xl font-medium mt-1">
                      {cardData.arcanaNumber !== reduceNumber(cardData.arcanaNumber)
                        ? `${cardData.arcanaNumber} → ${reduceNumber(cardData.arcanaNumber)}`
                        : cardData.arcanaNumber}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {numerologyMeanings[reduceNumber(cardData.arcanaNumber)]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Ruling Planet</p>
                    <Link
                      href={`/planets#${rulingPlanet.toLowerCase()}`}
                      className="text-xl font-medium flex items-center gap-3 mt-1 hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <span className="symbol text-3xl" title={rulingPlanet}>
                        {planetSymbols[rulingPlanet]}
                      </span>
                      {rulingPlanet}
                    </Link>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {planetsData[rulingPlanet]?.description}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Modality</p>
                    <p className="text-xl font-medium mt-1">
                      {modality}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {modalityDescriptions[modality]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Element</p>
                    <p className="text-xl font-medium mt-1">
                      {element}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {elements[element]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-16 pb-8 text-center">
        <a
          href="https://github.com/dragon-panic/whimsey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </footer>
    </main>
  );
}
