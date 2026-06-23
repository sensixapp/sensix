import Link from 'next/link';

import {
  BadgeCheckIcon,
  CoinsIcon,
  FlameIcon,
  GiftIcon,
  HandCoinsIcon,
  LockKeyholeIcon,
  RocketIcon,
  ScaleIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';

import {
  Callout,
  CheckItem,
  CheckList,
  DocFooter,
  DocHeader,
  DocPage,
  FeatureCard,
  FeatureGrid,
  Section,
  Stat,
  StatGrid,
} from '../_components/doc-ui';

export default function TokenomicsPage() {
  return (
    <DocPage>
      <DocHeader
        eyebrow="Tokenomics"
        title="A token with no insiders"
        lead={
          <>
            <strong className="text-foreground">$SENSIX</strong> is the native
            utility token of the Sensix platform — designed to enable access,
            support decentralization and reward real usage, with{' '}
            <strong className="text-foreground">
              zero team allocation and no fundraising
            </strong>
            .
          </>
        }
      />

      <Section title="At a Glance">
        <StatGrid>
          <Stat value="0%" label="Team allocation" />
          <Stat value="100%" label="To the community" />
          <Stat value="0" label="Presale / private rounds" />
        </StatGrid>
        <Callout icon={RocketIcon} variant="success" title="Fair launch on Pump.fun">
          $SENSIX launches on{' '}
          <Link
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
          >
            Pump.fun
          </Link>{' '}
          — a fully public, bonding-curve launch with no presale and no insider
          allocation. Everyone buys on the same curve, at the same time, on
          equal terms.
        </Callout>
      </Section>

      <Section
        title="Token Utility"
        description="$SENSIX isn't a meme with no purpose — it's the key to the entire platform. Every new feature, user and integration drives more demand for the token."
      >
        <Callout icon={TrendingUpIcon} variant="success" title="Utility that compounds">
          The more Sensix grows, the more $SENSIX does. Holding the token isn&apos;t
          a bet on hype — it&apos;s a stake in a product people actually use every
          day, with real on-chain volume behind it.
        </Callout>
        <div className="mt-6">
          <FeatureGrid>
            <FeatureCard icon={SparklesIcon} title="Unlock the Full Agent">
              Token holders get access to advanced and early-release
              capabilities before anyone else — the most powerful version of
              Sensix is gated behind $SENSIX.
            </FeatureCard>
            <FeatureCard icon={BadgeCheckIcon} title="Priority Access">
              Skip the line for premium agents, new tools and experimental
              features the moment they ship.
            </FeatureCard>
            <FeatureCard icon={GiftIcon} title="Rewards for Real Usage">
              Active users are rewarded. The people who use the platform are the
              ones who benefit from it — not passive speculators.
            </FeatureCard>
            <FeatureCard icon={CoinsIcon} title="Lower Fees, More Value">
              Holders enjoy fee discounts and in-app benefits, making every swap
              and action cheaper the more you&apos;re invested.
            </FeatureCard>
          </FeatureGrid>
        </div>
      </Section>

      <Section
        title="Why $SENSIX Accrues Value"
        description="A flywheel where product usage and token demand reinforce each other."
      >
        <FeatureGrid cols={3}>
          <FeatureCard icon={HandCoinsIcon} title="Real Revenue">
            The platform earns from genuine trading and usage fees — value
            flowing through Sensix is real, on-chain and verifiable.
          </FeatureCard>
          <FeatureCard icon={UsersIcon} title="Growing Demand">
            Every new user who wants the full experience needs $SENSIX,
            tightening demand against a fixed, community-owned supply.
          </FeatureCard>
          <FeatureCard icon={FlameIcon} title="No Dilution">
            With 0% team allocation and no presale unlocks, there&apos;s no
            insider supply waiting to hit the market and dump on you.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        title="Distribution Plan"
        description="Fair by design — the entire supply belongs to the community."
      >
        <CheckList>
          <CheckItem>
            <strong className="text-foreground">100% of tokens</strong> go to
            the community.
          </CheckItem>
          <CheckItem>
            Fair launch on{' '}
            <strong className="text-foreground">Pump.fun</strong> via an open
            bonding curve — everyone enters on the same terms.
          </CheckItem>
          <CheckItem>No presale, no private rounds, no VCs.</CheckItem>
          <CheckItem>Transparent and fully on-chain allocation.</CheckItem>
        </CheckList>
      </Section>

      <Section
        title="Token Philosophy"
        description="A radically different approach to token design."
      >
        <FeatureGrid cols={3}>
          <FeatureCard icon={UsersIcon} title="No Team Tokens">
            We work, we don&apos;t dump. The team holds no privileged supply.
          </FeatureCard>
          <FeatureCard icon={LockKeyholeIcon} title="No Hidden Allocations">
            All supply is fully accounted for and verifiable on-chain.
          </FeatureCard>
          <FeatureCard icon={ScaleIcon} title="Revenue Through Fees">
            Sustainability comes from real usage, not speculative pumps.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section title="Contract & Details">
        <Callout variant="info" title="Deployed on Solana">
          $SENSIX launches on{' '}
          <Link
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
          >
            Pump.fun
          </Link>{' '}
          and trades on the open market right away. Track the live chart on{' '}
          <Link
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
          >
            DexScreener
          </Link>
          . The official contract address will be published at launch and on the{' '}
          <span className="font-semibold text-foreground">Links</span> page.
        </Callout>
      </Section>

      <Section
        title="Frequently Asked Questions"
        description="The questions people ask most about $SENSIX."
      >
        <div className="space-y-4">
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <h3 className="mb-1 text-base font-semibold text-foreground">
              Will there be a presale or private sale?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              No. There will be no private investors or early privileged
              allocations.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <h3 className="mb-1 text-base font-semibold text-foreground">
              How does the team earn?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The team earns only through platform fees and continued
              contribution, ensuring full alignment with long-term product
              success.
            </p>
          </div>
        </div>
      </Section>

      <DocFooter>
        Tokenomics and utility design may evolve based on community feedback and
        adoption metrics.
      </DocFooter>
    </DocPage>
  );
}
