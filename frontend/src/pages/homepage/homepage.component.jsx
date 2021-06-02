import React from 'react';
import Container from './TopThree.js';
import CarouselContainer from '../../components/CarouselContainer';
import ParallaxTitle from '../../components/parallax-title/parallax-title.component';
import ParallaxComponent from '../../components/parallax/parallax.component';
import './homepage.styles.scss';
import HeroSection from '../../components/HeroSection';
import Cards from '../../components/Cards';

function Home() {

  return (
    
    <div> 
    <HeroSection />
    <Cards /> 
    <CarouselContainer />
    <Container />
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

