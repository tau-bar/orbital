import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';
import { withRouter } from 'react-router-dom';

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
    <div className='cards'>
      <h1 className = 'cards-title'>Understanding Viruses</h1>
      <div className='cards__container'>

          <div className='cards__items'>
          {
            Object.keys(virusData).map((key) => {
              return(
                <CardItem
                src= {virusData[key].src}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                onClick={() => props.history.push(`/virus/model/${key}`)}
              />)
            }
              )
          }
          </div>
      </div>
    </div>
  );
}

export default withRouter(Cards);