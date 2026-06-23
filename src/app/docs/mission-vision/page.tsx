import Link from 'next/link';

import {
  CodeIcon,
  GaugeIcon,
  HeartHandshakeIcon,
  LayersIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
} from 'lucide-react';

import {
  Callout,
  DocFooter,
  DocHeader,
  DocPage,
  FeatureCard,
  FeatureGrid,
  Section,
} from '../_components/doc-ui';

export default function MissionVisionPage() {
  return (
    <DocPage>
      <DocHeader
        eyebrow="Mission & Vision"
        title="Intelligent, honest tools for Solana"
        lead="Sensix is an open-source project that integrates large language models with blockchain technology, creating an intuitive interface for the entire Solana ecosystem."
      />

      <Section
        title="Core Mission"
        description="The principles that guide every decision we make."
      >
        <FeatureGrid>
          <FeatureCard icon={ShieldCheckIcon} title="Transparency">
            Build transparent, community-driven blockchain solutions where code
            and decisions are open to everyone.
          </FeatureCard>
          <FeatureCard icon={MessageSquareIcon} title="Intuitive Interfaces">
            Make on-chain actions approachable through natural language, powered
            by state-of-the-art language models.
          </FeatureCard>
          <FeatureCard icon={UsersIcon} title="Inclusive Ecosystem">
            Foster a welcoming developer community where contributions are
            valued and credited.
          </FeatureCard>
          <FeatureCard icon={SparklesIcon} title="AI × Blockchain">
            Advance the integration of AI and blockchain to unlock entirely new
            workflows.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        title="Technical Vision"
        description="A robust, fast and secure foundation for AI-driven on-chain interactions."
      >
        <FeatureGrid cols={3}>
          <FeatureCard icon={LayersIcon} title="Infrastructure">
            Full-stack TypeScript, modern LLM integration, secure architecture
            and high-performance blockchain operations.
          </FeatureCard>
          <FeatureCard icon={MessageSquareIcon} title="Interface">
            Natural-language commands, real-time response streaming,
            cross-platform support and graceful error handling.
          </FeatureCard>
          <FeatureCard icon={UsersIcon} title="Community">
            Open-source development, a community-driven roadmap, transparent
            docs and an active contribution system.
          </FeatureCard>
          <FeatureCard icon={GaugeIcon} title="Performance">
            Built on Solana&apos;s high-throughput chain for fast, low-cost
            execution at scale.
          </FeatureCard>
          <FeatureCard icon={CodeIcon} title="Extensible">
            A modular tool architecture that makes it easy to add new protocols
            and capabilities.
          </FeatureCard>
          <FeatureCard icon={TargetIcon} title="User-Focused">
            Every feature is designed around real user needs, not speculation.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section title="Open-Source Ethos">
        <Callout icon={HeartHandshakeIcon} variant="success" title="A community revival">
          Sensix is a community revival of the original NeurApp project, which
          was abandoned after a successful token launch. Our goal is to breathe
          new life into a powerful tool, remove speculative noise, and bring
          back a transparent, honest and functional assistant for Solana.
        </Callout>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We are committed to building software that puts{' '}
          <strong className="text-foreground">users first</strong>, respects
          open-source values, and avoids exploitative tokenomics. Sensix does
          not aim to recreate a token, but to restore a valuable application for
          the benefit of developers and users alike.
        </p>
      </Section>

      <Section
        title="Development Roadmap"
        description="Sensix is built in public. Follow progress, open issues and contribute on GitHub."
      >
        <Callout variant="info">
          See our{' '}
          <Link
            href="https://github.com/sensixapp/sensix"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"
          >
            GitHub repository
          </Link>{' '}
          for the latest updates and roadmap.
        </Callout>
      </Section>

      <DocFooter>
        Built in public · Community-driven · Open-source under the MIT License
      </DocFooter>
    </DocPage>
  );
}
