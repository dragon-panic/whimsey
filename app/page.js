'use client';

import { useState, useEffect, useRef } from 'react';
import { getDecan } from '../utils/tarotCalculations';
import { zodiacSymbols, planetSymbols } from '../utils/astrologicalSymbols';
import { zodiacDescriptions } from '../utils/zodiacDescriptions';
import { planetDescriptions } from '../utils/planetDescriptions';
import { decans } from '../utils/decans';
import { cardTitles, suitDescriptions, numberMeanings } from '../utils/cardTitles';
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

  // Define the element for each zodiac sign
  const zodiacElements = {
    'Aries': { element: 'Fire', suit: 'Wands' },
    'Leo': { element: 'Fire', suit: 'Wands' },
    'Sagittarius': { element: 'Fire', suit: 'Wands' },
    'Taurus': { element: 'Earth', suit: 'Pentacles' },
    'Virgo': { element: 'Earth', suit: 'Pentacles' },
    'Capricorn': { element: 'Earth', suit: 'Pentacles' },
    'Gemini': { element: 'Air', suit: 'Swords' },
    'Libra': { element: 'Air', suit: 'Swords' },
    'Aquarius': { element: 'Air', suit: 'Swords' },
    'Cancer': { element: 'Water', suit: 'Cups' },
    'Scorpio': { element: 'Water', suit: 'Cups' },
    'Pisces': { element: 'Water', suit: 'Cups' }
  };

  // Group zodiac signs by element
  const elementGroups = {
    'Fire': ['Aries', 'Leo', 'Sagittarius'],
    'Earth': ['Taurus', 'Virgo', 'Capricorn'],
    'Air': ['Gemini', 'Libra', 'Aquarius'],
    'Water': ['Cancer', 'Scorpio', 'Pisces']
  };

  // Element colors and styling
  const elementStyles = {
    'Fire': {
      borderColor: 'border-red-400',
      headerBg: 'bg-red-100',
      textColor: 'text-red-800',
      icon: '🔥',
      description: 'Energy, passion, and creativity',
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
      description: 'Stability, practicality, and material world',
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
      description: 'Intellect, communication, and ideas',
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
      description: 'Emotions, intuition, and relationships',
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
        <h1 className="text-5xl font-bold text-center mb-12 accent-text">
          Whimsey Tarot
        </h1>

        <div className="mb-8">
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Astrological Signs by Element</h2>
            <p className="text-sm opacity-80">
              The twelve zodiac signs are grouped into four elements, each corresponding to a tarot suit.
              Each sign contains three decans, represented by the numbered cards of their respective suit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(elementGroups).map(([element, signs]) => (
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
                    Suit: {signs[0] ? zodiacElements[signs[0]].suit : ''}
                  </p>
                  <p className={`text-xs ${elementStyles[element].textColor} mt-1 opacity-70`}>
                    {elementStyles[element].description}
                  </p>
                </div>
                <div className="space-y-6 mt-6">
                  {signs.map(sign => (
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

                  <div className="space-y-4">
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
                      <p className="text-xl font-medium flex items-center gap-3 mt-1">
                        <span className="symbol text-3xl" title={rulingPlanet}>
                          {planetSymbols[rulingPlanet]}
                        </span>
                        {rulingPlanet}
                      </p>
                      <p className="text-sm mt-2 opacity-80 leading-snug">
                        {planetDescriptions[rulingPlanet]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-left space-y-6">
                  <div>
                    <h3 className="text-3xl font-medium accent-text">{selectedDecan.card}</h3>
                    <p className="text-2xl mt-2 opacity-90">{cardTitles[selectedDecan.card].title}</p>
                  </div>

                  <div className="info-box rounded-xl p-6">
                    <p className="text-sm uppercase tracking-wider opacity-70">Card Meaning</p>
                    <p className="text-sm mt-2 opacity-80 leading-snug">
                      {cardTitles[selectedDecan.card].description}
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
    </main>
  );
} 