import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UnauthLinks from '../UnauthLinks/UnauthLinks';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [bgColor, setBgColor] = useState({ background: 'transperent' });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setBgColor({ background: '#073042' });
      setLoggedIn(false);
    }
  }, [location]);

  return (
    <header className="header" style={bgColor}>
      <Logo />
      {loggedIn ? <Navigation /> : <UnauthLinks />}
    </header>
  );
}
