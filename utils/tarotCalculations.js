// Zodiac signs and their corresponding dates
const zodiacDates = [
  { sign: 'Aries', start: '03-21', end: '04-19' },
  { sign: 'Taurus', start: '04-20', end: '05-20' },
  { sign: 'Gemini', start: '05-21', end: '06-20' },
  { sign: 'Cancer', start: '06-21', end: '07-22' },
  { sign: 'Leo', start: '07-23', end: '08-22' },
  { sign: 'Virgo', start: '08-23', end: '09-22' },
  { sign: 'Libra', start: '09-23', end: '10-22' },
  { sign: 'Scorpio', start: '10-23', end: '11-21' },
  { sign: 'Sagittarius', start: '11-22', end: '12-21' },
  { sign: 'Capricorn', start: '12-22', end: '01-19' },
  { sign: 'Aquarius', start: '01-20', end: '02-18' },
  { sign: 'Pisces', start: '02-19', end: '03-20' }
];

import { decans } from './decans.js';

export function getZodiacSign(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const mmdd = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  for (const zodiac of zodiacDates) {
    if (zodiac.sign === 'Capricorn') {
      // Special case for Capricorn (crosses year boundary)
      if (mmdd >= zodiac.start || mmdd <= zodiac.end) {
        return zodiac.sign;
      }
    } else {
      if (mmdd >= zodiac.start && mmdd <= zodiac.end) {
        return zodiac.sign;
      }
    }
  }
  return null;
}

export function getDecan(date) {
  const sign = getZodiacSign(date);
  if (!sign) return null;

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const mmdd = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  // Find the matching decan based on the date
  const decan = decans.find(d => 
    d.sign === sign && 
    ((sign === 'Capricorn' && (mmdd >= d.startDate || mmdd <= d.endDate)) || 
     (sign !== 'Capricorn' && mmdd >= d.startDate && mmdd <= d.endDate))
  );

  if (!decan) return null;

  return {
    name: decan.card,
    planet: decan.planet,
    zodiacSign: sign
  };
}

export function getTarotCardImage(cardName) {
  // Convert card name to CSS class name format
  return `card-${cardName.toLowerCase().replace(/ /g, '-')}`;
} 