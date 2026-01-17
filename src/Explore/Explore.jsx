import React from 'react'
import './explore.css'
import ExploreCard from '../ExploreCard/ExploreCard';
import exploreAssets from "../assets/explore";
import ExploreArrow from '../assets/explore-arrow.svg';

const Explore = () => {
  return (
    <div className="explore" id='explore'>        
        <div className="explore_search">
            <h1>Explore the world</h1>
            <div className="explore_search-content">
              <input type="text" placeholder="Places to go" />
              <button className="explore_search-btn">Inspire Me</button>
            </div>
        </div>

        <div className="blurry-effect left" />
        <div className="blurry-effect right" />

        <div className="explore_recommendations">
            <h2 className='explore_recommendations-title'>Our Top Recommendations</h2>
            <div className="explore_recomendations-card">
                {exploreAssets.map((item, index) => (
              <ExploreCard 
                key={index} 
                {...item} 
                isReversed={index % 2 !== 0} 
              />
              ))}
            </div>
        </div>

        <div className="explore_more">
            <button className='explore_btn'>Explore More Places <img src={ExploreArrow} alt="explore" /></button>
        </div>
    </div>
  )
}

export default Explore