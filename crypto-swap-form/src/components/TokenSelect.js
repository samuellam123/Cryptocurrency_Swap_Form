import React from "react";

const TokenSelect = ({ label, token, setToken, tokenList, getIconUrl }) => (
  <div className="select-box">
    <img src={getIconUrl(token)} alt="token" />
    <select value={token} onChange={(e) => setToken(e.target.value)}>
      {tokenList.map((t) => (
        <option key={t.currency} value={t.currency}>
          {t.currency}
        </option>
      ))}
    </select>
  </div>
);

export default TokenSelect;
