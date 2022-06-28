import React from 'react';
import './InfoTooltip.css';

export default function InfoTooltip({ message }) {
  return (
    <div className={`info-tooltip ${message && 'info-tooltip_opened'}`}>
      <p className="info-tooltip__text">{message}</p>
    </div>
  );
}
