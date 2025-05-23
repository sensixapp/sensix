# Changelogs

## v0.9
- Revamped codebase
- Branding change
- Removed paywall for access

## v0.3.4

- Fix bug with missing relevant messages
- Handle error when unable to fetch bundle data

## v0.3.3

- Cookie.fun integration
- Bundle checker for Pumpfun tokens
- UI bug fixes
- Fixed bug allowing updates to arbitrary user fields

## v0.3.2

- Handle missing stats when using the NFT collectionStats tool on new collections
- Allow users to toggle Trial/EPA banners

## v0.3.1

- Fix client-side error when an unknown tool is invoked

## v0.3.0

- Improvements to saved prompts
- Platform subscription implementation
- Sharable referral codes
- Trial feature for token holders

## v0.2.3

- Platform performance and stability improvements
- Automation status UI
- Conversation read receipts
- Prompt management

## v0.2.2

- Improved action graceful failure logic

## v0.2.1

- Fix navigation issue
- Degen mode for skipping confirmations
- Dynamic action scheduling
- UI fixes

## v0.2.0

- Improve Telegram notification connection & reliability
- Action management feature - edit & pause automated actions
- Privy embedded wallet integration
- Backend optimizations (model token savings, improvements with automations)
- Improved UX and stylings
- Tool orchestration layer, improved agent selection and efficiency
- Various tool fixes (token holders reliability + styling)
- Swap + misc. txn improved land rates
- Confirmation prompt UI buttons
- Overall performance and reliability improvements

## v0.1.14

- Removed images from Jina scraping results to reduce context bloat
- Improved check for telegram setup when creating an action
- Ensure the telegram botId is passed back into the context when guiding the user on the initial setup

## v0.1.13

- Telegram notification tool
- Discord Privy config, EAP role linking

## v0.1.12

- Utilize PPQ for AI model endpoint

## v0.1.11

- Initial implementation of price charts
- Initial implementation of automated actions (recurring actions configured and executed by the agent)

## v0.1.10

- Message token tracking (model usage) for backend analysis
- Fixes to solana-agent-kit implementation for decimal handling

## v0.1.9

- Use correct messages when trimming the message context for gpt4o

## v0.1.8

- Improve conversation API route usage
- Limit messages in context for AI model usage
- Add confirmation tool for messages that require additional confirmation before executing

## v0.1.7

- Top 10 token holder analysis
- Enhance token swap functionality and update suggestions
- Update layout and component styles for improved responsiveness

## v0.1.6

- Enhance token filtering with advanced metrics
- Improve floating wallet UI
- Optimize `getTokenPrice` tool
- Optimize routing UX (creating new conversation)

## v0.1.5

- Fixed placeholder image for tokens
- Fixed a routing issue after delete conversation
- Integrated [Magic Eden](https://magiceden.io/) APIs
