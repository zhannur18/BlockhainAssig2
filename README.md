# Title AITUZhannur Smart Contract
### Usage
This repository contains a Solidity smart contract named AITUZhannur, based on the ERC-20 standard. Additionally, it provides instructions on how to configure the environment to run web3.js, deploy the smart contract to Infura, and interact with the deployed contract.
###  Examples
1. Configure Environment and Install web3.js
npm install web3
2. Configure web3.js to Run with Infura
const Web3 = require('web3');
const infuraApiKey = 'your_infura_api_key';
const web3 = new Web3(`https://sepolia.infura.io/v3/${infuraApiKey}`, { timeout: 60000 });
3. Configure Metamask with Infura
![msg1026144048-39464](https://github.com/zhannur18/BlockhainAssig2/assets/129687473/49b172b5-7754-48d6-ac2d-cd1fafad72c7)
4. Deploy the AITUZhannur Contract to Infura
I successfully deployed the AITUZhannur smart contract to the Ethereum Mainnet using Remix, and connected it to Infura for seamless interaction with the Ethereum network.
![image](https://github.com/zhannur18/BlockhainAssig2/assets/129687473/e5c5c67e-f547-45d7-8f4a-d512a7c2b718)

6. Call Smart Contract Functions
Interact with the deployed contract using web3.js. 
Check Balance
Transfer Tokens 
Fetch Data Using fetchWithRetry
