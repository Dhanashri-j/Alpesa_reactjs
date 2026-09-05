import React from 'react';

function FlagPanel({ src, className = '', children, band = false }) {
  return (
    <div className={`${band ? 'flag-band' : 'flag-panel'} ${className}`.trim()}>
      {src ? <img src={src} alt="" aria-hidden="true" className="flag-watermark" /> : null}
      {children}
    </div>
  );
}

export default FlagPanel;
