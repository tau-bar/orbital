import React from 'react';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Info from '../components/Information';
import Details from '../components/Details';
import Container from '../ThreeScene';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <>
      <HeroSection />
      <ScrollContainer>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <Info/>
        </Animator>
      </ScrollPage>
      </ScrollContainer>
      <ScrollContainer>
      <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}>
        <Details/>
        </Animator>
      </ScrollPage>
      </ScrollContainer>
      <Cards />  
      <Container />    
    </>
  );
}

export default Home;

