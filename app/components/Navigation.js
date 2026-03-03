'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useT } from '../../i18n/useTranslations';
import DeckSwitcher from './DeckSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  const { locale } = useParams();
  const t = useT();

  const prefix = `/${locale}`;

  const isActive = (path) => {
    if (path === prefix) {
      return pathname === prefix || pathname === `${prefix}/`;
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { path: prefix, label: t.nav?.decan || 'Decan', icon: '🃏' },
    { path: `${prefix}/court`, label: t.nav?.court || 'Court', icon: '♛' },
    { path: `${prefix}/signs`, label: t.nav?.signs || 'Signs', icon: '♈︎' },
    { path: `${prefix}/planets`, label: t.nav?.planets || 'Planets', icon: '☉' },
  ];

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        <div className="nav-links">
          {navItems.map((item) => (
            item.disabled ? (
              <span
                key={item.path}
                className="nav-link nav-link-disabled"
                title={t.nav?.comingSoon || 'Coming soon'}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </span>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            )
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <DeckSwitcher />
        </div>
      </div>
    </nav>
  );
}
