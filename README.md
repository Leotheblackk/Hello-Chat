# 💬 Hello Chat — Web3 Social Media DApp

Hello Chat is a simple Twitter-style Web3 DApp where **every message is stored on-chain**. Built for EVM chains, deployed on **Base** to keep gas fees low.

## 🌐 Features

- Connect your wallet via MetaMask
- Post messages on-chain
- View messages globally
- Runs on Base (L2 for low fees)

## 🛠 Tech Stack

- Solidity (Smart Contracts)
- Hardhat (Dev Framework)
- Ethers.js (Frontend Interaction)
- Base chain (EVM-compatible)

## 🚀 Getting Started

```bash
git clone https://github.com/Leotheblackk/hello-chat.git
cd hello-chat
npm install
npx hardhat compile
```

1. Add your private key + RPC in `hardhat.config.js`
2. Deploy: `npx hardhat run scripts/deploy.js --network base`
3. Update contract address in `public/app.js`
4. Open `index.html` in browser

## 🤝 Contribute

PRs welcome! Fork the repo, make changes, and submit a pull request. Let’s build the future of social media together 💙

## 📬 License

MIT © [Leotheblackk](https://github.com/Leotheblackk)
