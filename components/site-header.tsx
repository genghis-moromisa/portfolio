import Link from 'next/link';

import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pb-10 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2">
        <Link href="/" className="text-2xl font-serif tracking-tightest">
          Kaito Mori
        </Link>
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Product + Brand Systems</p>
      </div>
      <div className="flex flex-col items-start gap-4 sm:items-end">
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
