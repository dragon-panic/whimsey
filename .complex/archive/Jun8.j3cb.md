## Task
Add two new exports to both `utils/court.js` and `i18n/content/es/court.js`:

### English (utils/court.js)
```js
export const suitNames = {
  Wands: 'Wands', Cups: 'Cups', Swords: 'Swords', Pentacles: 'Pentacles'
};
export const elementNames = {
  Fire: 'Fire', Water: 'Water', Air: 'Air', Earth: 'Earth'
};
```

### Spanish (i18n/content/es/court.js)
```js
export const suitNames = {
  Wands: 'Bastos', Cups: 'Copas', Swords: 'Espadas', Pentacles: 'Oros'
};
export const elementNames = {
  Fire: 'Fuego', Water: 'Agua', Air: 'Aire', Earth: 'Tierra'
};
```

Also add a connector to UI strings:
- en.json: `"courtPage.of": "of"`
- es.json: `"courtPage.of": "de"`

## Acceptance criteria
- Maps keyed by English internal keys, values are display strings
- English maps are identity (key === value)
- Spanish maps have correct translations
