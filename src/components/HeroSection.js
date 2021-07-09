import React from 'react';
import './HeroSection.css';
import ReactPlayer from 'react-player/lazy'
import InfoSection from './info-section/info-section.component';

function HeroSection() {
    return (
        <div className='hero-container'>
            <InfoSection title = "Virus Assembly">
                <p>The video shows the parts of a virus.</p>
                <ReactPlayer volume controls url = "/videos/finalAssembly.mp4"></ReactPlayer>
            </InfoSection>
        </div>
    )

}

export default HeroSection