import React from 'react';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/finalAssembly.mp4" autoPlay loop muted />
            <h1 style={{ color: 'white' }}>Virus Assembly</h1>
        </div>
    )

}

export default HeroSection