import React from "react";

const InputAmount = ({ amount, setAmount }) => (
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
);

export default InputAmount;
