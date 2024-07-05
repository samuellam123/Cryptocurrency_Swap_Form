import React from "react";

const Buttons = ({ getExchangeRate }) => (
  <>
    <button onClick={getExchangeRate}>Get Token Exchange Rate</button>
  </>
);

export default Buttons;
