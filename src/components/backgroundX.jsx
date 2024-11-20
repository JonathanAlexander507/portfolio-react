import React from "react";

const BackgroundX = () => {
  const xPositions = Array.from({ length: 20 }); // Genera 20 "X" aleatorias

  return (
    <div className="x-container">
      {xPositions.map((_, index) => {
        const sizeClass = index % 2 === 0 ? "small" : "large"; // Alterna tamaños
        const xStyle = {
          top: `${Math.random() * 100}%`, // Posición aleatoria en Y
          left: `${Math.random() * 100}%`, // Posición aleatoria en X
        };

        return (
          <div key={index} className={`x ${sizeClass}`} style={xStyle}>
            X
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundX;
