import { useState } from 'react'
import './App.css'
import { CryptoPayment, Tokens, Chains } from 'resmic'

function App() {
  const [paymentStatus, setPaymentStatus] = useState(false) // Returns bool after the payment

  return (
    <>

      <h2>Accept Crypto Payments with Resmic</h2>
      <div className="card">
          <CryptoPayment
            Address={{ EVM: "0x056397760b973BfB921Bc10Be9DA5034B1e921d7", STARKNET: "0x05Ea419aa3Ad67A9f9721dc38257f8Cc1E032b0Ac83ED6b532Aad3e1778c1B9F" }} // Wallet Address to receive Funds.
            Chains={[Chains.Ethereum, Chains['XDC-Network'], Chains.Starknet, Chains.Sepolia]} // Edit blockchain to receive payments.
            Tokens={[Tokens.STARK, Tokens.SETH, Tokens.DAI, Tokens.ETH, Tokens.USDC, Tokens.XDC]} // Edit Tokens you want to receive payments in.
            Amount={50} // Amount in USD
            setPaymentStatus={setPaymentStatus}
          />

      </div>
    </>

  )}

export default App;
