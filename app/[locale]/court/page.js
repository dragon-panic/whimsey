'use client';

import { useState, useEffect, useRef } from 'react';
import { useDeck } from '../../contexts/DeckContext';
import styles from '../../tarot-sprites.module.scss';
import { useT } from '../../../i18n/useTranslations';
import { useCourt, useAstrology, useMbti } from '../../../i18n/useContent';

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
  'Water': {
    borderColor: 'border-blue-400',
    headerBg: 'bg-blue-100',
    textColor: 'text-blue-800',
    icon: '💧',
    selectedBg: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-100/20',
    ringColor: 'ring-blue-400',
    glowBg: 'bg-blue-400/20'
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
  'Earth': {
    borderColor: 'border-green-400',
    headerBg: 'bg-green-100',
    textColor: 'text-green-800',
    icon: '🌱',
    selectedBg: 'bg-green-500',
    hoverBg: 'hover:bg-green-100/20',
    ringColor: 'ring-green-400',
    glowBg: 'bg-green-400/20'
  }
};

const suitSymbols = {
  Wands: '🪄',
  Cups: '🏆',
  Swords: '⚔️',
  Pentacles: '⭐'
};

export default function CourtPage() {
  const { deck } = useDeck();
  const t = useT();
  const { courtCardData, rankNames, rankElements, rankDescriptions, suitElements, suitOrder, rankOrder, suitNames, elementNames } = useCourt();
  const { elements } = useAstrology();
  const { mbtiTypes } = useMbti();
  const [selectedKey, setSelectedKey] = useState(null);
  const cardDescriptionRef = useRef(null);

  const getKeyFromHash = () => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash.slice(1);
    return courtCardData[hash] ? hash : null;
  };

  const updateUrlHash = (key) => {
    if (typeof window === 'undefined') return;
    window.history.pushState(null, '', `#${key}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const key = getKeyFromHash();
      if (key) {
        setSelectedKey(key);
        cardDescriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const key = getKeyFromHash();
    if (key) {
      setSelectedKey(key);
    } else {
      setSelectedKey('king-of-wands');
      updateUrlHash('king-of-wands');
    }
  }, []);

  const handleCardClick = (key) => {
    setSelectedKey(key);
    updateUrlHash(key);
    setTimeout(() => {
      cardDescriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (!selectedKey) {
    return <div className="min-h-screen flex items-center justify-center">{t.common?.loading || 'Loading...'}</div>;
  }

  const cardData = courtCardData[selectedKey];
  const suitEl = suitElements[cardData.suit];
  const rankEl = rankElements[cardData.rank];
  const deckRankName = rankNames[deck][cardData.rank];
  const altDeck = deck === 'rws' ? 'thoth' : 'rws';
  const altRankName = rankNames[altDeck][cardData.rank];
  const altDeckLabel = deck === 'rws' ? 'Thoth' : 'RWS';
  const of_ = t.courtPage?.of || 'of';
  const elementalFormula = `${elementNames[rankEl]} ${of_} ${elementNames[suitEl]}`;
  const es = elementStyles[suitEl];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl font-bold text-center accent-text">
            {t.common?.whimseyTarot || 'Whimsey Tarot'}
          </h1>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">{t.courtPage?.subtitle}</h2>
            <p className="text-sm opacity-80">
              {t.courtPage?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitOrder.map(suit => {
              const el = suitElements[suit];
              const style = elementStyles[el];
              return (
                <div
                  key={suit}
                  className={`border-2 ${style.borderColor} rounded-lg p-4 shadow-md transition-all hover:shadow-lg`}
                >
                  <div className={`text-center mb-4 ${style.headerBg} -m-4 p-4 rounded-t-lg border-b ${style.borderColor}`}>
                    <h2 className={`text-xl font-bold ${style.textColor} flex items-center justify-center gap-2`}>
                      <span>{suitSymbols[suit]}</span>
                      {suitNames[suit]}
                      <span>{style.icon}</span>
                    </h2>
                    <p className={`text-xs ${style.textColor} mt-1 opacity-70`}>
                      {elementNames[el]} · {elements[el]?.description}
                    </p>
                  </div>
                  <div className="space-y-3 mt-6">
                    {rankOrder.map(rank => {
                      const key = `${rank}-of-${suit.toLowerCase()}`;
                      const isSelected = selectedKey === key;
                      const cardMbti = courtCardData[key]?.mbti;
                      const of_ = t.courtPage?.of || 'of';
                      const displayName = `${rankNames[deck][rank]} ${of_} ${suitNames[suit]}`;
                      const subtext = `${elementNames[rankElements[rank]].toLowerCase()} ${of_} ${elementNames[el].toLowerCase()}`;
                      return (
                        <button
                          key={key}
                          onClick={() => handleCardClick(key)}
                          className={`w-full sign-button p-3 rounded-lg transition-all duration-300 relative text-left ${
                            isSelected
                              ? `${style.selectedBg} text-white shadow-lg ring-2 ${style.ringColor} ring-offset-2`
                              : `${style.hoverBg}`
                          }`}
                        >
                          {isSelected && (
                            <div className={`absolute -inset-0.5 ${style.glowBg} rounded-lg blur-sm -z-10`} />
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                              <div className="font-medium text-sm">{displayName}</div>
                              <div className={`text-xs ${isSelected ? 'opacity-80' : 'opacity-60'}`}>
                                {subtext}
                              </div>
                            </div>
                            {cardMbti && (
                              <span className={`text-xs font-mono font-semibold ${isSelected ? 'opacity-90' : 'opacity-50'}`}>
                                {cardMbti}
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedKey && cardData && (
          <div className="text-center" ref={cardDescriptionRef}>
            <div className="card-container rounded-xl p-8 inline-block max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">

                {/* Left column */}
                <div className="flex flex-col gap-6">
                  <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl">
                    <div className={styles['tarot-card-container']}>
                      <div className={`${styles['tarot-card']} ${styles[`card-${cardData.rank}-of-${cardData.suit.toLowerCase()}`]}`} />
                    </div>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.names}</p>
                    <h3 className="text-2xl font-medium accent-text mt-2">
                      {deckRankName} {of_} {suitNames[cardData.suit]}
                    </h3>
                    <p className="text-base mt-1 opacity-70">
                      {altRankName} {of_} {suitNames[cardData.suit]} <span className="text-sm opacity-60">({altDeckLabel})</span>
                    </p>
                    <p className="text-sm mt-2 opacity-60 italic">{cardData.title}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.elementalFormula}</p>
                    <p className="text-xl font-medium mt-1">{elementalFormula}</p>
                    <p className="text-sm mt-1 opacity-60">{elementNames[rankEl]} {t.labels?.rank?.toLowerCase()} · {elementNames[suitEl]} {t.labels?.suit?.toLowerCase()}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.cardMeaning}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">{cardData.description}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.jungianInterpretation}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">{cardData.jungian}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.powerGods}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">{cardData.powerGods}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.traditional}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">{cardData.traditional}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.modern}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">{cardData.modern}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.postModern}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">{cardData.postModern}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.metaModern}</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">{cardData.metaModern}</p>
                  </div>
                </div>

                {/* Right column */}
                <div className="text-left space-y-6">
                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.suit}</p>
                    <p className="text-xl font-medium flex items-center gap-3 mt-1">
                      <span className="text-2xl">{suitSymbols[cardData.suit]}</span>
                      {suitNames[cardData.suit]}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {elements[suitEl]?.description}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.rank}</p>
                    <p className="text-xl font-medium mt-1">
                      {rankNames.rws[cardData.rank]} <span className="opacity-50 text-sm">RWS</span>
                      &nbsp;·&nbsp;
                      {rankNames.thoth[cardData.rank]} <span className="opacity-50 text-sm">Thoth</span>
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {rankDescriptions[cardData.rank]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.suitElement}</p>
                    <p className="text-xl font-medium mt-1">
                      {elementStyles[suitEl].icon} {elementNames[suitEl]}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {elements[suitEl]?.description}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.rankElement}</p>
                    <p className="text-xl font-medium mt-1">
                      {elementStyles[rankEl].icon} {elementNames[rankEl]}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {elements[rankEl]?.description}
                    </p>
                  </div>

                  <div className={`info-box rounded-xl p-6 border-2 ${es.borderColor}`}>
                    <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.elementalCombination}</p>
                    <p className={`text-2xl font-bold mt-2 ${es.textColor}`}>
                      {elementalFormula}
                    </p>
                    <p className="text-sm mt-3 opacity-80 leading-snug">
                      {(t.courtPage?.elementOfElement || '')
                        .replace('{rankEl}', elementNames[rankEl])
                        .replace('{suitEl}', elementNames[suitEl])
                        .replace('{rankElLower}', elementNames[rankEl].toLowerCase())
                        .replace('{suitElLower}', elementNames[suitEl].toLowerCase())}
                      {rankEl === 'Fire' && ` ${t.courtPage?.fireRankDescription || ''}`}
                      {rankEl === 'Water' && ` ${t.courtPage?.waterRankDescription || ''}`}
                      {rankEl === 'Air' && ` ${t.courtPage?.airRankDescription || ''}`}
                      {rankEl === 'Earth' && ` ${t.courtPage?.earthRankDescription || ''}`}
                    </p>
                  </div>

                  {cardData.mbti && mbtiTypes[cardData.mbti] && (
                    <div className={`info-box rounded-xl p-6 border-2 ${es.borderColor}`}>
                      <p className="text-sm uppercase tracking-wider opacity-70">{t.labels?.mbtiType}</p>
                      <p className="text-2xl font-bold mt-2">
                        {cardData.mbti} <span className="text-base font-normal opacity-70">— {mbtiTypes[cardData.mbti].name}</span>
                      </p>
                      <p className="text-sm mt-1 opacity-60">{mbtiTypes[cardData.mbti].description}</p>
                      <p className="text-sm uppercase tracking-wider opacity-70 mt-4">{t.labels?.cognitiveStack}</p>
                      <p className="text-lg font-medium mt-1 tracking-wide">
                        {mbtiTypes[cardData.mbti].stack.join(' → ')}
                      </p>
                      <p className="text-sm uppercase tracking-wider opacity-70 mt-4">{t.labels?.mbtiCourtBridge}</p>
                      <p className="text-sm mt-1 opacity-80 leading-snug">{mbtiTypes[cardData.mbti].courtBridge}</p>
                    </div>
                  )}
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
          {t.common?.viewOnGithub || 'View on GitHub'}
        </a>
      </footer>
    </main>
  );
}
