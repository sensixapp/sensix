import {
  GaugeIcon,
  GiftIcon,
  KeyRoundIcon,
  MessageCircleIcon,
  RocketIcon,
  ServerIcon,
  UnlockIcon,
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

export default function EapPage() {
  return (
    <DocPage>
      <DocHeader
        eyebrow="Beta Program"
        title="Early Access, completely free"
        lead="Be among the first to experience Sensix. The Beta is 100% free — no wallet gating, no upfront fees, no paywalls."
      />

      <Section title="Why Free?">
        <Callout icon={UnlockIcon} variant="success" title="Lowering the barrier to entry">
          Unlike other apps, the Sensix Beta is entirely free to use. We&apos;d
          rather grow the platform through real usage and community feedback
          than gatekeep behind tokens or subscriptions.
        </Callout>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our costs are covered through{' '}
          <strong className="text-foreground">small trading fees</strong> on
          swaps and protocol interactions — no token gatekeeping, no paywalls,
          no surprises.
        </p>
      </Section>

      <Section
        title="Benefits"
        description="What you get as an early Sensix user."
      >
        <FeatureGrid cols={3}>
          <FeatureCard icon={RocketIcon} title="Free Early Access">
            Try new and experimental features before anyone else, at no cost.
          </FeatureCard>
          <FeatureCard icon={MessageCircleIcon} title="Priority Feedback">
            A direct channel to shape development and influence the roadmap.
          </FeatureCard>
          <FeatureCard icon={GiftIcon} title="Beta User Perks">
            Future premium features may include perks reserved for early
            testers.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        title="Want to Self-Host?"
        description="Sensix is fully open-source — run your own instance, your way."
      >
        <FeatureGrid>
          <FeatureCard icon={ServerIcon} title="Deploy Your Own Instance">
            Clone the repository and host Sensix on your own infrastructure with
            full control.
          </FeatureCard>
          <FeatureCard icon={KeyRoundIcon} title="Bring Your Own Keys">
            Plug in your own API keys for LLMs and blockchain services — your
            data and usage stay yours.
          </FeatureCard>
        </FeatureGrid>
        <div className="mt-6">
          <CheckList>
            <CheckItem>No fees when you self-host.</CheckItem>
            <CheckItem>Full access to the entire feature set.</CheckItem>
            <CheckItem>Customize and extend the agent to your needs.</CheckItem>
          </CheckList>
        </div>
      </Section>

      <Section title="No Catch">
        <Callout icon={GaugeIcon} variant="info">
          No fees on the hosted Beta. No token gating. 100% usage-based
          sustainability. We win when you use the product, not when you buy a
          token.
        </Callout>
      </Section>

      <DocFooter>
        No fees · No token gating · 100% usage-based sustainability
      </DocFooter>
    </DocPage>
  );
}
