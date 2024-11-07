import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/userCurrencyinfo'
const App = () => {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("PKR")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)  // اگر ڈیٹا نہ ملے تو اسے خالی object رکھیں
// console.log(currencyInfo);

  const options = Object.keys(currencyInfo)
  const loaderStyle = {
    border: '8px solid #f3f3f3', // Light gray background
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
};

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    // Log currencyInfo and the target currency to debug
    const targetCurrency = to.toUpperCase()  // ya toLowerCase() agar currencyInfo mein keys lowercase ho

  if (currencyInfo[targetCurrency]) {
    const result = amount * currencyInfo[targetCurrency]
    setConvertedAmount(result)
    // console.log("Amount:", amount)
    // console.log("Conversion Rate:", currencyInfo[targetCurrency])
    // console.log("Converted Amount:", result)
  } else {
    console.log("Conversion rate not available for selected currency:", targetCurrency)
  }
}
  
  
  if (options.length === 0) {
    <div style={containerStyle}>
    <div style={loaderStyle}></div>
    <style>
        {`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}
    </style>
</div>
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(value) => setAmount(value)} // make sure setAmount is used here
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onAmountChange={(value) => setAmount(value)} // make sure setAmount is used here
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
