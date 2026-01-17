import React from 'react'
import "./footer.css"
import PrimaryLogo from "../assets/primary logo.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_content">

            <div className="footer_logo">
                <img src={PrimaryLogo} alt="Footer Logo" />
                <p>Apt. 557 68317 Asley Well, <br /> Milagroville, NH 32205-1348</p>
            </div>

            <div className="footer_links">
                <div className="link_group">
                    <h4>Belevedere</h4>
                    <a href="#home">Home</a>
                    <a href="#explore">Explore</a>
                    <a href="#booking">Booking</a>
                    <a href="#aboutus">About Us</a>
                </div>
                <div className="link_group">
                    <h4>Contact</h4>
                    <a href="">Email</a>
                    <a href="">LinkedIn</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                </div>
            </div>
        </div>
        
        <div className="horizontal_line" />
    </div>
  )
}

export default Footer