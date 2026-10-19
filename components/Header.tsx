'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';

const navItems = [
  { name: 'Profile', path: '/profile' },
  { name: 'Work', path: '/portfolio' },
  { name: 'Experience', path: '/experience' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/profile" className="brand" aria-label="Angga, profile">
          AR<span>.</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(item => {
            return(
              <Link 
                key={item.path} 
                href={item.path} 
                aria-current={pathname === item.path ? 'page' : undefined} 
                className={pathname === item.path ? 'nav-link active' : 'nav-link'}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        <SocialMedia />
      </div>
    </header>
  );
}
