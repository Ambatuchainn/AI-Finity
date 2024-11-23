import React from 'react';
import './Header.css';
import logo from './components/logo.png';

const Header = () => (
  <header className="header">
    <h1 className="title">AI-Powered NFT Generator</h1>
    <p className="subtitle">Create and mint art in a minute with ease</p>
    <img src={logo} alt="Site Logo" className="site-logo" />
  </header>
);

export default Header;
