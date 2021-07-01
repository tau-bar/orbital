import React from 'react';
import './homepage.styles.scss';
import HeroSection from '../../components/HeroSection';
import HeroSection2 from '../../components/HeroSection2';
import Cards from '../../components/Cards';
import Timeline from '../../components/homepage-timeline/homepage-timeline.component.jsx';

function Home() {
  return (
    <div> 
    <HeroSection2 />
    <HeroSection />
    <Cards /> 
    <Timeline/>

     </div>
    
  );
}

export default Home;



