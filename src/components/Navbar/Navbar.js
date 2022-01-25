import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import SvgLogo from "../../svg/Logo";
import "./Navbar.css";
import Data from "../../data/data";
import useDarkMode from "../../hooks/useDarkMode";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isActive, setActive] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNavbar = () => {
    if (screenWidth < 768) {
      setActive(!isActive);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    setTheme(colorTheme);
  };

  return (
    <>
      {/* bg */}
      <div className="bg">
        {/* content */}
        <div className="content">
          {/* logo */}
          <div className="logo" onClick={scroll.scrollToTop}>
            <SvgLogo className="w-10 h-10" />
            <div>COVIDDATA.RO</div>
          </div>
          {/* navigation */}
          <div className={`navigation ${isActive ? "isMenu" : null}`}>
            {/* items */}
            <div className="list" onClick={toggleNavbar}>
              <a href="tel:112">
                <div className="item text-red-500">{Data.navbar.item1}</div>
              </a>
              <a href="https://selimmh.me" target="blank">
                <div className="item">{Data.navbar.item2}</div>
              </a>

              <div className="toggleDark">
                {isDarkMode ? (
                  <FiSun onClick={toggleDarkMode} className=" text-gray-800" />
                ) : (
                  <RiMoonClearLine
                    onClick={toggleDarkMode}
                    className=" text-gray-100"
                  />
                )}
              </div>
            </div>
          </div>
          {/* menu */}
          <div className="toggle">
            {isActive ? (
              <AiOutlineClose onClick={toggleNavbar} />
            ) : (
              <BiMenuAltRight
                className="text-gray-800 dark:text-gray-100"
                onClick={toggleNavbar}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
