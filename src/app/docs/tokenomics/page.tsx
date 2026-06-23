import {
  BadgeCheckIcon,
  CoinsIcon,
  GiftIcon,
  HandCoinsIcon,
  LockKeyholeIcon,
  ScaleIcon,
  SparklesIcon,
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
        <Callout icon={HandCoinsIcon} variant="success" title="Revenue model">
          Sensix earns from real platform usage and trading fees — never from
          token speculation. The team&apos;s incentives stay aligned with the
          product&apos;s long-term success.
        </Callout>
      </Section>

      <Section
        title="Utility"
        description="What holding and using $SENSIX unlocks."
      >
        <FeatureGrid>
          <FeatureCard icon={SparklesIcon} title="Advanced Features">
            Unlock access to advanced and early-release capabilities.
          </FeatureCard>
          <FeatureCard icon={BadgeCheckIcon} title="Priority Access">
            Priority access to premium agents and tools as they ship.
          </FeatureCard>
          <FeatureCard icon={GiftIcon} title="Usage Rewards">
            Usage-based rewards and optional governance participation.
          </FeatureCard>
          <FeatureCard icon={CoinsIcon} title="Fee Benefits">
            Fee discounts and in-app benefits for active users.
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
            Fair, community-first distribution at launch — open to everyone on
            equal terms.
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
          The $SENSIX token lives on the Solana blockchain. Contract details
          will be published at launch and listed on the{' '}
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
