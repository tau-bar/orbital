import React from 'react';
import InfoSection from '../../components/info-section/info-section.component';
import ReactPlayer from 'react-player/lazy'

function BodyAnimation() {
    return (
        <div className='hero-container'>
            <InfoSection title = "Virus Reproduction">
                <p>The video demonstrates how a virus reproduces once it enters the human body.</p>
                <ReactPlayer volume controls url = "/videos/body.mp4"></ReactPlayer>
            </InfoSection>
        </div>
    )

}

export default BodyAnimation