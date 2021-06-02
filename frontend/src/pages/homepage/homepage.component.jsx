import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxTitle from '../../components/parallax-title/parallax-title.component';
import ParallaxComponent from '../../components/parallax/parallax.component';
import './homepage.styles.scss'

function Home() {

  return (
    <div style = {{paddingTop: '500px', paddingBottom: '500px'}}> 
    <ParallaxComponent imgSrc = "/images/sarsParallax.jpg" direction = "left">
        <ParallaxTitle>Sars</ParallaxTitle>
      </ParallaxComponent>
      <ParallaxComponent imgSrc = "/images/ebolaParallax.jpg" direction = "right">
        <ParallaxTitle>Ebola</ParallaxTitle>
      </ParallaxComponent>
      <ParallaxComponent imgSrc = "/images/covidParallax.jpg" direction = "left">
        <ParallaxTitle>Coronavirus</ParallaxTitle>
      </ParallaxComponent>
     </div>
    
  );
}

export default Home;

