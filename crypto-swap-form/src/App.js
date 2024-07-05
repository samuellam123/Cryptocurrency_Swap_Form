import React, { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./components/Header";
import InputAmount from "./components/InputAmount";
import TokenSelect from "./components/TokenSelect";
import ExchangeRate from "./components/ExchangeRate";
import Buttons from "./components/Buttons";

const tokenList = require("./prices.json");

const caseMapping = {
  BLUR: "BLUR",
  BNEO: "bNEO",
  BUSD: "BUSD",
  USD: "USD",
  ETH: "ETH",
  GMX: "GMX",
  STEVMOS: "stEVMOS",
  LUNA: "LUNA",
  RATOM: "rATOM",
  STRD: "STRD",
  EVMOS: "EVMOS",
  IBCX: "IBCX",
  IRIS: "IRIS",
  AMPLUNA: "ampLUNA",
  KUJI: "KUJI",
  STOSMO: "stOSMO",
  USDC: "USDC",
  AXLUSDC: "axlUSDC",
  ATOM: "ATOM",
  STATOM: "stATOM",
  OSMO: "OSMO",
  RSWTH: "rSWTH",
  STLUNA: "stLUNA",
  LSI: "LSI",
  OKB: "OKB",
  OKT: "OKT",
  SWTH: "SWTH",
  USC: "USC",
  WBTC: "WBTC",
  WSTETH: "wstETH",
  YIELDUSD: "YieldUSD",
  ZIL: "ZIL",
};

const App = () => {
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState("");

  const latestTokenList = Object.values(
    tokenList.reduce((acc, token) => {
      const { currency, date } = token;
      if (!acc[currency] || new Date(date) > new Date(acc[currency].date)) {
        acc[currency] = token;
      }
      return acc;
    }, {})
  );

  const getIconUrl = (token) =>
    `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${caseMapping[token.toUpperCase()]}.svg`;

  const getExchangeRate = () => {
    const sellTokenPrice = latestTokenList.find((token) => token.currency === fromToken).price;
    const buyTokenPrice = latestTokenList.find((token) => token.currency === toToken).price;
    const buyTokenAmount = ((amount * sellTokenPrice) / buyTokenPrice).toPrecision(6);
    setExchangeRate(`${amount} ${fromToken} = ${buyTokenAmount} ${toToken}`);
  };

  useEffect(() => {
    getExchangeRate();
  }, [fromToken, toToken, amount]);

  return (
    <div className="wrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <Header />
        <InputAmount amount={amount} setAmount={setAmount} />
        <div className="drop-list">
          <div className="sell">
            <p>Sell</p>
            <TokenSelect
              label="Sell"
              token={fromToken}
              setToken={setFromToken}
              tokenList={latestTokenList}
              getIconUrl={getIconUrl}
            />
          </div>
          <div className="icon">
            <i
              className="fas fa-exchange-alt"
              onClick={() => {
                setFromToken(toToken);
                setToToken(fromToken);
              }}
            ></i>
          </div>
          <div className="buy">
            <p>Buy</p>
            <TokenSelect
              label="Buy"
              token={toToken}
              setToken={setToToken}
              tokenList={latestTokenList}
              getIconUrl={getIconUrl}
            />
          </div>
        </div>
        <ExchangeRate exchangeRate={exchangeRate} />
        <Buttons getExchangeRate={getExchangeRate} />
      </form>
    </div>
  );
};

export default App;
