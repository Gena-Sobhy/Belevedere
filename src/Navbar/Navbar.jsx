import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import dropDown from "../assets/drop-down.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const underlineRef = useRef(null);
  const linkRefs = useRef({});

  const navLinks = [
    { name: "home", label: "Home", href: "#home" },
    { name: "explore", label: "Explore", href: "#explore" },
    { name: "booking", label: "Booking", href: "#booking" },
    { name: "about", label: "About", href: "#about" },
  ];

  useEffect(() => {
    const activeEl = linkRefs.current[active];
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
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                ref={(el) => (linkRefs.current[link.name] = el)}
                className={active === link.name ? "active" : ""}
                onClick={() => setActive(link.name)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ol>
        <span ref={underlineRef} className="underline"></span>
      </div>

      <div className="nav-container">
        <div className="navbar_search">
          <img src={search} alt="search" className="search" />
          <button className="language">
            English <img src={dropDown} alt="dropdown" />
          </button>
        </div>

        <div className="res_navbar_links">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <IoMdClose
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ol>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      ref={(el) => (linkRefs.current[link.name] = el)}
                      className={active === link.name ? "active" : ""}
                      onClick={() => {
                        setActive(link.name);
                        setToggleMenu(false);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ol>

              <button className="language">
                English <img src={dropDown} alt="dropdown" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
