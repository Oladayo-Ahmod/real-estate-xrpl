const xrpl = require('xrpl');

async function createAndFundNewWallet() {
  // Connect to the XRP Ledger Testnet
  const client = new xrpl.Client('wss://s.altnet.rippletest.net:51233');
  await client.connect();

  // Generate a new wallet
  const newWallet = xrpl.Wallet.generate();
  console.log('New Wallet Address:', newWallet.classicAddress);
  console.log('New Wallet Seed:', newWallet.seed);

  // Request Testnet XRP from the faucet
  const faucetUrl = 'https://faucet.altnet.rippletest.net/accounts';
  try {
    const response = await fetch(faucetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ destination: newWallet.classicAddress }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Funding successful:', data);
    } else {
      console.error('Funding error:', data);
    }
  } catch (error) {
    console.error('Funding error:', error.message);
  }

  await client.disconnect();
  return newWallet;
}

createAndFundNewWallet()
  .then(wallet => {
    console.log('New Wallet Created and Funded:', wallet);
  })
  .catch(error => {
    console.error('Error creating or funding wallet:', error);
  });
