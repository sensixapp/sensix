import Link from 'next/link';
import { ReactNode } from 'react';

import { ArrowUpRightIcon, CheckIcon, type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*  Page header                                                               */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
      {children}
    </span>
  );
}

export function DocHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <header className="relative mb-12 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-500/[0.07] via-card to-card p-8 shadow-sm sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-4 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

export function Section({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('mb-12', className)}>
      {title ? (
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </section>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature cards                                                             */
/* -------------------------------------------------------------------------- */

export function FeatureGrid({
  children,
  cols = 2,
}: {
  children: ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        'grid gap-4 sm:grid-cols-2',
        cols === 3 && 'lg:grid-cols-3',
      )}
    >
      {children}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/20 transition-colors group-hover:bg-emerald-500/15 dark:text-emerald-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-1.5 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Callout                                                                   */
/* -------------------------------------------------------------------------- */

const calloutStyles = {
  note: 'border-border/60 bg-muted/40',
  info: 'border-sky-500/30 bg-sky-500/[0.07]',
  success: 'border-emerald-500/30 bg-emerald-500/[0.07]',
  warning: 'border-amber-500/30 bg-amber-500/[0.07]',
} as const;

export function Callout({
  icon: Icon,
  title,
  variant = 'note',
  children,
}: {
  icon?: LucideIcon;
  title?: string;
  variant?: keyof typeof calloutStyles;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex gap-3 rounded-2xl border p-5',
        calloutStyles[variant],
      )}
    >
      {Icon ? (
        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70" />
      ) : null}
      <div className="text-sm leading-relaxed text-muted-foreground">
        {title ? (
          <p className="mb-1 font-semibold text-foreground">{title}</p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stats                                                                     */
/* -------------------------------------------------------------------------- */

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">{children}</div>
  );
}

export function Stat({
  value,
  label,
}: {
  value: ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm">
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 bg-clip-text text-3xl font-bold text-transparent">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Check list                                                                */
/* -------------------------------------------------------------------------- */

export function CheckList({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
        <CheckIcon className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Steps                                                                     */
/* -------------------------------------------------------------------------- */

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="space-y-5">{children}</ol>;
}

export function Step({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-bold text-emerald-600 ring-1 ring-inset ring-emerald-500/20 dark:text-emerald-400">
        {index}
      </span>
      <div className="pt-0.5">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </p>
      </div>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Integrations                                                              */
/* -------------------------------------------------------------------------- */

export function IntegrationGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}

export function IntegrationCard({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md"
    >
      <div>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          {name}
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-emerald-500" />
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer note                                                               */
/* -------------------------------------------------------------------------- */

export function DocFooter({ children }: { children: ReactNode }) {
  return (
    <footer className="mt-16 border-t border-border/60 pt-6 text-sm text-muted-foreground">
      {children}
    </footer>
  );
}

export function DocPage({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-4xl">{children}</div>;
}
