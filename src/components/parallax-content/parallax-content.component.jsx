import React from 'react';
import './parallax-content.styles.scss';

const ParallaxContent = ({ year, origin, deaths, children, type }) => (
    <div className = {`parallax-content ${type}`}>
        <div className = "parallax-list">
            <p className = "parallax-small-text">Year pandemic started</p>
            <h1 className = "parallax-big-text">{year}</h1>
            <p className = "parallax-small-text">Origin</p>
            <h1 className = "parallax-big-text">{origin}</h1>
            <p className = "parallax-small-text">Deaths</p>
            <h1 className = "parallax-big-text">{deaths}</h1>
        </div>
        <div className = "parallax-desc">
            {children}
        </div>
    </div>
)

export default ParallaxContent