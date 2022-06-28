import React, { useContext, useEffect } from 'react';
import TooltipContext from '../../context/TooltipContext';
import './InfoTooltip.css';

export default function InfoTooltip({ message }) {
  const { setTooltipMessage } = useContext(TooltipContext);

  useEffect(() => {
    setTimeout(() => {
      setTooltipMessage('');
    }, 5000);
  });

  return (
    <div className={`info-tooltip ${message && 'info-tooltip_opened'}`}>
      <p className="info-tooltip__text">{message}</p>
    </div>
  );
}
