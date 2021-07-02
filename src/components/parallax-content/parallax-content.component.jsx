import React from 'react';
import './parallax-content.styles.scss';
import Fade from 'react-reveal/Fade';

const ParallaxContent = ({ year, origin, deaths, children, type }) => (
    <div className = {`parallax-content ${type}`}>
        <Fade left cascade>
        <div className = "parallax-list">
            <p className = "parallax-small-text">Year pandemic started</p>
            <h1 className = "parallax-big-text">{year}</h1>
            <p className = "parallax-small-text">Origin</p>
            <h1 className = "parallax-big-text">{origin}</h1>
            <p className = "parallax-small-text">Deaths</p>
            <h1 className = "parallax-big-text">{deaths}</h1>
        </div>
        </Fade>
        <Fade right>
        <div className = "parallax-desc">
            {children}
        </div>
        </Fade>
    </div>
)

export default ParallaxContent