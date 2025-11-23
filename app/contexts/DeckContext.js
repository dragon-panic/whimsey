'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const DeckContext = createContext();

export function DeckProvider({ children }) {
  const [deck, setDeck] = useState('rws');

  useEffect(() => {
    const savedDeck = localStorage.getItem('tarot-deck');
    if (savedDeck) {
      setDeck(savedDeck);
    }
  }, []);

  const switchDeck = (newDeck) => {
    setDeck(newDeck);
    localStorage.setItem('tarot-deck', newDeck);
    
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-deck', newDeck);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-deck', deck);
    }
  }, [deck]);

  return (
    <DeckContext.Provider value={{ deck, switchDeck }}>
      {children}
    </DeckContext.Provider>
  );
}

export function useDeck() {
  const context = useContext(DeckContext);
  if (context === undefined) {
    throw new Error('useDeck must be used within a DeckProvider');
  }
  return context;
}

