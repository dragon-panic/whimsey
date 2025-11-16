'use client';

import Link from 'next/link';
import { getPlanetsInChaldeanOrder, planetSymbols, planetsData } from '../../utils/planets';
import { zodiacSymbols } from '../../utils/astrology';

export default function PlanetsPage() {
  const planets = getPlanetsInChaldeanOrder();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl font-bold text-center accent-text mb-2">
            ☽ The Chaldean Planetary Order ☉
          </h1>
          <p className="page-subtitle">
            From the Sphere of the Fixed Stars to the Sublunary Realm
          </p>
        </div>

        <div className="decorative-line"></div>

        <div className="mystical-table-container">
          <table className="mystical-table">
            <thead>
              <tr>
                <th>Planet</th>
                <th>Primary Meaning</th>
                <th>Poetic Pointer</th>
                <th>First Sign Ruled</th>
                <th>Influence on First Sign</th>
                <th>Second Sign Ruled</th>
                <th>Influence on Second Sign</th>
              </tr>
            </thead>
            <tbody>
              {planets.map((planet) => (
                <tr 
                  key={planet.name}
                  onClick={() => window.location.hash = planet.slug}
                  style={{ cursor: 'pointer' }}
                >
                  <td>
                    <a 
                      href={`#${planet.slug}`}
                      className="planet-name"
                    >
                      {planetSymbols[planet.name]} {planet.name}
                    </a>
                  </td>
                  <td className="primary-meaning">{planet.primaryMeaning}</td>
                  <td className="poetic">{planet.poeticPointer}</td>
                  {planet.signsRuled.length > 0 ? (
                    <>
                      <td className="sign-name">
                        {planet.signsRuled[0].sign}<br />
                        <span style={{ fontSize: '0.85em', opacity: 0.8 }}>
                          ({planet.signsRuled[0].mode})
                        </span>
                      </td>
                      <td className="influence">{planet.signsRuled[0].influence}</td>
                    </>
                  ) : (
                    <>
                      <td className="na-cell">N/A</td>
                      <td className="na-cell">—</td>
                    </>
                  )}
                  {planet.signsRuled.length > 1 ? (
                    <>
                      <td className="sign-name">
                        {planet.signsRuled[1].sign}<br />
                        <span style={{ fontSize: '0.85em', opacity: 0.8 }}>
                          ({planet.signsRuled[1].mode})
                        </span>
                      </td>
                      <td className="influence">{planet.signsRuled[1].influence}</td>
                    </>
                  ) : (
                    <>
                      <td className="na-cell">N/A</td>
                      <td className="na-cell">—</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="decorative-line"></div>

        <div className="text-center" style={{ color: '#8b7dd8', fontStyle: 'italic', marginTop: '2rem' }}>
          "As above, so below; as within, so without."<br />
          The Seven Sacred Wanderers in their celestial dance
        </div>

        <div className="mt-12 text-center mb-16">
          <p className="text-lg mb-6 opacity-80">
            Click on any planet to explore its detailed Golden Dawn correspondences
          </p>
        </div>

        {/* Detailed Planet Sections */}
        {planets.map((planet) => (
          <div key={planet.name} id={planet.slug} className="mb-24 scroll-mt-8">
            <div className="decorative-line mb-12"></div>
            
            {/* Planet Header */}
            <div className="text-center mb-12">
              <div className="symbol text-8xl mb-4" style={{ textShadow: '0 0 30px rgba(230, 184, 156, 0.6)' }}>
                {planet.symbol}
              </div>
              <h2 className="text-6xl font-bold accent-text mb-2">
                {planet.name}
              </h2>
              <p className="text-xl poetic mb-4">
                "{planet.poeticPointer}"
              </p>
              <p className="text-lg primary-meaning">
                {planet.primaryMeaning}
              </p>
            </div>

            <div className="decorative-line"></div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Core Attributes */}
                <div className="info-box rounded-xl p-6">
                  <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                    Core Attributes
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm opacity-70 uppercase tracking-wide">Chaldean Position:</span>
                      <p className="text-lg">
                        #{planet.chaldeanPosition} of 7 Sacred Wanderers
                      </p>
                    </div>
                    <div>
                      <span className="text-sm opacity-70 uppercase tracking-wide">Hebrew Letter:</span>
                      <p className="text-lg">{planet.hebrewLetter}</p>
                    </div>
                    <div>
                      <span className="text-sm opacity-70 uppercase tracking-wide">Number:</span>
                      <p className="text-lg">{planet.number}</p>
                    </div>
                    <div>
                      <span className="text-sm opacity-70 uppercase tracking-wide">Metal:</span>
                      <p className="text-lg">{planet.metal}</p>
                    </div>
                    <div>
                      <span className="text-sm opacity-70 uppercase tracking-wide">Day:</span>
                      <p className="text-lg">{planet.day}</p>
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="info-box rounded-xl p-6">
                  <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                    Colors
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm opacity-70">Queen Scale:</span>
                      <p className="text-lg">{planet.colors.queen}</p>
                    </div>
                    <div>
                      <span className="text-sm opacity-70">King Scale:</span>
                      <p className="text-lg">{planet.colors.king}</p>
                    </div>
                    <div>
                      <span className="text-sm opacity-70">Emperor Scale:</span>
                      <p className="text-lg">{planet.colors.emperor}</p>
                    </div>
                  </div>
                </div>

                {/* Magical Image */}
                <div className="info-box rounded-xl p-6">
                  <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                    Magical Image
                  </h3>
                  <p className="text-base italic opacity-90 leading-relaxed">
                    {planet.magicalImage}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Description */}
                <div className="info-box rounded-xl p-6">
                  <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                    Esoteric Meaning
                  </h3>
                  <p className="text-base opacity-90 leading-relaxed">
                    {planet.description}
                  </p>
                </div>

                {/* Signs Ruled */}
                <div className="info-box rounded-xl p-6">
                  <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                    Signs Ruled
                  </h3>
                  <div className="space-y-4">
                    {planet.signsRuled && planet.signsRuled.length > 0 ? (
                      planet.signsRuled.map((ruled, index) => (
                        <div key={index} className="border-l-2 pl-4" style={{ borderColor: 'rgba(230, 184, 156, 0.3)' }}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="symbol text-2xl">
                              {zodiacSymbols[ruled.sign]}
                            </span>
                            <span className="sign-name text-lg">
                              {ruled.sign}
                            </span>
                            <span className="text-sm opacity-60">
                              ({ruled.mode})
                            </span>
                          </div>
                          <p className="text-sm opacity-80 italic">
                            {ruled.influence}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm opacity-60">No signs ruled in traditional system</p>
                    )}
                  </div>
                </div>

                {/* Dignities */}
                <div className="info-box rounded-xl p-6">
                  <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                    Essential Dignities
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="opacity-70">Domicile:</span>
                      <span className="ml-2">
                        {planet.inDignity.domicile.map((sign, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 mr-2">
                            {zodiacSymbols[sign]} {sign}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div>
                      <span className="opacity-70">Exaltation:</span>
                      <span className="ml-2">
                        {zodiacSymbols[planet.inDignity.exaltation]} {planet.inDignity.exaltation}
                      </span>
                    </div>
                    <div>
                      <span className="opacity-70">Detriment:</span>
                      <span className="ml-2">
                        {planet.inDignity.detriment.map((sign, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 mr-2">
                            {zodiacSymbols[sign]} {sign}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div>
                      <span className="opacity-70">Fall:</span>
                      <span className="ml-2">
                        {zodiacSymbols[planet.inDignity.fall]} {planet.inDignity.fall}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarot Associations - Full Width */}
            <div className="mt-6 max-w-6xl mx-auto">
              <div className="info-box rounded-xl p-6">
                <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                  Tarot Associations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 primary-meaning">Major Arcana</h4>
                    <ul className="space-y-1">
                      {planet.tarotCards.major.map((card, index) => (
                        <li key={index} className="text-base opacity-90">
                          • {card}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 primary-meaning">Minor Arcana</h4>
                    <ul className="space-y-1">
                      {planet.tarotCards.minor.map((cardObj, index) => (
                        <li key={index} className="text-base opacity-90">
                          • <Link 
                              href={`/${cardObj.link}`}
                              className="hover:text-blue-300 transition-colors"
                            >
                              {cardObj.card} - {cardObj.title}
                            </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="mt-6 max-w-6xl mx-auto">
              <div className="info-box rounded-xl p-6">
                <h3 className="text-xl font-semibold accent-text mb-4 uppercase tracking-wider">
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-3">
                  {planet.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ 
                        background: 'rgba(230, 184, 156, 0.1)', 
                        border: '1px solid rgba(230, 184, 156, 0.3)' 
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back to Top Link */}
            <div className="mt-8 text-center">
              <a 
                href="planets"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
              >
                ↑ Back to Planetary Table
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


