import React from 'react';
import './Button.scss';

export default function Button({ children }) {
  return (
    <>
      <div className="Button">
        <button>{children}</button>
      </div>
    </>
  );
}
