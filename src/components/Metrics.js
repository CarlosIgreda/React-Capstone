import React from 'react';
import { useSelector } from 'react-redux';

const Metrics = () => {
  const chosenCoin = useSelector((state) => state.metrics.data);

  if (!chosenCoin) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="coin metrics">
      <div className="coin-symbol">{chosenCoin.coinSymbol}</div>
      <img src={chosenCoin.coinImage} alt={chosenCoin.coinName} />
      <div className="coin-name">{chosenCoin.coinName}</div>
      <ul className="ul">
        <li className="li">
          <div className="coin-price">
            Current Price:&nbsp;
            {chosenCoin.coinPrice}
          </div>
        </li>
        <li className="li">
          <div className="coin-ath">
            ATH:&nbsp;
            {chosenCoin.coinAth}
          </div>
        </li>
        <li className="li">
          <div className="coin-atl">
            ATL:&nbsp;
            {chosenCoin.coinAtl}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Metrics;
