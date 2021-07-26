import React, { Component } from 'react';
import InfoSection from './components/info-section/info-section.component';
import CustomButton from './components/custom-button/custom-button.component.jsx';
import { withRouter } from 'react-router';

const About = ({ history }) => {
  return ( 
    <div> 
        <InfoSection img = {'https://64.media.tumblr.com/3f2ede2056493329501bef9dbb038b16/a01ac59c704995dc-d9/s400x600/2653f12ec9a0009e9123339cf4f642e32eabd98e.gifv'} title = "Virus Lethality">
          <CustomButton onClick = {() => history.push('/aboutText')} filled>
            About
          </CustomButton>
          <p> Enjoy the fun interactive animation!</p>
          <CustomButton onClick = {() => history.push('/virus/lethality')} filled>
            See the animation
          </CustomButton>
        </InfoSection>
    </div>
  );
}

export default withRouter(About);
