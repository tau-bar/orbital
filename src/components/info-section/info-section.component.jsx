import React from 'react';
import Fade from 'react-reveal/Fade';
import './info-section.styles.scss';

const InfoSection = ({ short, children, img, title }) => (
    <div style={{ backgroundImage: `url(${img})`, height: `${short ? '90vh' : "100vh"}` }} className = 'info-section'>
        <Fade top>
        <div className = 'info-container'>
          <h1 data-testid = 'info-title' className = 'info-title' >{ title }</h1>
          { children }
        </div>
        </Fade>      
      </div>
)

export default InfoSection;