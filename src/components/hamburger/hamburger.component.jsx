import React, { useContext } from 'react';
import './hamburger.styles.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import { HamburgerContext } from '../../context/HamburgerProvider';
import { logOut } from '../../firebase/firebase.utils';

const Hamburger = (props) => {
    const [isActive, setIsActive] = useContext(HamburgerContext);
    const user = useContext(UserContext);

    const hamburgerOnClick = (event) => {
        event.preventDefault();
        setIsActive(!isActive);
    }

    const linkOnClick = (url) => () => {
      setIsActive(false);
      props.history.push(url)
      
    }

    return (
        <div className = 'hamburger-component'>
        <Link onClick = {() => setIsActive(false)} to = '/' className = 'title-logo'><h1 className = 'logo-text'>Virusim</h1></Link>
        <div className = 'login-button'>
          {user === undefined ? 
          <CustomButton onClick = {linkOnClick('/login')}>Sign In <i class="fas fa-sign-in-alt"></i></CustomButton> :
          <CustomButton onClick = {() => {
            logOut()
            props.history.push('/');
          }}>Log Out <i class="fas fa-sign-out-alt"></i></CustomButton>
          }  
        
        </div>
        <div data-testid = "hamburger" onClick = {(event) => hamburgerOnClick(event)} className ={`menu ${isActive ? "open" : ""}`}>
        <span class="menu-circle"></span>
        <button href="#" class="menu-link">
          <span class="menu-icon">
            <span class="menu-line menu-line-1"></span>
            <span class="menu-line menu-line-2"></span>
            <span class="menu-line menu-line-3"></span>
          </span>
        </button>
      </div>
    

        <div data-testid = "menu-overlay" class={`menu-overlay ${isActive ? "open" : ""}`}>
            <p onClick = {(linkOnClick('/virus'))} className = 'hm-link'>Viruses <i class="fas fa-virus"></i></p>
            <p onClick = {(linkOnClick('/body'))} className = 'hm-link'>Virus Reproduction <i class="fas fa-lungs-virus"></i></p>
            <p onClick = {(linkOnClick('/map'))} className = 'hm-link'>Map <i class="fas fa-globe-americas"></i></p>
            <p onClick = {(linkOnClick('/virus/create'))} className = 'hm-link'>Create New Virus <i class="fas fa-plus"></i></p>
            <p onClick = {(linkOnClick('/about'))} className = 'hm-link'>Virus Lethality <i class="fas fa-skull"></i></p>
            {user ? <p onClick = {(linkOnClick('/profile'))} className = 'hm-link'>My Profile <i class="fas fa-user"></i></p> : '' }
        </div>
        </div>
    )
}

export default withRouter(Hamburger);