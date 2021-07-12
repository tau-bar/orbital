import React from 'react';


/* Routing */
import { withRouter } from 'react-router';

/* Components */
import Timeline from '../../components/homepage-timeline/homepage-timeline.component.jsx';
import Button from '@material-ui/core/Button';
import InfoSection from '../../components/info-section/info-section.component';

/* Styling */
import './homepage.styles.scss';
import infoimg1 from '../../assets/images/homepage-info-bg.jpg';
import pandemic from '../../assets/images/pandemic.png';
import vaccine from '../../assets/images/vaccine.jpg';
import ReactPlayer from 'react-player/lazy'

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
          <Button onClick = {() => history.push('/virus')} variant="contained" color="secondary">
            See the viruses
          </Button>
          <p>Scroll down to see what makes up a virus!</p>
        </InfoSection>
        <InfoSection title = "Virus Assembly">
        <p>The video shows the different parts of a virus and the roles they play in infecting humans.</p>
        <ReactPlayer height = '200px' width = '360px' volume controls url = "/videos/finalAssembly.mp4"></ReactPlayer>
      </InfoSection>
      
      <InfoSection img = {pandemic} title = "What is a pandemic?">
        <p>Description of pandemic.</p>
        <p>Scroll down to see the various pandemics over the course of history... ☣️</p>
      </InfoSection>
      <Timeline/>
      <InfoSection img = {vaccine} title = "Protect yourself and others.">
        <h1 style = {{fontSize: '4rem', fontWeight:'bold'}}>Get vaccinated.</h1>
      </InfoSection>
    </div>

    
  );
}

export default withRouter(Home);



