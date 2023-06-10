import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { asset } from '../redux/metrics/metricsSlice';
import { getCoins } from '../redux/coins/coinsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const CoinsList = () => {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currency = useSelector((state) => state.coins.currency);
  const loading = useSelector((state) => state.coins.loading);
  const error = useSelector((state) => state.coins.error);

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  if (loading || Object.keys(currency).length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:&nbsp;
        {error}
      </div>
    );
  }

  const handleSearchChange = (event) => {
    setsearch(event.target.value);
  };

  const clickHandler = (coinSymbol, coinImage, coinName, coinPrice, coinAth, coinAtl) => {
    const payload = {
      coinSymbol,
      coinImage,
      coinName,
      coinPrice,
      coinAth,
      coinAtl,
    };
    dispatch(asset(payload));
    navigate('/metrics');
  };

  const filterCoin = Object.values(currency).filter(
    (cryptoAsset) => cryptoAsset.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <nav className="body-tertiary nav-container">
        <div className="container-fluid search-container">
          <form className="d-flex nav-form" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search your coin"
              aria-label="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success button-search" type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </nav>

      <section className="coins-container">
        {filterCoin.map((cryptoAsset) => (
          <div
            className="coin"
            tabIndex={0}
            key={cryptoAsset.symbol}
            role="button"
            onClick={() => clickHandler(
              cryptoAsset.symbol,
              cryptoAsset.icon_url,
              cryptoAsset.name,
              cryptoAsset.current_price,
              cryptoAsset.ath,
              cryptoAsset.atl,
            )}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                clickHandler(
                  cryptoAsset.symbol,
                  cryptoAsset.icon_url,
                  cryptoAsset.name,
                  cryptoAsset.current_price,
                  cryptoAsset.ath,
                  cryptoAsset.atl,
                );
              }
            }}
          >
            <div className="coin-symbol">
              {cryptoAsset.symbol}
            </div>
            <img className="coin-image" src={cryptoAsset.icon_url} alt={cryptoAsset.name} />
            <div className="coin-name">{cryptoAsset.name}</div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CoinsList;
