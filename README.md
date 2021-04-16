# SSam Interface

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for SSam -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [ssam.app](https://www.ssam.app/)
- Twitter: [@SsamApp](https://twitter.com/SsamApp)
- WhatsApp: [WhatsApp](https://chat.whatsapp.com/DFYXTx1ldRTKMeSp7sg3EF)
- Discord: [Ssam](https://discord.com/JdA5PVrpUR)
- Telegram: [Telegram](https://t.me/SSAMDefiApp)


## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 
