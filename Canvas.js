import React from 'react';
import './Canvas.css';

const Canvas = ({ children }) => {
  return (
    <div className="canvas-container">
      {children}
    </div>
  );
};

export default Canvas;

