import Link from 'next/link';

import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import {
  ArrowUpRightIcon,
  CandlestickChartIcon,
  GlobeIcon,
  LineChartIcon,
  RocketIcon,
  TrendingUpIcon,
  type LucideIcon,
} from 'lucide-react';

import { DocFooter, DocHeader, DocPage, Section } from '../_components/doc-ui';

type LinkEntry = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon | typeof GitHubLogoIcon;
};

const links: LinkEntry[] = [
  {
    name: 'Website / App',
    description: 'Launch the Sensix app',
    href: 'https://sensix.app',
    icon: GlobeIcon,
  },
  {
    name: 'Pump.fun',
    description: 'Buy $SENSIX on the fair launch',
    href: 'https://pump.fun',
    icon: RocketIcon,
  },
  {
    name: 'DexScreener',
    description: 'Live $SENSIX chart and market data',
    href: 'https://dexscreener.com',
    icon: CandlestickChartIcon,
  },
  {
    name: 'Twitter / X',
    description: 'Follow @sensixapp for updates',
    href: 'https://x.com/sensixapp',
    icon: TwitterLogoIcon,
  },
  {
    name: 'GitHub',
    description: 'Source code, issues and contributions',
    href: 'https://github.com/sensixapp/sensix',
    icon: GitHubLogoIcon,
  },
  {
    name: 'CoinGecko',
    description: 'Token market data',
    href: 'https://coingecko.com/',
    icon: LineChartIcon,
  },
  {
    name: 'CoinMarketCap',
    description: 'Token price and rankings',
    href: 'https://coinmarketcap.com/',
    icon: TrendingUpIcon,
  },
];

export default function LinksPage() {
  return (
    <DocPage>
      <DocHeader
        eyebrow="Links"
        title="Everything Sensix, in one place"
        lead="Official channels, source code and market data for the Sensix project."
      />

      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/20 dark:text-emerald-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    {item.name}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-emerald-500" />
                  </div>
                  <p className="truncate text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <DocFooter>© {new Date().getFullYear()} Sensix · Open-source under the MIT License</DocFooter>
    </DocPage>
  );
}
