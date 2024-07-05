

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
        <header>Token Swap</header>
        <div className="input-amount">
          <label htmlFor="input-amount">Amount to send</label>
          <input
            type="number"
            step="0.00001"
            autoComplete="off"
            id="input-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="drop-list">
          <div className="sell">
            <p>Sell</p>
            <div className="select-box">
              <img src={getIconUrl(fromToken)} alt="token" />
              <select value={fromToken} onChange={(e) => setFromToken(e.target.value)}>
                {latestTokenList.map((token) => (
                  <option key={token.currency} value={token.currency}>
                    {token.currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="icon">
            <i className="fas fa-exchange-alt" onClick={() => {
              setFromToken(toToken);
              setToToken(fromToken);
            }}></i>
          </div>
          <div className="buy">
            <p>Buy</p>
            <div className="select-box">
              <img src={getIconUrl(toToken)} alt="token" />
              <select value={toToken} onChange={(e) => setToToken(e.target.value)}>
                {latestTokenList.map((token) => (
                  <option key={token.currency} value={token.currency}>
                    {token.currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="exchange-rate">{exchangeRate || "Getting exchange rate..."}</div>
        <button onClick={getExchangeRate}>Get Token Exchange Rate</button>
        <button onClick={() => window.open("https://dem.exchange", "_blank")}>
          <u>Connect Wallet</u> <img src="images/open_link.png" alt="Follow_Link" />
        </button>
      </form>
    </div>
  );