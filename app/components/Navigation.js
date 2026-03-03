'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import DeckSwitcher from './DeckSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  const { locale } = useParams();

  const prefix = `/${locale}`;

  const isActive = (path) => {
    if (path === prefix) {
      return pathname === prefix || pathname === `${prefix}/`;
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { path: prefix, label: 'Decan', icon: '🃏' },
    { path: `${prefix}/court`, label: 'Court', icon: '♛' },
    { path: `${prefix}/signs`, label: 'Signs', icon: '♈︎' },
    { path: `${prefix}/planets`, label: 'Planets', icon: '☉' },
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
                title="Coming soon"
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
        <DeckSwitcher />
      </div>
    </nav>
  );
}
