import React from 'react';
import './exploreCard.css';
import ExploreBtn from '../assets/explore-btn.svg';

const ExploreCard = ({ img, city, title, location, about, isReversed }) => {
  return (
    /* This adds the 'reversed' class if isReversed is true */
    <div className={`exploreCard ${isReversed ? 'reversed' : ''}`}>
      <div className="exploreCard-content">
        
      </div>
      <div className="exploreCard_img">
        <img src={img} alt={title} />
      </div>

      <div className="exploreCard_content">
        {city && <h4> <div className="horizontal-line"  /> {city}</h4> }
        <h1>{title}</h1>
        <h2>{location}</h2>
        <p>{about}</p>
        <button className="exploreCard_btn">
          Explore More <img src={ExploreBtn} alt="explore" />
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;

