import React from 'react';
import './parallax-content.styles.scss';

const ParallaxContent = ({ year, origin, deaths, children, type }) => (
    <div className = {`parallax-content ${type}`}>
        <div className = "parallax-list">
            <p data-testid = "parallax-year" className = "parallax-small-text">Year pandemic started</p>
            <h1 data-testid = 'year-data' className = "parallax-big-text">{year}</h1>
            <p data-testid = "parallax-origin" className = "parallax-small-text">Origin</p>
            <h1 data-testid = 'origin-data' className = "parallax-big-text">{origin}</h1>
            <p data-testid = "parallax-deaths" className = "parallax-small-text">Deaths</p>
            <h1 data-testid = 'deaths-data' className = "parallax-big-text">{deaths}</h1>
        </div>
        <div data-testid = "parallax-desc" className = "parallax-desc">
            {children}
        </div>
    </div>
)

export default ParallaxContent