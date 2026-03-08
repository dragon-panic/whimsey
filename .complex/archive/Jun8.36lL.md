## Task
Update `app/[locale]/court/page.js` to use the new `suitNames`, `elementNames`
maps and the `courtPage.of` connector from i18n.

### Changes needed
1. Destructure `suitNames` and `elementNames` from `useCourt()`
2. Index grid suit headers: `{suitNames[suit]}` and `{elementNames[el]}`
3. Card buttons displayName: `{rankNames[deck][rank]} ${t.courtPage.of} ${suitNames[suit]}`
4. Card buttons subtext: `{elementNames[rankEl]} ${t.courtPage.of} ${elementNames[el]}`
5. Names box: use connector + suitNames
6. Elemental formula: use connector + elementNames
7. Suit/element display boxes: use elementNames/suitNames
8. Elemental combination paragraph: use existing courtPage i18n strings
   (elementOfElement, fireRankDescription, etc.) instead of hardcoded text

Keep English keys for internal lookups (elementStyles, CSS classes).

## Acceptance criteria
- Zero hardcoded English display strings on court page
- Spanish locale shows all text in Spanish
- English locale unchanged visually
- Build passes
