import React from 'react';
import InfoSection from '../../components/info-section/info-section.component';
import ReactPlayer from 'react-player/lazy'
import body from '../../assets/images/body.jpg'

function BodyAnimation() {
    return (
            <InfoSection img = {body} title = "Virus Reproduction">
                <p>The video demonstrates how a virus reproduces once it enters the human body.</p>
                <ReactPlayer height = '200px' width = '360px' volume controls url = "https://youtu.be/DDDdPDlLvJs"></ReactPlayer>
            </InfoSection>
    )

}

export default BodyAnimation