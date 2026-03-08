## Overview
Add a single `reversed` description field to every card (pip + court).
This gives each card a concise reversed-in-a-reading interpretation
without duplicating every lens.

## Scope
- 36 pip cards: add `reversedDescription` to `cardTitles` in utils/cards.js
- 16 court cards: add `reversed` field to `courtCardData` in utils/court.js
- Spanish translations for all 52 reversed descriptions
- Display Rx meaning in both the decan page (pips) and court page (court cards)

## Approach
- Reversed meanings should be 1-2 sentences, practical and reading-oriented
- Focus on blocked/shadow/excess expressions of the upright meaning
- Keep the tone consistent with existing card descriptions
