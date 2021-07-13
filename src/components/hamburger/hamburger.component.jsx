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
        <Link onClick = {linkOnClick} to = '/' className = 'title-logo'><h1 className = 'logo-text'>Virusim</h1></Link>
        <div className = 'login-button'>
          {user === undefined ? 
          <CustomButton onClick = {linkOnClick('/sign-up')}>Log In</CustomButton> :
          <CustomButton onClick = {logOut}>Log Out</CustomButton>
          }  
        
        </div>
        <div onClick = {(event) => hamburgerOnClick(event)} className ={`menu ${isActive ? "open" : ""}`}>
        <span className="menu-circle"></span>
        <div href="#" className="menu-link">
          <span className="menu-icon">
            <span className="menu-line menu-line-1"></span>
            <span className="menu-line menu-line-2"></span>
            <span className="menu-line menu-line-3"></span>
          </span>
        </div>
      </div>
    
        <div className={`menu-overlay ${isActive ? "open" : ""}`}>
            <p onClick = {(linkOnClick('/virus'))} className = 'hm-link'>Viruses</p>
            <p onClick = {(linkOnClick('/body'))} className = 'hm-link'>Virus Reproduction</p>
            <p onClick = {(linkOnClick('/map'))} className = 'hm-link'>Map</p>
            <p onClick = {(linkOnClick('/virus/create'))} className = 'hm-link'>Create New Virus</p>
        </div>
        </div>
    )
}

export default withRouter(Hamburger);