import React from "react";

const ExchangeRate = ({ exchangeRate }) => (
  <div className="exchange-rate">{exchangeRate || "Getting exchange rate..."}</div>
);

export default ExchangeRate;
