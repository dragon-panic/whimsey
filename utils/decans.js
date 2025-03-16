// Decans array containing date ranges, tarot cards, and planetary rulers for each decan
// Each decan is ruled by a planet according to the Golden Dawn system
// The assignments match the Golden Dawn decan rulerships

export const decans = [
  // Aries (Mars ruled)
  { sign: 'Aries', decan: 1, startDate: '03-21', endDate: '03-30', card: '2 of Wands', planet: 'Mars' },
  { sign: 'Aries', decan: 2, startDate: '03-31', endDate: '04-09', card: '3 of Wands', planet: 'Sun' },
  { sign: 'Aries', decan: 3, startDate: '04-10', endDate: '04-19', card: '4 of Wands', planet: 'Venus' },

  // Taurus
  { sign: 'Taurus', decan: 1, startDate: '04-20', endDate: '04-29', card: '5 of Pentacles', planet: 'Mercury' },
  { sign: 'Taurus', decan: 2, startDate: '04-30', endDate: '05-09', card: '6 of Pentacles', planet: 'Moon' },
  { sign: 'Taurus', decan: 3, startDate: '05-10', endDate: '05-20', card: '7 of Pentacles', planet: 'Saturn' },

  // Gemini
  { sign: 'Gemini', decan: 1, startDate: '05-21', endDate: '05-31', card: '8 of Swords', planet: 'Jupiter' },
  { sign: 'Gemini', decan: 2, startDate: '06-01', endDate: '06-10', card: '9 of Swords', planet: 'Mars' },
  { sign: 'Gemini', decan: 3, startDate: '06-11', endDate: '06-20', card: '10 of Swords', planet: 'Sun' },

  // Cancer
  { sign: 'Cancer', decan: 1, startDate: '06-21', endDate: '07-01', card: '2 of Cups', planet: 'Venus' },
  { sign: 'Cancer', decan: 2, startDate: '07-02', endDate: '07-11', card: '3 of Cups', planet: 'Mercury' },
  { sign: 'Cancer', decan: 3, startDate: '07-12', endDate: '07-22', card: '4 of Cups', planet: 'Moon' },

  // Leo
  { sign: 'Leo', decan: 1, startDate: '07-23', endDate: '08-01', card: '5 of Wands', planet: 'Saturn' },
  { sign: 'Leo', decan: 2, startDate: '08-02', endDate: '08-11', card: '6 of Wands', planet: 'Jupiter' },
  { sign: 'Leo', decan: 3, startDate: '08-12', endDate: '08-22', card: '7 of Wands', planet: 'Mars' },

  // Virgo
  { sign: 'Virgo', decan: 1, startDate: '08-23', endDate: '09-01', card: '8 of Pentacles', planet: 'Sun' },
  { sign: 'Virgo', decan: 2, startDate: '09-02', endDate: '09-11', card: '9 of Pentacles', planet: 'Venus' },
  { sign: 'Virgo', decan: 3, startDate: '09-12', endDate: '09-22', card: '10 of Pentacles', planet: 'Mercury' },

  // Libra
  { sign: 'Libra', decan: 1, startDate: '09-23', endDate: '10-02', card: '2 of Swords', planet: 'Moon' },
  { sign: 'Libra', decan: 2, startDate: '10-03', endDate: '10-12', card: '3 of Swords', planet: 'Saturn' },
  { sign: 'Libra', decan: 3, startDate: '10-13', endDate: '10-22', card: '4 of Swords', planet: 'Jupiter' },

  // Scorpio
  { sign: 'Scorpio', decan: 1, startDate: '10-23', endDate: '11-01', card: '5 of Cups', planet: 'Mars' },
  { sign: 'Scorpio', decan: 2, startDate: '11-02', endDate: '11-11', card: '6 of Cups', planet: 'Sun' },
  { sign: 'Scorpio', decan: 3, startDate: '11-12', endDate: '11-21', card: '7 of Cups', planet: 'Venus' },

  // Sagittarius
  { sign: 'Sagittarius', decan: 1, startDate: '11-22', endDate: '12-01', card: '8 of Wands', planet: 'Mercury' },
  { sign: 'Sagittarius', decan: 2, startDate: '12-02', endDate: '12-11', card: '9 of Wands', planet: 'Moon' },
  { sign: 'Sagittarius', decan: 3, startDate: '12-12', endDate: '12-21', card: '10 of Wands', planet: 'Saturn' },

  // Capricorn
  { sign: 'Capricorn', decan: 1, startDate: '12-22', endDate: '12-31', card: '2 of Pentacles', planet: 'Jupiter' },
  { sign: 'Capricorn', decan: 2, startDate: '01-01', endDate: '01-09', card: '3 of Pentacles', planet: 'Mars' },
  { sign: 'Capricorn', decan: 3, startDate: '01-10', endDate: '01-19', card: '4 of Pentacles', planet: 'Sun' },

  // Aquarius
  { sign: 'Aquarius', decan: 1, startDate: '01-20', endDate: '01-29', card: '5 of Swords', planet: 'Venus' },
  { sign: 'Aquarius', decan: 2, startDate: '01-30', endDate: '02-08', card: '6 of Swords', planet: 'Mercury' },
  { sign: 'Aquarius', decan: 3, startDate: '02-09', endDate: '02-18', card: '7 of Swords', planet: 'Moon' },

  // Pisces
  { sign: 'Pisces', decan: 1, startDate: '02-19', endDate: '02-28', card: '8 of Cups', planet: 'Saturn' },
  { sign: 'Pisces', decan: 2, startDate: '03-01', endDate: '03-10', card: '9 of Cups', planet: 'Jupiter' },
  { sign: 'Pisces', decan: 3, startDate: '03-11', endDate: '03-20', card: '10 of Cups', planet: 'Mars' }
]; 