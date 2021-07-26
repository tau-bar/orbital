import React from 'react';


/* Routing */
import { withRouter } from 'react-router';

/* Components */
import Timeline from '../../components/homepage-timeline/homepage-timeline.component.jsx';
import InfoSection from '../../components/info-section/info-section.component';

/* Styling */
import './homepage.styles.scss';
import infoimg1 from '../../assets/images/homepage-info-bg.jpg';
import vabg from '../../assets/images/vabg.jpg';
import pandemic from '../../assets/images/pandemic.png';
import vaccine from '../../assets/images/vaccine.jpg';
import ReactPlayer from 'react-player/lazy'
import CustomButton from '../../components/custom-button/custom-button.component.jsx';


const Home = ({ history }) => {
  return (
   
    <div> 
  
      <div className='hero-container'>
          <video className = 'home-img' src="/videos/Start.mp4" loop autoPlay muted/>
        </div>
        <InfoSection img = {infoimg1} title = "What is a virus?">
          <p>Viruses are microscopic particles that somtimes cause diseaes. 🤒</p>
          <p>For example, COVID-19 spreads through droplets in the air. 🦠 </p>
          <p>So, wearing a mask reduces significantly the droplets a virus carrier emits. 😷</p>
          <CustomButton onClick = {() => history.push('/virus')} filled>
            See the viruses <i class="fas fa-viruses"></i>
          </CustomButton>
          <p>Scroll down to see what makes up a virus!</p>
        </InfoSection>
        <InfoSection img = {vabg} title = "Virus Assembly">
        <p>The video shows the different parts of a virus and the roles they play in infecting humans.</p>
        <ReactPlayer height = '200px' width = '360px' volume controls url = "https://youtu.be/pWAVqJb70m0"></ReactPlayer>
      </InfoSection>
      
      <InfoSection img = {pandemic} title = "What is a pandemic?">
        <p>Description of pandemic.</p>
        <p>Scroll down to see the various pandemics over the course of history... ☣️</p>
      </InfoSection>
      <Timeline/>
      <InfoSection img = {vaccine} title = "Protect yourself and others.">
        <h1 style = {{fontSize: '4rem', fontWeight:'bold'}}>Get vaccinated. <i class="fas fa-shield-virus"></i></h1>
      </InfoSection>
      
   
        
    </div>
    

    
  );
}

export default withRouter(Home);

/*

*/



