import React from 'react';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Container from '../components/TopThree';
import CarouselContainer from '../components/CarouselContainer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards /> 
      <CarouselContainer />
      <Container />
    </>
  );
}

export default Home;

