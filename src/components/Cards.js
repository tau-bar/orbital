import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';
import { withRouter } from 'react-router-dom';

const Cards = (props) => {
  const virusData = {
    coronavirus: {
      src:'/images/corona.jpeg'
    },
    flavivirus: {
      src:'/images/fla.jpeg'
    },
    mobillivirus: {
      src:'/images/morbi.jpeg'
    },
    yersenia: {
      src:'/images/yersenia.jpeg'
    },
    ebolavirus: {
      src:'/images/ebola.jpeg'
    },
    orthopoxvirus : {
      src:'/images/ortho.jpeg'
    },
    betacoronavirus: {
      src:'/images/beta.jpeg'
    }
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
                onClick={() => props.history.push(`virus/${key}`)}
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