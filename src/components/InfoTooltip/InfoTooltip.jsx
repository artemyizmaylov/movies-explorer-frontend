import React, { useContext, useEffect } from 'react';
import './InfoTooltip.css';
import TooltipContext from '../../context/TooltipContext';

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
