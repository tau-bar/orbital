import React, { useState } from 'react';
import './hamburger.styles.scss';
import './hamburger-menu.styles.css';
import { Link } from 'react-router-dom';
import Container from '../../ThreeScene';
import { BrowserRouter, Route, } from 'react-router-dom'



const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const hamburgerOnClick = (event) => {
        event.preventDefault();
        setIsActive(!isActive);
    }

    const linkOnClick = () => {
      setIsActive(false);
    }

    return (
        <div className = 'hamburger-component'>
        <div onClick = {(event) => hamburgerOnClick(event)} class={`menu ${isActive ? "open" : ""}`}>
        <span class="menu-circle"></span>
        <a href="#" class="menu-link">
          <span class="menu-icon">
            <span class="menu-line menu-line-1"></span>
            <span class="menu-line menu-line-2"></span>
            <span class="menu-line menu-line-3"></span>
            <span class="menu-line menu-line-4"></span>
          </span>
        </a>
      </div>
    
      <div class={`menu-overlay ${isActive ? "open" : ""}`}>
      <p className='hm-link'>Virus on body</p>
      <p className='hm-link'>Map simulation</p>
      <Link onClick = {linkOnClick} to = '/login' className = 'hm-link'>Login</Link>
      <Route path="/models" component={Container}/>
      </div>
        </div>
    )
}

export default Hamburger;