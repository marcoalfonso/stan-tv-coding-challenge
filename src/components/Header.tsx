import React from 'react';
import logo from '../logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Stan Logo" />
        </div>
        <nav className="header__navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tv-shows">TV Shows</a></li>
            <li><a href="/movies">Movies</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;