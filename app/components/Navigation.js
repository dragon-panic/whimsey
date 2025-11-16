'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };
  
  const navItems = [
    { path: '/', label: 'Tarot', icon: '🃏' },
    { path: '/planets', label: 'Planets', icon: '☉' },
    { path: '/signs', label: 'Signs', icon: '♈︎', disabled: true }
  ];
  
  return (
    <nav className="navigation-bar">
      <div className="nav-container">
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
    </nav>
  );
}


