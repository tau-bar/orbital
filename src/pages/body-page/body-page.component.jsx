import React from 'react';
import InfoSection from '../../components/info-section/info-section.component';
import ReactPlayer from 'react-player/lazy'

function BodyAnimation() {
    return (
            <InfoSection title = "Virus Reproduction">
                <p>The video demonstrates how a virus reproduces once it enters the human body.</p>
                <ReactPlayer height = '200px' width = '360px' volume = {1} controls url = "/videos/body.mp4"></ReactPlayer>
            </InfoSection>
    )

}

export default BodyAnimation