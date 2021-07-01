import React from 'react';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <img className = 'home-img' src="/images/Black Plague.jpeg" /*autoPlay loop muted*/ />
            <h1 style={{ color: 'white' }}>The Virusim</h1>
            <p style={{ color: 'white' }}>Interactive Virus Simulation</p>
        </div>
    )

}

export default HeroSection