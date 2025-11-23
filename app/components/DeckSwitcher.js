'use client';

import { useDeck } from '../contexts/DeckContext';

export default function DeckSwitcher() {
  const { deck, switchDeck } = useDeck();

  return (
    <div className="deck-switcher">
      <button
        onClick={() => switchDeck('rws')}
        className={`deck-button ${deck === 'rws' ? 'deck-button-active' : ''}`}
        title="Rider-Waite-Smith deck"
      >
        RWS
      </button>
      <button
        onClick={() => switchDeck('thoth')}
        className={`deck-button ${deck === 'thoth' ? 'deck-button-active' : ''}`}
        title="Thoth deck"
      >
        Thoth
      </button>
    </div>
  );
}

