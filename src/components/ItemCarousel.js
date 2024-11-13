
import React, { useState } from 'react';

const ItemCarousel = ({ items, onSelect, selectedItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    onSelect(items[newIndex].value);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    onSelect(items[newIndex].value);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={handlePrev}>{"<"}</button>
      <div className="carousel-item">
        <span>{items[currentIndex].label}</span>
      </div>
      <button className="carousel-button next-button" onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default ItemCarousel;

