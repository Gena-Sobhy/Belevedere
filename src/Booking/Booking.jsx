import React from 'react'
import './booking.css'
import ExploreArrow from '../assets/explore-arrow.svg';

const Booking = () => {
  return (
    <div className="booking" id='booking'>
      <div className="booking_content">
        <h1>Book A Flight Now</h1>
        <button className='explore_btn'>Explore the packages and offers <img src={ExploreArrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Booking