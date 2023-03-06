import React from 'react'
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive nav");
    }


  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About us</a>
        <button  className="nav-btn nav-close" nClick={showNavbar}>
        <FaTimes/>  
        </button>
        </nav>


        <button className="nav-btn" onClick={showNavbar}>
    <FaBars/>

        </button>
    </header>
  )
}

export default Navbar
