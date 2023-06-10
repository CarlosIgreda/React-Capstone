import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="logo-and-icons">
    <NavLink to="/">
      <FontAwesomeIcon icon={faChevronLeft} className="back-icon" />
    </NavLink>
    <NavLink to="/">
      <img className="page-logo" src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png" alt="coingecko-logo" />
    </NavLink>
    <FontAwesomeIcon icon={faGear} className="settings-icon" />
  </header>
);

export default Header;
