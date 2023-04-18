import React from 'react';
import './Header.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../Assets/Black And Gold Modern Beauty Salon Logo.png';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Header = () => {
  const navRef = useRef();
  // const history = useHistory();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
  return (
    <header>
     
     <img src={logo} alt=""  />
      
      <nav ref={navRef}>
        <Link to="/tvshows">
          <a href="/#">Tv Shows</a>
        </Link>
        <Link to="/movies">
          <a href="/#">Movies</a>
        </Link>
        <Link to="/recently_added">
          <a href="/#">Recently Added</a>
        </Link>
        <a href="/#">My List</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>

        {/* <input
          type="search"
          placeholder="Search"
          aria-label="Search"
        /> */}

      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header