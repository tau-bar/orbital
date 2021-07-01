import React, {useContext} from 'react';
import './homepage.styles.scss';
import HeroSection from '../../components/HeroSection';
import Cards from '../../components/Cards';
import Timeline from '../../components/homepage-timeline/homepage-timeline.component.jsx';
import {UserContext} from '../../context/UserContext'

function Home() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div> 
    <HeroSection />
    <Cards /> 

    <Timeline/>

     </div>
    
  );
}

export default Home;



