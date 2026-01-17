import React, { useState } from 'react';
import Play from '../assets/play.png';
import Navbar from '../Navbar/Navbar';
import travelSlides from '../assets/travelSlides';
import arrowLeft from '../assets/chevron-left.svg';
import arrowRight from '../assets/chevron-right.svg';
import './hero.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = travelSlides.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...more";
  };

  const getVisibleSlides = () => {
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((offset) => {
      const index = (currentIndex + offset + totalSlides) % totalSlides;
      return {
        ...travelSlides[index],
        level: Math.abs(offset), 
      };
    });
  };

  return (
    <div className="hero" id='home'>
      <Navbar />
      
      <div className="hero_content_wrapper">
          <div className="hero_content_main">
            <div className="hero_title">
              <h1>The culture of <br /><span>London</span></h1>
            </div>

            <div className="play_button">
              <button><img src={Play} alt="Play" /></button>
            </div>
          </div>

          <div className="carousel_container">
            <button className="nav_btn prev" onClick={handlePrev}>
                <img src={arrowLeft} alt="Previous" />
            </button>
            
            <div className="hero_slides">
              {getVisibleSlides().map((slide, index) => (
                <div
                  key={`${slide.id}-${index}`}
                  className={`slide_card level-${slide.level}`}
                >
                  <img src={slide.image} alt={slide.name} />
                  <div className="slide_info">
                    <h3>{slide.name}</h3>
                    <p>{truncateText(slide.about, 40)}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="nav_btn next" onClick={handleNext}>
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default Hero;