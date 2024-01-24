const  Web3  = require('web3');
const fs = require('fs');


const infuraApiKey = 'a6fb961d125b4193a0d610e65044fa4a';
const web3 = new Web3(`https://sepolia.infura.io/v3/${infuraApiKey}`, { timeout: 60000 });


const contractAddress = '0x84DE6af780E64E6AC00fdA9bb6b01055C475B489';

// Read ABI from JSON file
const abiFilePath = 'ABI.json';
const abiRawData = fs.readFileSync(abiFilePath);
const abi = JSON.parse(abiRawData);

const contract = new web3.eth.Contract(abi, contractAddress);

const userAddress = '0xF78c8Fe01f669dFaB5A2521Eb7096b4054536A38';


// Example 1: Check balance of the user
contract.methods.balanceOf(userAddress).call()
    .then(balance => {
        console.log(`Balance of ${userAddress}: ${balance} tokens`);
    })
    .catch(error => {
        console.error('Error checking balance:', error);
    });

// Example 2: Transfer tokens
// const fromAddress = '0x427D8ACFe3820420DEBB19c0D64eb098b8B42Fb4';
// const privateKey = '25edda2e981c34010a24fb3087fae9f9aeaafe5417587e15af9ab5410d5658dd';

// const gasLimit = 500000;

// const gasPrice = web3.utils.toWei('100', 'gwei');

// const transferAmount = 100;

// const transferData = contract.methods.transfer(userAddress, transferAmount).encodeABI();

// const transactionObject = {
//     from: fromAddress,
//     to: contractAddress,
//     gas: gasLimit,
//     gasPrice: gasPrice,
//     data: transferData,
// };

// web3.eth.accounts.signTransaction(transactionObject, privateKey)
//     .then(signedTransaction => {
//         web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
//             .on('transactionHash', hash => {
//                 console.log('Transaction Hash:', hash);
//             })
//             .on('confirmation', (confirmationNumber, receipt) => {
//                 console.log('Confirmation:', confirmationNumber, receipt);
//             })
//             .on('receipt', receipt => {
//                 console.log('Receipt:', receipt);
//             })
//             .on('error', error => {
//                 console.error('Error:', error);
//             });
//     })
//     .catch(error => {
//         console.error('Error signing transaction:', error);
//     });

async function fetchWithRetry(url, options, retries = 3) {
    let tries = 0;
    while (tries < retries) {
        try {
            return await fetch(url, options);
        } catch (error) {
            tries++;
            console.error(`Error on attempt ${tries}: ${error.message}`);
        }
    }
    throw new Error(`Failed after ${retries} attempts.`);
}


// Example 3: Fetch data using fetchWithRetry
async function fetchData() {
    try {
        const response = await fetchWithRetry('https://sepolia.infura.io/v3/e039feb59ad3401da352dd13a6984526', {});

        if (response.ok) {
            const data = await response.json();
            // ... handle the data as needed ...
        } else {
            console.error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
fetchData();
