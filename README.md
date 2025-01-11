# How to Accept Crypto Payments with Resmic

## A Step-by-Step Integration Guide



## Introduction

Accepting crypto payments is easier than ever with Resmic’s decentralised payment infrastructure. In this guide, we’ll walk you through integrating Resmic into a project using `React & Vite`, leveraging the Resmic `npm` SDK.

Learn more at [Resmic](https://resmic.com/).

With just a few steps, you’ll have a fully functioning crypto payment solution that’s secure, decentralised, and requires no logins or signups.

At the end of this tutorial, you will able to accept crypto payments.


<img src="/Resmic_SDK.gif" alt="Resmic SDK">

### **Access the Code on GitHub**

> You can find the full source code of this demo application on GitHub:
> 
> 
> 👉[GitHub Repository: resmic-integration-guide](https://github.com/0xResmic/resmic-integration-guide)
> 
> Feel free to clone, fork, and star the repository. Contributions are welcome!
> 

### **What You’ll Need**

- Node.js installed on your computer.
- Basic understanding of React.js.
- A crypto wallet for testing (Metamask/ArgentX, Braavos).

### **Step 1: Set Up a React App Using Vite**

To get started, we’ll create a fresh React project using Vite. Open your terminal and run the following commands:

```bash
# Create a new Vite project
npm create vite@latest resmic-app
# We’ll be using React + JavaScript.

# Navigate to the project folder
cd resmic-app

# Install dependencies
npm install
```

Once installed, start the development server to ensure everything is working:

```bash
npm run dev
```

---

### **Step 2: Install the Resmic SDK**

Install the Resmic `npm package` to integrate Resmic into your app:

```bash
npm install resmic
```

---

### **Step 3: Integrate Resmic in Your App**

Here’s a simple way to integrate Resmic into your app:

### **App.jsx**

```jsx
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
            Chains={[Chains.Ethereum, Chains['XDC-Network'], Chains.Starknet, Chains.Sepolia]} // Specify blockchains to receive payments.
            Tokens={[Tokens.STARK, Tokens.SETH, Tokens.DAI, Tokens.ETH, Tokens.USDC, Tokens.XDC]} // Specify tokens you want to accept.
            Amount={50} // Amount in USD
            setPaymentStatus={setPaymentStatus}
          />

      </div>
    </>

  )}

export default App;
```

How [App.js](https://github.com/0xResmic/resmic-integration-guide/blob/main/src/App.jsx) should look like after this step.

---

### **Step 4: Test the Payment Flow**

1. Start your development server using:
    
    ```bash
    npm run dev
    ```
    
2. Open the app in your browser, click the "Make Payment" button, and test the flow. You’ll be redirected to the payment pop-up.
3. Use a crypto wallet like MetaMask to complete a payment and see the instant settlement in action.

---

### **Step 5: Customise the Integration**

Resmic allows you to customise payments further:

- Choose Blockchains you want to accept token in.
- Accept multiple cryptocurrencies.
- Customise the payment button.

Check out the [Resmic](https://resmic-docs.com/) [SDK documentation](https://docs.resmic.com/) for more details.

---

### **Conclusion**

With Resmic, accepting crypto payments is simple, secure, and decentralised with zero Downtime. Whether you’re running an e-commerce store, freelancing, or any online service, Resmic can handle your crypto transactions seamlessly.

We’d love to see what you build with Resmic! Share your feedback or ask questions in our community forums or on Twitter [@Resmic](https://x.com/0xResmic).