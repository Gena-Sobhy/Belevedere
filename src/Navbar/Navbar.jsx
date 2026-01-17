import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import dropDown from '../assets/drop-down.png';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const underlineRef = useRef(null);
  const linkRefs = {
    home: useRef(null),
    explore: useRef(null),
    booking: useRef(null),
    about: useRef(null),
  };

  useEffect(() => {
    const activeEl = linkRefs[active].current;
    const underline = underlineRef.current;

    if (activeEl && underline) {
      const { offsetLeft, offsetWidth } = activeEl;
      underline.style.transform = `translateX(${offsetLeft}px)`;
      underline.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar_links">
        <ol>
          <li>
            <a
              href="#home"
              ref={linkRefs.home}
              className={active === 'home' ? 'active' : ''}
              onClick={() => setActive('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#explore"
              ref={linkRefs.explore}
              className={active === 'explore' ? 'active' : ''}
              onClick={() => setActive('explore')}
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#booking"
              ref={linkRefs.booking}
              className={active === 'booking' ? 'active' : ''}
              onClick={() => setActive('booking')}
            >
              Booking
            </a>
          </li>
          <li>
            <a
              href="#about"
              ref={linkRefs.about}
              className={active === 'about' ? 'active' : ''}
              onClick={() => setActive('about')}
            >
              About
            </a>
          </li>
        </ol>
        <span ref={underlineRef} className="underline"></span>
      </div>

      <div className="navbar_search">
        <img src={search} alt="search" className="search" />
        <button className="language">
          English <img src={dropDown} alt="dropdown" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;