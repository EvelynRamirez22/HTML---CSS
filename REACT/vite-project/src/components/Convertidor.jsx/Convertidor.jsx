import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [currencyRates, setCurrencyRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const API_KEY = "321a77704601e61c4da6d15b";

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
        );
        if (response.ok) {
          const data = await response.json();
          setCurrencyRates(data.conversion_rates);
        } else {
          throw new Error("Failed to fetch exchange rates");
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [fromCurrency]);

  const handleConvert = () => {
    const rate = currencyRates[toCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  return (
    <div>
      <h2>Exchange Rate Calculator</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>From Currency:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        <h3>Converted Amount:</h3>
        <p>
          {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
