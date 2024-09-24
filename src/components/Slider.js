import React, { useState } from 'react';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  { id: 1, content: 'Slide 1', color: '#f5b971' },
  { id: 2, content: 'Slide 2', color: '#a5d6a7' },
  { id: 3, content: 'Slide 3', color: '#81c784' },
  { id: 4, content: 'Slide 4', color: '#ffab91' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={index === currentSlide ? 'slide active' : 'slide'}
            style={{ backgroundColor: slide.color }}
          >
            {index === currentSlide && (
              <h2>{slide.content}</h2>
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      {/* Next Button */}
      <button className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Dots for Slide Navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
