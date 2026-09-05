import React from 'react';
import './styles/Modal.css';

export default function Modal({ open, title, children, onClose, variant = 'info' }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className={`modal ${variant}`}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-actions">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
