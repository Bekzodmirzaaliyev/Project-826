import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("USD"); 
  const [targetCurrency, setTargetCurrency] = useState("EUR"); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const data = await response.json();
      setExchangeRates(data.rates);
    };
    fetchData();
  }, [baseCurrency]);

  const handleConvert = (e) => {
    e.preventDefault();
    const rate = exchangeRates[targetCurrency];
    const converted = (amount * rate).toFixed(2);
    setConvertedAmount(converted);
  };

  return (
    <div className="bg-blue-700 min-h-screen flex flex-col justify-center items-center shadow-lg">
      <div className="bg-gray-500 p-8 rounded-lg shadow-md">
        <form onSubmit={handleConvert} className="max-w-lg mx-auto">
          <label className="block mb-4">  
            <span className="text-white">Amount in {baseCurrency}:</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block mb-4">
            <span className="text-white">Convert from:</span>
            <select
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              className="form-select mt-1 block w-full"
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </label>
          <label className="block mb-4">
            <span className="text-white">Convert to:</span>
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              className="form-select mt-1 block w-full"
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
            Convert
          </button>
        </form>
        <div className="mt-8 max-w-lg mx-auto">
          <p className="font-bold text-white">{amount} {baseCurrency} = {convertedAmount} {targetCurrency}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
