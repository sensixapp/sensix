'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import {
  ArrowLeftIcon,
  BookOpenIcon,
  CoinsIcon,
  CompassIcon,
  HeartHandshakeIcon,
  LinkIcon,
  RocketIcon,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const navItems: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'Overview', href: '/docs', icon: CompassIcon },
  { label: 'Mission & Vision', href: '/docs/mission-vision', icon: BookOpenIcon },
  { label: 'Open-Source Ethos', href: '/docs/ethos', icon: HeartHandshakeIcon },
  { label: 'Tokenomics', href: '/docs/tokenomics', icon: CoinsIcon },
  { label: 'Beta Program', href: '/docs/eap', icon: RocketIcon },
  { label: 'Links', href: '/docs/links', icon: LinkIcon },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <aside className="w-full border-b border-border/60 bg-muted/30 px-4 py-6 dark:bg-muted/10 md:sticky md:top-0 md:h-screen md:w-72 md:border-b-0 md:border-r md:py-8">
        <nav className="flex h-full flex-col">
          <Link
            href="/docs"
            prefetch={false}
            className="mb-6 flex items-center gap-2 px-1 focus:outline-none"
          >
            <Image
              src="/letter.svg"
              alt="Sensix"
              width={48}
              height={32}
              className="h-9 w-auto drop-shadow-sm"
              priority
            />
            <span className="text-lg font-semibold tracking-tight">Docs</span>
          </Link>

          <div className="mb-3 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            <BookOpenIcon className="h-3.5 w-3.5" />
            Documentation
          </div>

          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/docs' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4 w-4 shrink-0',
                        isActive
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-muted-foreground/70',
                      )}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto space-y-1 border-t border-border/60 pt-4">
            <a
              href="https://github.com/sensixapp/sensix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              <GitHubLogoIcon className="h-4 w-4 shrink-0 text-muted-foreground/70" />
              GitHub
            </a>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              <ArrowLeftIcon className="h-4 w-4 shrink-0 text-muted-foreground/70" />
              Back to home
            </Link>
          </div>
        </nav>
      </aside>

      <main className="flex-1 overflow-x-auto px-4 py-8 md:px-12 md:py-12">
        {children}
      </main>
    </div>
  );
}
