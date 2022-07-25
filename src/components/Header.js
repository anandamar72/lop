import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import GithubCorner from "react-github-corner";


function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const location = useLocation();
 
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo Part */}
        <div className="logo">
          <h1>
            <span>C</span>oding
            <span>J</span>ourney
          </h1>
        </div>
        {/* 2nd Menu part */}

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link " : "menu-link"
          }
        >
          <ul>
            <li>
              <Link
                className={location.pathname === "/" ? "active" : ""}
                to="/"
                rel="noreferrer"
              >
                Practice
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/Love" ? "active" : ""}
                to="/Love"
                rel="noreferrer"
              >
                Love Babbar's 450
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/Striver" ? "active" : ""}
                to="/Striver"
                rel="noreferrer"
              >
                Striver's  CP Sheet
              </Link>
            </li>
            <li>
              {/* <Link
                className={location.pathname === "/Favourite" ? "active" : ""}
                to="/Favourite"
                rel="noreferrer"
              >
                CS Fundamentals
              </Link>
             */}
            </li>
          
          </ul>
        </div>

        {/* 3rd Login Button */}
      {/* <Link to ="/Login">
        <button className="login-btn">
          Login
          </button>
        </Link> */}
        {/* Hamburger menu start from here */}

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
        <div className="github">

        <GithubCorner
        size={100}
        href="https://github.com/anandamar72/lop/tree/master"/>
        </div>
      </nav>
      {/* <hr /> */}
    </>
  );
}

export default Header;
