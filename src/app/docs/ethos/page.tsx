import Link from 'next/link';

import {
  CodeIcon,
  GitForkIcon,
  HeartHandshakeIcon,
  LockKeyholeIcon,
  RefreshCwIcon,
  SproutIcon,
  StarIcon,
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
} from '../_components/doc-ui';

export default function OpenSourceEthosPage() {
  return (
    <DocPage>
      <DocHeader
        eyebrow="Open-Source Ethos"
        title="Built in the open, for the community"
        lead="Sensix is a community-led fork of the original NeurApp project, brought back to life with a clear and transparent vision: to make Solana tooling more accessible, intelligent and free from speculative influence."
      />

      <Section title="Why Sensix Exists">
        <p className="mb-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          NeurApp was a promising open-source project that combined AI with
          blockchain, offering natural-language interfaces for DeFi, NFTs and
          more on Solana. Unfortunately, after a successful token launch, the
          project was abandoned by its original developers — leaving behind a
          powerful but unused codebase.
        </p>
        <Callout icon={SproutIcon} variant="success" title="Our response to abandonment">
          We revived the project not for profit, but to restore its usefulness
          to the Solana community. No token relaunch hype. No roadmap theatrics.
          Just clean, working code and long-term usability.
        </Callout>
      </Section>

      <Section
        title="Our Commitments"
        description="The promises that define how we build and operate."
      >
        <CheckList>
          <CheckItem>
            <strong className="text-foreground">100% Open Source:</strong> code,
            roadmap and decisions are public.
          </CheckItem>
          <CheckItem>
            <strong className="text-foreground">No Team Tokens:</strong> the team
            keeps 0% of the supply. The project stays self-sustaining through
            small platform and trading fees — not insider allocations.
          </CheckItem>
          <CheckItem>
            <strong className="text-foreground">Respect for Users:</strong>{' '}
            privacy, transparency and clear UX are core to our development.
          </CheckItem>
          <CheckItem>
            <strong className="text-foreground">Respect for Developers:</strong>{' '}
            contributions are welcome and credited. No closed doors.
          </CheckItem>
          <CheckItem>
            <strong className="text-foreground">
              Respect for the Original Vision:
            </strong>{' '}
            we give credit where it&apos;s due and build responsibly on top of
            NeurApp&apos;s ideas.
          </CheckItem>
        </CheckList>
      </Section>

      <Section
        title="How Sensix Differs"
        description="A fresh start, with a clear separation from the past."
      >
        <FeatureGrid>
          <FeatureCard icon={RefreshCwIcon} title="Fresh Brand">
            Rebranded from NeurApp to Sensix to reflect a clean, independent
            start.
          </FeatureCard>
          <FeatureCard icon={CodeIcon} title="Actively Maintained">
            Regularly updated, with bugs fixed and dependencies kept current.
          </FeatureCard>
          <FeatureCard icon={LockKeyholeIcon} title="No Speculation">
            Fully committed to open AI tools for blockchain, without financial
            speculation.
          </FeatureCard>
          <FeatureCard icon={UsersIcon} title="Built in Public">
            Developed openly, with community contributions genuinely welcome.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        title="Want to Help?"
        description="We're looking for open-source contributors, testers, feedback and ideas."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://github.com/sensixapp/sensix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <StarIcon className="h-4 w-4" />
            Star on GitHub
          </Link>
          <Link
            href="https://github.com/sensixapp/sensix/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            <GitForkIcon className="h-4 w-4" />
            Fork & Contribute
          </Link>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <HeartHandshakeIcon className="h-4 w-4 text-emerald-500" />
          Every contribution is credited.
        </div>
      </Section>

      <DocFooter>
        Sensix is not affiliated with the original NeurApp team. This is an
        independent, community-driven continuation.
      </DocFooter>
    </DocPage>
  );
}
