import {
  ArrowLeftRightIcon,
  BellIcon,
  BotIcon,
  CalendarClockIcon,
  CandlestickChartIcon,
  GlobeIcon,
  ImageIcon,
  RadarIcon,
  RocketIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
} from 'lucide-react';

import {
  Callout,
  DocFooter,
  DocHeader,
  DocPage,
  FeatureCard,
  FeatureGrid,
  IntegrationCard,
  IntegrationGrid,
  Section,
  Steps,
  Step,
} from './_components/doc-ui';

export default function DocsPage() {
  return (
    <DocPage>
      <DocHeader
        eyebrow="Documentation"
        title="Your AI Copilot for Solana"
        lead={
          <>
            <strong className="text-foreground">Sensix</strong> is an
            open-source, full-stack assistant that pairs frontier language
            models with the Solana blockchain. Trade, track, analyze and
            automate on-chain — all through a simple conversation.
          </>
        }
      />

      <Section
        title="What is Sensix?"
        description="Instead of juggling a dozen dashboards, explorers and DEX interfaces, you just tell Sensix what you want. It understands intent, calls the right on-chain tools, asks for confirmation before anything risky, and executes — turning natural language into real Solana actions."
      >
        <Callout icon={SparklesIcon} variant="success" title="In one sentence">
          Sensix is a chat-first command center for Solana: ask questions in
          plain English and get live data, swaps, NFT actions, market analysis
          and automations back.
        </Callout>
      </Section>

      <Section
        title="Core Capabilities"
        description="Everything Sensix can do, grouped by what you're trying to accomplish."
      >
        <FeatureGrid cols={3}>
          <FeatureCard icon={BotIcon} title="Conversational AI Agent">
            A natural-language agent tuned for DeFi, NFTs and on-chain
            workflows, with robust function-calling to execute complex,
            multi-step operations safely.
          </FeatureCard>
          <FeatureCard icon={WalletIcon} title="Wallet & Portfolio">
            Connect a wallet and get real-time balances, token holdings and
            portfolio insights — a complete view of your on-chain assets.
          </FeatureCard>
          <FeatureCard icon={ArrowLeftRightIcon} title="Token Swaps">
            Best-route token swaps powered by Jupiter, with confirmation before
            every signature so you stay in control.
          </FeatureCard>
          <FeatureCard icon={TrendingUpIcon} title="Market Data & Trends">
            Live prices, trending tokens and market movements pulled from
            DexScreener, Birdeye and Defined.fi.
          </FeatureCard>
          <FeatureCard icon={CandlestickChartIcon} title="Charts on Demand">
            Generate price and liquidity charts for any token right inside the
            conversation.
          </FeatureCard>
          <FeatureCard icon={ImageIcon} title="NFT Tools">
            Explore collections, floor prices and listings through Magic Eden
            integration.
          </FeatureCard>
          <FeatureCard icon={RocketIcon} title="Token Launches">
            Deploy and manage meme tokens on Pump.fun directly from chat.
          </FeatureCard>
          <FeatureCard icon={RadarIcon} title="Bundle & Sniper Analysis">
            Inspect a contract for potential bundles and sniper activity before
            you ape in.
          </FeatureCard>
          <FeatureCard icon={UsersIcon} title="Trader Intelligence">
            Track wallets and trades across Solana DEXes to follow smart money.
          </FeatureCard>
          <FeatureCard icon={GlobeIcon} title="Web Reading">
            Read and extract content from web pages so the agent can reason over
            live, off-chain context.
          </FeatureCard>
          <FeatureCard icon={CalendarClockIcon} title="Scheduled Actions">
            Automate recurring on-chain tasks that run on a schedule without
            manual intervention.
          </FeatureCard>
          <FeatureCard icon={BellIcon} title="Notifications">
            Get alerts and updates delivered through Telegram integration.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        title="How It Works"
        description="From a plain-English request to a signed transaction in four steps."
      >
        <Steps>
          <Step index={1} title="You ask">
            Type what you want in natural language — &ldquo;swap 2 SOL for
            USDC&rdquo;, &ldquo;show me trending tokens&rdquo;, or &ldquo;what&apos;s
            in my wallet?&rdquo;
          </Step>
          <Step index={2} title="Sensix understands & routes">
            An orchestration layer interprets your intent and selects exactly
            the right tools — swaps, analytics, NFT data, charts and more.
          </Step>
          <Step index={3} title="You confirm">
            For anything that touches your funds, Sensix pauses and asks for
            explicit confirmation before signing. Nothing executes behind your
            back.
          </Step>
          <Step index={4} title="It executes">
            The action runs on-chain and results stream back into the
            conversation in real time.
          </Step>
        </Steps>
      </Section>

      <Section
        title="Powered by Leading AI Models"
        description="Sensix is model-agnostic. It works with the most capable LLMs available and lets self-hosters bring their own keys."
      >
        <Callout icon={SparklesIcon} variant="info">
          Out of the box Sensix supports top-tier models from Anthropic (Claude)
          and OpenAI (GPT), accessed directly or through an OpenAI-compatible
          gateway. Swap the model with a single environment variable — no code
          changes required.
        </Callout>
      </Section>

      <Section
        title="Security First"
        description="On-chain actions are irreversible, so safety is built into every interaction."
      >
        <FeatureGrid>
          <FeatureCard icon={ShieldCheckIcon} title="Explicit Confirmation">
            Every transaction that requires a signature is gated behind a clear
            confirmation step — the agent never signs without your approval.
          </FeatureCard>
          <FeatureCard icon={ShieldCheckIcon} title="Token Verification">
            Sensix resolves the correct token mint and asks you to confirm
            before acting, reducing the risk of interacting with the wrong
            asset.
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section
        title="Protocol Ecosystem"
        description="Sensix connects to the protocols and data providers that power the Solana ecosystem."
      >
        <IntegrationGrid>
          <IntegrationCard
            name="Jupiter"
            href="https://jup.ag"
            description="Token swaps and best-route liquidity aggregation"
          />
          <IntegrationCard
            name="Pump.fun"
            href="https://pump.fun"
            description="Meme token launchpad and deployment"
          />
          <IntegrationCard
            name="Magic Eden"
            href="https://magiceden.io"
            description="NFT marketplace, collections and listings"
          />
          <IntegrationCard
            name="DexScreener"
            href="https://dexscreener.com"
            description="Real-time DEX analytics and charts"
          />
          <IntegrationCard
            name="Birdeye"
            href="https://birdeye.so"
            description="Trader, trade and token analytics"
          />
          <IntegrationCard
            name="Defined.fi"
            href="https://www.defined.fi"
            description="Trending tokens and market intelligence"
          />
        </IntegrationGrid>
      </Section>

      <DocFooter>© {new Date().getFullYear()} Sensix · Open-source under the MIT License</DocFooter>
    </DocPage>
  );
}
