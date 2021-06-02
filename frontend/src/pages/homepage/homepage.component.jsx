import React from 'react';
import Container from './TopThree.js';
import CarouselContainer from '../../components/CarouselContainer';
import './homepage.styles.scss';
import HeroSection from '../../components/HeroSection';
import Cards from '../../components/Cards';
import Timeline from '../../components/homepage-timeline/homepage-timeline.component.jsx';



function Home() {

  return (
    <div> 
    <HeroSection />
    <Cards /> 
    <CarouselContainer />
    <Timeline/>
     </div>
    
  );
}

export default Home;

