## Problem
The court card page has ~12 places where suit names (Wands, Cups, etc.),
element names (Fire, Water, etc.), and English connectors ("of", "rank", "suit")
are rendered without translation. The Spanish locale shows English for all of these.

## Root cause
- `suitElements` and `rankElements` return English names in both locales
- No suit name translation map exists (Wands->Bastos, Cups->Copas, etc.)
- No element name translation map exists (Fire->Fuego, Water->Agua, etc.)
- The connector word "of" is hardcoded in string templates
- The elemental combination paragraph (lines 319-323) is hardcoded English
  even though `courtPage` i18n strings already exist for it

## Affected locations in page.js
1. Index grid: suit headers (suit name + element name)
2. Index grid: card buttons (displayName + subtext use "of" and untranslated names)
3. Detail - Names box: "{rank} of {suit}" 
4. Detail - Elemental Formula box: "{rankEl} of {suitEl}", "{rankEl} rank . {suitEl} suit"
5. Detail - Suit box: raw suit name
6. Detail - Suit Element box: raw element name
7. Detail - Rank Element box: raw element name
8. Detail - Elemental Combination box: hardcoded English paragraph

## Solution
- Add `suitNames` and `elementNames` translation maps to court data for both locales
- Use i18n connector ("of"/"de") from UI strings
- Wire up existing `courtPage` i18n strings for the elemental combination text
- Keep English keys internally for style lookups (`elementStyles[suitEl]` stays as-is)
