'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DeckSwitcher from './DeckSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
  
  const navItems = [
    { path: '/', label: 'Decan', icon: '🃏' },
    { path: '/court', label: 'Court', icon: '♛' },
    { path: '/signs', label: 'Signs', icon: '♈︎' },
    { path: '/planets', label: 'Planets', icon: '☉' },
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




