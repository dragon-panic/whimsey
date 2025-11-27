'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getDecan } from '../utils/calculations';
import { zodiacSymbols, zodiacDescriptions, zodiacElements, elements } from '../utils/astrology';
import { planetSymbols, planetsData } from '../utils/planets';
import { decans } from '../utils/decans';
import { cardTitles, suitDescriptions, numberMeanings, jungianMeanings, developmentalMeanings } from '../utils/cards';
import styles from './tarot-sprites.module.scss';

export default function Home() {
  const [selectedDecan, setSelectedDecan] = useState(null);
  const cardDescriptionRef = useRef(null);
  
  // Group decans by zodiac sign
  const decansBySign = decans.reduce((acc, decan) => {
    if (!acc[decan.sign]) {
      acc[decan.sign] = [];
    }
    acc[decan.sign].push(decan);
    return acc;
  }, {});

  // Element colors and styling
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

  // Function to get decan from URL hash
  const getDecanFromHash = () => {
    if (typeof window === 'undefined') return null;
    
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (!hash) return null;

    const [sign, decanNum] = hash.split('-');
    if (!sign || !decanNum) return null;

    const normalizedSign = sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();
    const matchingDecans = decansBySign[normalizedSign];
    if (!matchingDecans) return null;

    return matchingDecans[parseInt(decanNum) - 1] || null;
  };

  // Function to update URL hash
  const updateUrlHash = (decan) => {
    if (typeof window === 'undefined') return;
    
    const decanIndex = decansBySign[decan.sign].findIndex(d => d.card === decan.card) + 1;
    const hash = `#${decan.sign.toLowerCase()}-${decanIndex}`;
    window.history.pushState(null, '', hash);
  };

  // Handle hash change events
  useEffect(() => {
    const handleHashChange = () => {
      const decanFromHash = getDecanFromHash();
      if (decanFromHash) {
        setSelectedDecan(decanFromHash);
        cardDescriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initial setup - check URL hash or set current date's decan
  useEffect(() => {
    const decanFromHash = getDecanFromHash();
    
    if (decanFromHash) {
      setSelectedDecan(decanFromHash);
    } else {
      const today = new Date();
      const currentDecan = getDecan(today);
      
      if (currentDecan) {
        const matchingDecan = decans.find(d => d.card === currentDecan.name);
        if (matchingDecan) {
          setSelectedDecan(matchingDecan);
          updateUrlHash(matchingDecan);
        } else {
          setSelectedDecan(decans[0]);
          updateUrlHash(decans[0]);
        }
      } else {
        setSelectedDecan(decans[0]);
        updateUrlHash(decans[0]);
      }
    }
  }, []);

  const handleDecanClick = (decan) => {
    setSelectedDecan(decan);
    updateUrlHash(decan);
    setTimeout(() => {
      cardDescriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // If selectedDecan is null (during initial render), show loading or return null
  if (!selectedDecan) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Get the ruling planet for the selected decan after we've confirmed selectedDecan is not null
  const rulingPlanet = selectedDecan.planet;
  
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
            <h2 className="text-2xl font-semibold mb-2">Learn Your Lordly Title by Astrological Sign</h2>
            <p className="text-sm opacity-80">
              The twelve zodiac signs are grouped into four elements, each corresponding to a tarot suit.
              Each sign contains three decans, represented by the numbered cards of their respective suit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(elements).map(([element, data]) => (
              <div 
                key={element} 
                className={`border-2 ${elementStyles[element].borderColor} rounded-lg p-4 shadow-md transition-all hover:shadow-lg`}
              >
                <div className={`text-center mb-4 ${elementStyles[element].headerBg} -m-4 p-4 rounded-t-lg border-b ${elementStyles[element].borderColor}`}>
                  <h2 className={`text-xl font-bold ${elementStyles[element].textColor} flex items-center justify-center gap-2`}>
                    <span>{elementStyles[element].icon}</span>
                    {element}
                    <span>{elementStyles[element].icon}</span>
                  </h2>
                  <p className={`text-sm ${elementStyles[element].textColor} opacity-80 font-medium`}>
                    Suit: {data.signs[0] ? zodiacElements[data.signs[0]].suit : ''}
                  </p>
                  <p className={`text-xs ${elementStyles[element].textColor} mt-1 opacity-70`}>
                    {data.description}
                  </p>
                </div>
                <div className="space-y-6 mt-6">
                  {data.signs.map(sign => (
                    <div key={sign} className="flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="symbol text-2xl" title={sign}>
                          {zodiacSymbols[sign]}
                        </span>
                        <span className="font-medium">{sign}</span>
                      </div>
                      <div className="flex gap-2">
                        {decansBySign[sign]?.map((decan) => (
                          <button
                            key={decan.card}
                            onClick={() => handleDecanClick(decan)}
                            className={`decan-button p-2 rounded-lg transition-all duration-300 relative ${
                              selectedDecan.card === decan.card
                                ? `${elementStyles[element].selectedBg} text-white scale-110 shadow-lg z-10 ring-2 ${elementStyles[element].ringColor} ring-offset-2`
                                : `${elementStyles[element].hoverBg}`
                            }`}
                          >
                            {selectedDecan.card === decan.card && (
                              <div className={`absolute -inset-0.5 ${elementStyles[element].glowBg} rounded-lg blur-sm -z-10`} />
                            )}
                            <div className="text-base font-bold mb-0.5">
                              {decan.card.split(' ')[0]}
                            </div>
                            <div className="text-lg font-medium mb-1" title={decan.planet}>
                              {planetSymbols[decan.planet]}
                            </div>
                            <div className="text-[10px] opacity-70 leading-tight">
                              <div>{decan.startDate}</div>
                              <div>{decan.endDate}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedDecan && (
          <div className="text-center" ref={cardDescriptionRef}>
            <div className="card-container rounded-xl p-8 inline-block max-w-4xl">
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl">
                    <div className={styles['tarot-card-container']}>
                      <div className={`${styles['tarot-card']} ${styles[`card-${selectedDecan.card.toLowerCase().replace(/ /g, '-')}`]}`} />
                    </div>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Names</p>
                    <h3 className="text-2xl font-medium accent-text mt-2">{selectedDecan.card}</h3>
                    <p className="text-xl mt-2 opacity-90">{cardTitles[selectedDecan.card].title}</p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Card Meaning</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {cardTitles[selectedDecan.card].description}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Jungian Interpretation</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {jungianMeanings[selectedDecan.card]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Power Gods (Red)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {developmentalMeanings[selectedDecan.card]?.powerGods}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Traditional (Amber)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {developmentalMeanings[selectedDecan.card]?.traditional}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Modern (Orange)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {developmentalMeanings[selectedDecan.card]?.modern}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Post-Modern (Green)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {developmentalMeanings[selectedDecan.card]?.postModern}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6 text-left">
                    <p className="text-sm uppercase tracking-wider opacity-70">Meta-Modern (Teal)</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug italic">
                      {developmentalMeanings[selectedDecan.card]?.metaModern}
                    </p>
                  </div>
                </div>

                <div className="text-left space-y-6">
                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Zodiac Sign</p>
                    <p className="text-xl font-medium flex items-center gap-3 mt-1">
                      <span className="symbol text-3xl" title={selectedDecan.sign}>
                        {zodiacSymbols[selectedDecan.sign]}
                      </span>
                      {selectedDecan.sign}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {zodiacDescriptions[selectedDecan.sign]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Governing Planet</p>
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
                    <p className="text-sm uppercase tracking-wider opacity-70">Number Significance</p>
                    <p className="text-xl font-medium flex items-center gap-3 mt-1">
                      {selectedDecan.card.split(' ')[0]}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {numberMeanings[selectedDecan.card.split(' ')[0]]}
                    </p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Suit Element</p>
                    <p className="text-xl font-medium flex items-center gap-3 mt-1">
                      {selectedDecan.card.split(' ').slice(-1)[0]}
                    </p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {suitDescriptions[selectedDecan.card.split(' ').slice(-1)[0]]}
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