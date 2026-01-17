import React from 'react'
import './about.css'
import ExploreCard from "../ExploreCard/ExploreCard"
import CoverImage from "../assets/cover image.png"

const About = () => {
  return (
    <div className='about' id='about'>
        <ExploreCard className="about-card" img={CoverImage} title="About US" location="Belevedere Travel Agency" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis." 
        isReversed={true} />

        <div className="blurry-effect about" />
    </div>
  )
}

export default About