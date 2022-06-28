import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UnauthLinks from '../UnauthLinks/UnauthLinks';
import Navigation from '../Navigation/Navigation';
import UserContext from '../../context/UserContext';

export default function Header() {
  const [bgColor, setBgColor] = useState({ background: 'transperent' });
  const location = useLocation();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (location.pathname === '/') {
      setBgColor({ background: '#073042' });
    }
  }, [location]);

  return (
    <header className="header" style={bgColor}>
      <Logo />
      {currentUser._id ? <Navigation /> : <UnauthLinks />}
    </header>
  );
}
