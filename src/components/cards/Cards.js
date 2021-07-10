import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';
import { withRouter } from 'react-router-dom';
import microscope from '../../assets/images/microscope.png';

const Cards = (props) => {
  const virusData = {
    coronavirus: {

      src:'/images/coronavirus.png'

    },
    flavivirus: {
      src:'/images/flavivirus.png'
    },
    mobillivirus: {
      src:'/images/morbillivirus.png'
    },
    yersenia: {

      src:'/images/yersinia.png'
    },
    ebolavirus: {
      src:'/images/ebola.jpeg'
    },
    orthopoxvirus : {

      src:'/images/orthopox.png'
    },   
  }

  return (
    <div 
    className='cards'
    style={{ backgroundImage: `url(${microscope})` }}>
      <h1 className = 'cards-title'>Understanding Viruses</h1>
      <p>Click on a card to view the interactive virus model!</p>
      <div className='cards-container'>
          {
            Object.keys(virusData).map((key) => {
              return(
                <CardItem
                src= {virusData[key].src}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                onClick={() => props.history.push(`/virus/${key}`)}
              />)
            }
              )
          }
        </div>
    </div>
  );
}

export default withRouter(Cards);