import React, { useState } from 'react';
import './Textcube.css';

function TextCube () {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };


  return (
    <div
        className={`cube ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="front">Front</div>
      <div className="side">Side</div>
    </div>
  );
}

export default TextCube;