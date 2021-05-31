import React, { useState } from 'react';
import './hamburger.styles.scss';
import './hamburger-menu.styles.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';


const Hamburger = (props) => {
    const [isActive, setIsActive] = useState(false);

    const hamburgerOnClick = (event) => {
        event.preventDefault();
        setIsActive(!isActive);
    }

    const linkOnClick = () => {
      setIsActive(false);
      props.history.push('/login')
    }

    console.log(props);
    return (
        <div className = 'hamburger-component'>
        <Link onClick = {linkOnClick} to = '/' className = 'title-logo'><h1 className = 'logo-text'>Virusim</h1></Link>
        <div className = 'login-button'>
          <CustomButton onClick = {linkOnClick} >Log in/Sign up</CustomButton>
        </div>
        <div onClick = {(event) => hamburgerOnClick(event)} className ={`menu ${isActive ? "open" : ""}`}>
        <span class="menu-circle"></span>
        <a href="#" class="menu-link">
          <span class="menu-icon">
            <span class="menu-line menu-line-1"></span>
            <span class="menu-line menu-line-2"></span>
            <span class="menu-line menu-line-3"></span>
          </span>
        </a>
      </div>
    
        <div class={`menu-overlay ${isActive ? "open" : ""}`}>
        <p className='hm-link'>Virus on body</p>
        <p className='hm-link'>Map simulation</p>
        <Link onClick = {(linkOnClick)} to = '/login' className = 'hm-link'>Login</Link>      
        </div>
        </div>
    )
}

export default withRouter(Hamburger);