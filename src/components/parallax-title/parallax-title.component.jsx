import React from 'react';
import './parallax-title.styles.scss';
import Flip from 'react-reveal/Flip';

const ParallaxTitle = ({ children }) => (
    
    <div data-testid = "parallax-title" className = 'parallax-title'>
        <Flip top cascade>{children}</Flip>
    </div>
)

export default ParallaxTitle;