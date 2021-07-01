import React from 'react';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1 style={{ color: 'white' }}>Virus Assembly</h1>
            <video className = 'home-img' src="/videos/finalAssembly.mp4" autoPlay loop muted />
            
        </div>
    )

}

export default HeroSection