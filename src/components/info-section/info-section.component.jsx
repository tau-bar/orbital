import React from 'react';
import Fade from 'react-reveal/Fade';
import './info-section.styles.scss';

const InfoSection = ({ children, img, title }) => (
    <div style={{ backgroundImage: `url(${img})` }} className = 'info-section'>
        <Fade top>
        <div className = 'info-container'>
          <h1 className = 'info-title' >{ title }</h1>
          { children }
        </div>
        </Fade>      
      </div>
)

export default InfoSection;